import axios from "axios"
import getParameter from "../utils/getParameter"

let url;
(async ()=>{
     url = await getParameter('BACKEND_URL_ISHAN');
})();

const instance = axios.create({
    baseURL: url
})
export default instance