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
    baseURL: "http://54.237.223.158:8000/api"
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