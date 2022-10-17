import jwt from "jsonwebtoken";
import {promisify} from "util";

import authJwt from "../config/authEnv"
export default async (req, res, next) => {
    const authHeader = req.headers.authorization;

    if(!authHeader){
        return res.status(401).json({error: "Token doesn't exists"})
    }

    const [, token] = authHeader.split(' ');


    try {
        const decoded = await promisify(jwt.verify)(token, authJwt.secret)

        req.userId = decoded.id

        return next()
    } catch (error) {
        return res.status(501).json({message: "Token invalid."})
    }
}