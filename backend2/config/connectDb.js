import mongoose from 'mongoose'

const connectdb = async (DATABASE_URL)=>{
    try{ 
        const DB_OPTION = {
            DBNAME :"RS"
        }
        await mongoose.connect(DATABASE_URL,DB_OPTION)
        console.log("Connection successful")
    }catch(error){
        console.warn("Connection failed")
    }
}

export default connectdb