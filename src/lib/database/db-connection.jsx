import mongoose from "mongoose";

const connectionString = process.env.MONGODB_URI;

if (!connectionString) {
  throw new Error(
    "❌ Missing Mongodb Credentials. Did you set MONGODB_URI in Vercel?"
  );
}

export const connectDB = async () => {
  try {
    if (mongoose.connection.readyState === 0) {
      await mongoose.connect(connectionString, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log("✅ MongoDB Connected");
    }
  } catch (error) {
    console.error("❌ MongoDB Connection Error:", error);
    throw error;
  }
};
