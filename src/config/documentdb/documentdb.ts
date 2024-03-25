
import mongoose from "mongoose";

const connectionString = `mongodb://Koustav:Koustav000@docdb-2024-03-25-13-42-22.cyxwkxsdv89w.ap-south-1.docdb.amazonaws.com:27017/?irectConnection=true&retryWrites=false&maxIdleTimeMS=120000`;

if (!connectionString) {
  throw new Error("Please define the MONGODB_URI environment variable");
}

const connectDB = async () => {
  if (mongoose.connection?.readyState >= 1) {
    console.log("---- Already connected to MongoDB ----");
    return;
  }

  try {
    await mongoose.connect(connectionString);
    console.log("---- Connected to MongoDB ----");
  } catch (err) {
    console.error("Could not connect to MongoDB:", err);
  }
};

export default connectDB;
