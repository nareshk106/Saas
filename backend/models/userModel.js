import mongoose from "mongoose";

const { Schema } = mongoose;
const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true, // optional, removes whitespace
    },
    email: {
        type: String,
        required: true,
        unique: true, // prevents duplicates
        lowercase: true,
    },
    password: {
        type: String,
        required: true,
    },
}, { timestamps: true });

const userModel = mongoose.model("user", userSchema)

// // inside userModel.js
// userSchema.methods.comparePassword = async function (password) {
//   return await bcrypt.compare(password, this.password);
// };
export default userModel