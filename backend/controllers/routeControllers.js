import express from "express"
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs"
import userModel from "../models/userModel.js"
// arrow function for contrller means for req and res
// creating register logicc over here
export const Register = async(req,res)=>{
try{
    const {name,email,password,confirmPassword}= req.body

    // checking if user is already register
    const userExist= await userModel.findOne({email})
if (userExist) {
  return res.status(400).json({ message: "User already registered" });
}

// comparing both passwords 

if(password!==confirmPassword){
    return res.status(400).json({message:"password didnt match"})
}
    //hashing password 
    const hashPassword = await bcrypt.hash(password, 10)
    
// Create a new instance of the Model
    const user = new userModel({
        name,
        email,
        password:hashPassword,

    })

await user.save();

res.send(user)
}catch(error){
    console.log("server error ", error.message)
}
}

// creating Login logicc over here
export const Login = async(req,res)=>{
try{
    // collecting login creditionals from user
    const {email,password}=req.body

    // do user existed 
    const user = await userModel.findOne({email})
    if(!user){
        return res.status(400).json({message:"You are not logined pls registeres first to acess"})
    }

    // comapring user hash password from db 
    // const isMatch = await user.comparePassword(password);

   const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // 3️⃣ Create JWT token (✅ step we're focusing on)
    const token = jwt.sign(
      { id: user._id, email: user.email },  // payload
      process.env.JWT_SECRET,               // secret key
      { expiresIn: "1h" }                   // token expires in 1 hour
    );

      // 4️⃣ Send token + user info to frontend
      res.status(200).json({
      message: "Login successful",
      token,
      user: { id: user._id, name: user.name, email: user.email },
    });

    // // 3️⃣ Send success response
    // res.status(200).json({ message: "Login successful", user });


}catch(error){
    console.error("Login error:", error.message);
    res.status(500).json({ message: "Internal Server Error" });
}
}

// verifying tokens 

export const verifyToken = async (req, res) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
      return res.status(401).json({ valid: false, message: "No token provided" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    res.status(200).json({ valid: true, user: decoded });
  } catch (err) {
    res.status(401).json({ valid: false, message: "Invalid or expired token" });
  }
};

