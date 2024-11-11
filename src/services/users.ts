import User, { IUser } from "../models/user"
import { LoginDto, ProfileDto, RegisterDto } from "../types/dto/user"
import { compare, hash } from "bcrypt"
import jwt from "jsonwebtoken"

export const userLogin = async (user: LoginDto) => {
  try {
    const userFromDatabase = await User.findOne({ username: user.username }).lean()
    if (!userFromDatabase) throw new Error("User not found")
    const match = await compare(user.password, userFromDatabase.password)
    if (!match) throw new Error("Wrong password")

    // gen token
    const token = jwt.sign(
      {
        user_id: userFromDatabase._id,
        isAdmin: userFromDatabase.isAdmin,
        username: userFromDatabase.username,
      },
      process.env.JWT_SECRET!,
      {
        expiresIn: "15m",
      }
    )

    return { ...userFromDatabase, token, password: "*******" }
  } catch (err) {
    throw err
  }
}

export const createNewUser = async (user: RegisterDto) => {
  try {
    const encPass = await hash(user.password, 10)
    user.password = encPass
    const newUser = new User(user)
    await newUser.save()
    const userObject = newUser.toObject();
    userObject.password = "*******";

    return userObject;
  } catch (err) {
    console.log(err)
    throw new Error("Can't create new user")
  }
}

export const getUserData = async (user: ProfileDto) => {
    try {
      if (!user.id) throw new Error("Missing user data, [id] is required");
      const currUser = await User.findById(user.id).lean();
      return { hasVoted: currUser?.hasVoted, votedFor: currUser?.votedFor };
    } catch (err) {
      console.log(err);
      throw new Error("Can't create new user");
    }
  }