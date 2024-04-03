import axios from "axios"
const instance = axios.create({
    baseURL:"http://44.202.57.48:8000/api"
})
export default instance