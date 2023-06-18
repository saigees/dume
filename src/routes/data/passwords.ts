import { Route } from "../../lib/class";
import { QL } from "../../lib/types";
import passwords from "../../data/passwords.json"
import { response } from "../../utils";

export default new Route({
    path: "/passwords",
    method: "GET",
    main: (req,res) => {
        return response(passwords, req,res)
    }
})