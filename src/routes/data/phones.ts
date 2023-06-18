import { Route } from "../../lib/class";
import { QL } from "../../lib/types";
import phoneNumbers from "../../data/phones.json"
import { response } from "../../utils";

export default new Route({
    path: "/phone-numbers",
    method: "GET",
    main: (req,res) => {
        return response(phoneNumbers, req,res)
    }
})