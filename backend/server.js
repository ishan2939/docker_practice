import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import dotenv from "dotenv"

import userRouter from "./routes/userRoute.js"
import taskRouter from "./routes/taskRoute.js"
import forgotPasswordRouter from "./routes/forgotPassword.js"
import getParameter from "./utils/getParameter.js"

//app config
dotenv.config({path: './.env'})
const app = express()
const port = await getParameter('PORT') || 8001
mongoose.set('strictQuery', true);

//middlewares
app.use(express.json())
app.use(cors())

//db config
mongoose.connect(await getParameter('MONGO_URI'), {
    useNewUrlParser: true,
}, (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log("DB Connected")
    }
})

//api endpoints
app.use("/api/user", userRouter)
app.use("/api/task", taskRouter)
app.use("/api/forgotPassword", forgotPasswordRouter)

//listen
app.listen(port, () => console.log(`Listening on localhost:${port}`))