import jwt from "jsonwebtoken"
import { JWT } from "../config/config.js"

export const verifyToken = (req, res, next) => {

    const token = req.cookies.auth
    // const token = req.headers.auth

    if(token){
        jwt.verify(token, JWT, (err, decodedToken) => {
            if(err){
                res.status(403).json("invalid authorization token!")
                console.log(err.message)
            }else{
                console.log(decodedToken)
                next()
            }

        })
    }else{
        res.status(403).json("you are not authenticated!")
    }
}