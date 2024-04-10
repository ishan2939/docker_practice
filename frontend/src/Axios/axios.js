import axios from "axios";
import getParameter from "../utils/getParameter";
let url;
export default (async () => {
    try {
        url = await getParameter("BACKEND_URL_ISHAN");
        const instance = axios.create({
            baseURL: url,
        });
        return instance;
    } catch (err) {
        console.log("Error occured: ", err);
    }
})();