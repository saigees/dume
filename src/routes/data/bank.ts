import { Route } from "../../lib/class";
import { QL } from "../../lib/types";
import cards from "../../data/bank.json"
import { response } from "../../utils";

export default new Route({
    path: "/bank-cards",
    method: "GET",
    main: (req,res) => {
        return response(cards, req,res)
    }
})