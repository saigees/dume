import chalk from "chalk";
import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import glob from "glob";
import { promisify } from "util";
import { Route, RouteOptions } from "./lib/class";
import { QL } from "./lib/types";

const globPromise = promisify(glob);

export const logger = (msg: string) => {
  let PREFIX = ` koa `;
  return {
    warn: () => {
      console.log(`${chalk.bgYellowBright(PREFIX)} ${msg}`);
    },
    error: () => {
      console.log(`${chalk.bgRedBright(PREFIX)} ${msg}`);
    },
    success: () => {
      console.log(`${chalk.bgGreenBright(PREFIX)} ${msg}`);
    },
    info: () => {
      console.log(`${chalk.bgCyanBright(PREFIX)} ${msg}`);
    },
    http: () => {
      console.log(`${chalk.bgMagentaBright(PREFIX)} ${msg}`);
    },
  };
};
export const router = async (app: FastifyInstance) => {
  const files = await globPromise(`${__dirname}/routes/**/*.{ts,js}`);
  files.forEach(async (file) => {
    const route: RouteOptions = (await import(file))?.default;
    if (route.path) {
      const fn = (req, res) => {
        new Promise((r, rej) => {
          if (route.middleware) {
            route.middleware.forEach((m) => {
              m(req, res);
              if (route.middleware.indexOf(m) === route.middleware.length - 1) {
                r(0);
              }
            });
          } else {
            r(0);
          }
        }).then(() => {
          route.main(req, res);
        });
      };
      switch (route.method) {
        case "DELETE":
          app.delete(route.path, fn);
          break;
        case "GET":
          app.get(route.path, fn);
          break;
        case "PATCH":
          app.patch(route.path, fn);
          break;
        case "POST":
          app.post(route.path, fn);
          break;
        case "PUT":
          app.put(route.path, fn);
          break;
      }
    }
  });
};

export const response = (
  array: any[],
  req: FastifyRequest,
  res: FastifyReply
) => {
  const { limit, skip } = req.query as QL;
  let n = array;
  if (skip) {
    n = n.slice(skip);
  }

  if (limit) {
    n = n.slice(0, limit);
  }

  res.send(n);
};
