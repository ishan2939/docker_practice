import axios from "axios"

const instance = axios.create({
    baseURL: process.env.REACT_APP_BACKEND_ISHAN
})

export default instance