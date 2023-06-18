import { FastifyReply, FastifyRequest } from "fastify";

export type fn = (req: FastifyRequest, res: FastifyReply) => void;
export type Methods = "GET" | "POST" | "DELETE" | "PUT" | "PATCH"
export type RouteOptions = {
    path: string;
    method: Methods
    middleware?: fn[]
    main: (req: FastifyRequest, res: FastifyReply) => void
}

export class Route {
    constructor(options: RouteOptions) {
        Object.assign(this, options)
    }
}