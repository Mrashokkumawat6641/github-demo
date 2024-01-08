import mongoose from "mongoose"

const medicalRedcordSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    
}, {timestamps: true})

export const MedicalRecord = mongoose.model(
    "medicalRecord", medicalRedcordSchema
);