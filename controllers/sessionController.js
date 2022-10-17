import Users from "../models/users";
import {compareSync} from "bcryptjs";
import jwt from "jsonwebtoken";
import authJwt from "../config/authEnv";

class sessionController{
    async login(req,res){
        const {email, password}= req.body

        const user = await Users.findOne({email})

        if(!user){
            return res.status(401).json({message: "User or password invalid."})
        }

        const checkPass = compareSync(password, user.password)

        if(!checkPass){
            return res.status(401).json({message: "User or password invalid."}) 
        }

        const {id} = user

        return res.json({
            user:{
                id,
                email
            },
            token: jwt.sign({id}, authJwt.secret, {expiresIn: '7d'})
        })

    }
}

export default new sessionController();