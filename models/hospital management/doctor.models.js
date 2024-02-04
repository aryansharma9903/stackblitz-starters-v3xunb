import mongoose from 'mongoose';

const doctorSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    salary:{
        type: Number,
        required:true,
    },
    qualifications: {
        type: String,
        required:true,
    },
    experience: {
        type: Number,
        required: true,
        default: 0,
    },
    worksinHospitals: [
        {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Hospital",
        }
    ]
}, { timestamps: true });

export const Doctor = mongoose.model('Doctor', doctorSchema);
