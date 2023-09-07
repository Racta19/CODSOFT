import mongoose from "mongoose";

const JobScheme = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },
        company: {
            type: String,
            required: true
        },
        location: String,
        description: {
            type: String,
            required: true
        },
        salary: {
            type: String,
            required: true
        },
        type: String,
        skills: [String],
        postedBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
        },
        createdAt: {
            type: Date,
            default: Date.now
        }
    },
    { timestamps: true ,toJSON: {getters: true}}
)

const Job = mongoose.model("Job", JobScheme);
export default Job;