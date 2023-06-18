import "dotenv/config"
import fastify from "fastify"
import { router } from "./utils"

const app = fastify()


router(app).then(() => {
    app.listen({ port: parseInt(process.env.PORT), host: "0.0.0.0" })
})