import mongoose from "mongoose";

const clientSchema = new mongoose.Schema({
    name: String,
    last_name: String,
    birth: Date,
    phone: Number,
    email: String,
    password: String,
    address: String,
    
})

export default mongoose.model("Client", clientSchema)