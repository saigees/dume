import "dotenv/config"
import fastify from "fastify"
import { router } from "./utils"
import cors from '@fastify/cors'

const app = fastify()
app.register(cors, {
    origin: ["*"]
})


router(app).then(() => {
    app.listen({ port: parseInt(process.env.PORT), host: "0.0.0.0" })
})