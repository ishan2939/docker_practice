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
    baseURL: "http://efe8bc5ad28a4c158322381cd858d946.frontend.my_todo_namespace:8000/api"
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