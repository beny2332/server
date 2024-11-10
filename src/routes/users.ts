import { Request, Response } from "express"
import { LoginDto, RegisterDto } from "../types/dto/user"
import { createNewUser, userLogin } from "../services/users"

export const login = async (req:Request<LoginDto>, res:Response) => {
    try {
        const loggedUser = await userLogin(req.body)
        res.status(200).json(loggedUser)
    } catch (err) {
        res.status(400).json((err as Error).message)
    }
    
}

export const register = async (req: Request<RegisterDto>, res: Response) => {
    try {

       const freshlyCreatedUser = await createNewUser(req.body)
       res.status(201).json(freshlyCreatedUser)
    } catch (err) {
        res.status(400).json((err as Error).message)
    }
    
}