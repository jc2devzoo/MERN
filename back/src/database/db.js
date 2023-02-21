import mongoose from "mongoose";


function connetcDatabase() {
  console.log("wait connecting to the database");

  mongoose.set("strictQuery", true);
  mongoose.connect(
   process.env.MONGODB_URI,
  { useUnifiedTopology: true }
  )
    .then(() => console.log("mongoDB atlas connected"))
    .catch((error) => console.log(error));
}
export default connetcDatabase;