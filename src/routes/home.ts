import { Route } from "../lib/class";

export default new Route({
    path: "/",
    method: "GET",
    main: (req,res) => {
        res.send({
            cookies: "with",
            milk: true
        })
    }
})