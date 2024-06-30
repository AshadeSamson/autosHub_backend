import jwt from "jsonwebtoken"
import { JWT } from "../config/config.js"

export const verifyToken = (req, res, next) => {

    const token = req.cookies.auth

    if(token){
        jwt.verify(token, JWT, (err, decodedToken) => {
            if(err){
                res.status(403).json("invalid authorization token!")
            }
            req.user = decodedToken
            next()
        })
    }else{
        res.status(403).json("you are not authenticated!")
    }
}




export const verifyTokenAndAuthorization = (req, res, next) => {

    verifyToken(req, res, () =>{
        if(req.user.id === req.params.id || req.user.isAdmin){
            next();
        }else{
            res.status(403).json("you are not authorized for that action!")
        }
    })

}



export const verifyTokenAndAdmin = (req, res, next) => {

    verifyToken(req, res, () => {
        if(req.user.isAdmin){
            next()
        }else{
            res.status(403).json("forbidden to take that action")
        }
    })
}