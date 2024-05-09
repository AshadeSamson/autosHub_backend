import jwt from "jsonwebtoken"
import { JWT } from "../config/config.js"

export const verifyToken = (req, res, next) => {

    const token = req.cookies.auth

    if(token){
        jwt.verify(token, JWT, (err, decodedToken) => {
            if(err){
                res.status(403).json("invalid authorization token!")
            }else{
                next()
            }

        })
    }else{
        res.status(403).json("you are not authenticated!")
    }
}


export const verifyTokenAndAuthorization = (req, res, next) => {

    verifyToken(req, res, () =>{
        if(req.decodedToken.id === req.params.id){
            next();
        }else{
            res.status(403).json("you are not authorized for that action!")
        }
    })

}