import mongoose from "mongoose";

const databaseConnect = async () => {
  mongoose.connect(
    `mongodb+srv://${process.env.DATABASE_USER}:${process.env.DATABASE_PASSWORD}@cluster0.6ljub.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
  );

  mongoose.connection.on("error", (error) => {
    console.error("Database Connection Error", error);
  });

  mongoose.connection.once("open", () => {
    console.log("Database Connection Success");
  });

  return mongoose.connection;
};

export default databaseConnect;
