import axios from "axios"
const instance = axios.create({
    baseURL:"http://54.157.10.139:8000/api"
})
export default instance