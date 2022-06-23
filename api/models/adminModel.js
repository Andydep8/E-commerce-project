import mongoose from "mongoose";

const adminSchema = new mongoose.Schema({
    name: String,
    last_name: String,
    birth: Date,
    ID: Number,
    address: String,
    phone: Number,
})

export default mongoose.model("Admin", adminSchema)