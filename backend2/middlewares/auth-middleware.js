import jwt from 'jsonwebtoken'
import UserModel from '../models/User.js'

var checkUserAuth = async(req,res,next)=>{
    let token
    const {authorization} = req.headers
    if(authorization && authorization.startsWith('Bearer')){
        try{
            //get token form header
            token = authorization.split(' ')[1]
            console.warn("Token",token)
            console.warn("Authorization",authorization)

            //verify Token
            const {userID} = jwt.verify(token,process.env.JWT_SECRET_KEY)
            console.log(userID)
            
            //GET USER from token
            req.user = await UserModel.findById(userID).select('-password')
            console.log(req.user)   

            next()
        }catch(error){
            console.warn(error)
            res.status(401).send({"status":"failed","message":"Unauthorized User"})
        }
    }
    if(!token){
        res.status(401).send({"status":"failed","message":"Unauthorized user,no token"})
    }
}

export default checkUserAuth