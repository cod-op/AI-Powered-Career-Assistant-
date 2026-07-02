import axios from "axios";
import { oauth2client } from "../config/googleconfig.js";
import TryCatch from "../middlewares/trycatch.js";
import User from "../models/User.js";
import { AuthenticatedRequest } from "../middlewares/isAuth.js";
import jwt from 'jsonwebtoken'
import bcrypt from "bcryptjs";


export const registerUser = TryCatch(async (req, res) => {
    const { name, email, password } = req.body;

    let user = await User.findOne({ email });

    if (user) {
        return res.status(400).json({
            message: "User already exists"
        });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    user = await User.create({
        name,
        email,
        password: hashedPassword
    });

    const token = jwt.sign(
        { _id: user._id },
        process.env.JWT_SECRET as string,
        { expiresIn: "15d" }
    );

    res.json({
        message: "Registered Successfully",
        token,
        user
    });
});

export const loginWithPassword = TryCatch(async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({
            message: "Email and password required"
        });
    }

    const user = await User.findOne({ email });
 if (!user) {
        return res.status(404).json({
            message: "User not found"
        });
    }

    if (!user.password) {
        return res.status(400).json({
            message: "Please login with Google"
        });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
        return res.status(400).json({
            message: "Invalid password"
        });
    }

 const token = jwt.sign(
        { _id: user._id },
        process.env.JWT_SECRET as string,
        { expiresIn: "15d" }
    );

    res.status(200).json({
        message: "Login Successful",
        token,
        user
    });
});

export const loginUser=TryCatch(async(req,res)=>{
    const {code}=req.body;
    if(!code){
       return res.status(400).json({
        message:"Authorization code is required",
       }) 
    }

    const googleRes=await oauth2client.getToken(code)
    oauth2client.setCredentials(googleRes.tokens)

    const userRes=await axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${googleRes.tokens.access_token}`)
    const { name, email, picture } = userRes.data;
    let user=await User.findOne({email});
    if(!user){
        user=await User.create({
           name,
           email,
           image :picture,
        })
    }
    const token=jwt.sign({_id:user._id},process.env.JWT_SECRET as string,{
        expiresIn:"15d",
    })

    res.status(200).json({
        message:"User Logged in Successfully",
        token,
        user,
    })
})


export const myProfile = TryCatch(async (req: AuthenticatedRequest, res) => {
  const user = req.user;

  res.json(user);
});
