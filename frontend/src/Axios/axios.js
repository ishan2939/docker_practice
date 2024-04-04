import axios from "axios"
const instance = axios.create({
    baseURL:"http://52.204.201.42:8000/api"
})
export default instance