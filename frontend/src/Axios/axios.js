import axios from "axios"
const instance = axios.create({
    baseURL:"http://54.242.129.214:8000/api"
})
export default instance