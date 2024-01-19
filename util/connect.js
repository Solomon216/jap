import mongoose from "mongoose"

const Connect = async () => await  mongoose.connect(process.env.MONGO_URI)

export default Connect