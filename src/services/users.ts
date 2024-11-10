import User, { IUser } from "../models/user";
import { LoginDto, RegisterDto } from "../types/dto/user"
import { compare, hash } from "bcrypt"

export const userLogin = async (user: LoginDto) => {
    try {
        const userFromDatabase = await User.findOne({username: user.username})
        if(!userFromDatabase) throw new Error("User not found")
        const match = await compare(user.password, userFromDatabase.password)
        if(!match) throw new Error("Wrong password")
        return userFromDatabase
    } catch (err) {
        throw(err)
    }
}

export const createNewUser = async (user: RegisterDto) => {
    try {
        const encPass = await hash(user.password, 10)
        user.password = encPass
        const newUser = new User(user)
        return await newUser.save()
    } catch (err) {
        console.log(err)
        throw new Error("Can't create new user")
    }
}