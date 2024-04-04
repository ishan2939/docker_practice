import axios from "axios"
const instance = axios.create({
    baseURL:"http://54.167.82.225:8000/api"
})
export default instance