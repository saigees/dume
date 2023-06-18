import { Route } from "../../lib/class";
import { QL } from "../../lib/types";
import addresses from "../../data/address.json"
import { response } from "../../utils";

export default new Route({
    path: "/addresses",
    method: "GET",
    main: (req,res) => {
        return response(addresses, req,res)
    }
})