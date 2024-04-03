import axios from "axios"
const instance = axios.create({
    baseURL:"http://54.172.4.152:8000/api"
})
export default instance