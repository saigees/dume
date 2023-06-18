import "dotenv/config"
import fastify from "fastify"
import { router } from "./utils"

const app = fastify({
    logger: true
})


router(app).then(() => {
    app.listen({ port: parseInt(process.env.PORT), host: "192.168.0.9" })
})