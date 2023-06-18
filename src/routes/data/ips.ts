import { Route } from "../../lib/class";
import { QL } from "../../lib/types";
import ips from "../../data/ips.json"
import { response } from "../../utils";

export default new Route({
    path: "/ips",
    method: "GET",
    main: (req,res) => {
        return response(ips, req,res)
    }
})