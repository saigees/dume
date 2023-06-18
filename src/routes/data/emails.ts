import { Route } from "../../lib/class";
import { QL } from "../../lib/types";
import emails from "../../data/emails.json"
import { response } from "../../utils";

export default new Route({
    path: "/emails",
    method: "GET",
    main: (req,res) => {
        return response(emails, req,res)
    }
})