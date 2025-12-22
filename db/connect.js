import mongoose from "mongoose";

const db_connect = async () => {
    try {
        const response = mongoose.connect(process.env.MONGO_URL)
        return "DATABASE CONNECTED!"
    }catch (e) {
        return e.message
    }
}
export {db_connect}
