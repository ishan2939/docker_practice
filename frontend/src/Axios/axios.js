import axios from "axios"


// let url;
// (async ()=>{
//     try{
//         url = await getParameter('BACKEND_URL_ISHAN');
//     }
//     catch (err){
//         console.log("Error occured: ", err);
//     }
// })();

const instance = axios.create({
    baseURL: "http://MyTodoALB-1370739494.us-east-1.elb.amazonaws.com:8000/api"
})

// const instance = (async () => {
//     try {
//         const mongoURI = await getParameter('BACKEND_URL_ISHAN');

//         const axiosInstance = axios.create({
//             baseURL: mongoURI,
//         });

//         return axiosInstance;
//     } catch (error) {
//         console.error('Error fetching parameter:', error);
//     }
// })();


export default instance