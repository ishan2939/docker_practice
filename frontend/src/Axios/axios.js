import axios from "axios"
const instance = axios.create({
    baseURL:"http://184.72.203.164:8000/api"
})
export default instance