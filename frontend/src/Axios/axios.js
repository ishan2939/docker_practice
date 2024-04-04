import axios from "axios"
import getParameter from "../utils/getParameter"
const instance = axios.create({
    baseURL: await getParameter('BACKEND_URL_ISHAN')
})
export default instance