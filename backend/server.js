import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import dotenv from "dotenv"

import userRouter from "./routes/userRoute.js"
import taskRouter from "./routes/taskRoute.js"
import forgotPasswordRouter from "./routes/forgotPassword.js"
import getParameter from "./utils/getParameter.js"

//app config
dotenv.config({ path: './.env' })
const app = express()

mongoose.set('strictQuery', true);

//middlewares
app.use(express.json())
app.use(cors())

let MONGO_URI, port;

await (async () => {
    try {
        MONGO_URI = await getParameter('MONGO_URI');
        port = await getParameter('PORT') || 8001;
        mongoose.connect(MONGO_URI, {
            useNewUrlParser: true,
        }, (err) => {
            if (err) {
                console.log(err)
            } else {
                console.log("DB Connected")
            }
        })
    } catch (err) {
        console.log("An error occured: " + err.message);
    }
})();


//api endpoints
app.use("/api/user", userRouter)
app.use("/api/task", taskRouter)
app.use("/api/forgotPassword", forgotPasswordRouter)

//listen
app.listen(port, () => console.log(`Listening on localhost:${port}`))