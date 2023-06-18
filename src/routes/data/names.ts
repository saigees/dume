import { Route } from "../../lib/class";
import { QL } from "../../lib/types";
import names from "../../data/names.json"
import { response } from "../../utils";

export default new Route({
    path: "/names",
    method: "GET",
    main: (req,res) => {
        return response(names, req,res)
    }
})