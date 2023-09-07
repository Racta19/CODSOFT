import mongoose from "mongoose";
import Job from "./Job";
import User from "./User";

const applicationSchema = new mongoose.Schema(
    {
        job: {
            type: mongoose.Schema.Types.ObjectId,
            ref: Job
        },
        applicant: {
            type: mongoose.Schema.Types.ObjectId,
            ref: User
        },
        status: {
            type: String,
            enum: ['Pending', 'Accepted', 'Rejected'],
            default: 'Pending'
        },
        resume: String,
        coverLetter: String,
    },
    { timestamps: true, toJSON: {getters: true}}
);

const Application = mongoose.model('Application', applicationSchema);
export default Application