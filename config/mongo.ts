import mongoose from "mongoose";

let hasConnection = false;
const connectMongo = async () => {
  if (!process.env.MONGODB_CONNECTION_STRING) {
    throw new Error(
      "Please define the MONGODB_CONNECTION_STRING environment variable (if local add to .env file)"
    );
  }

  if (hasConnection) {
    return;
  }
  try {
    await mongoose.connect(process.env.MONGODB_CONNECTION_STRING);
    hasConnection = true;
    console.info("MongoDB connected");
  } catch (e) {
    hasConnection = false;
    console.error(e, "DB connection failed");
  }
};

export default connectMongo;
