import axios from "axios"

const instance = axios.create({
    baseURL: "http://MyTodoALB-1370739494.us-east-1.elb.amazonaws.com:8000/api"
})

export default instance