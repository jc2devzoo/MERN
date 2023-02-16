import mongoose from "mongoose";



const connetcDatabase = () =>{
    console.log("wait connecting to the database");

    mongoose.set("strictQuery", true);
    mongoose.connect(
          process.env.MONGODB_URI ,
        { useUnifiedTopology: true}
        )
        .then(() => console.log("mongoDB atlas connected"))
        .catch((error) => console.log(error))
};
export default connetcDatabase;