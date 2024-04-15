import mongoose from "mongoose";

const connectToMongoDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_DB_URI,)
        console.log("connecté à mongoDB");
    } catch (error) {
        console.log("erreur de connection a mongoDB", error);
    }
}

export default connectToMongoDB;