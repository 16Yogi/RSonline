import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import cors from 'cors'
import connectdb from './config/connectDb.js'
// import userRoutes from './routes/userRoutes.js'
import userRoutes from './router/userRouter.js'


const app = express()
const port = process.env.PORT 
const DATABASE_URL = process.env.DATABASE_URL

app.use(cors())

connectdb(DATABASE_URL)

app.use(express.json())

app.use("/api/user/",userRoutes)

app.listen(port,()=>{
    console.log(`server listing : ${port}`)
})