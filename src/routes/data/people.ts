import { Route } from "../../lib/class";
import { QL } from "../../lib/types";
import people from "../../data/people.json"
import { response } from "../../utils";

export default new Route({
    path: "/people",
    method: "GET",
    main: (req,res) => {
        return response(people, req,res)
    }
})