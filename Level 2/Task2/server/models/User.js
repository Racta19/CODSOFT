import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            required: true,
        },
        lastName: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        highSchool: {
            type: String,
            required: true
        },
        ResentQualification: {
            type: String,
            required: true,
        },
        UserType: {
            type: String,
            required: true
        },
        certificationOrDiploma: String,
        bio: String,
        skills: [String]
    },
    { timestamps: true ,toJSON: {getters: true}}
);

const User = mongoose.model("User", userSchema);
export default User;