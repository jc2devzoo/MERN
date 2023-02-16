import mongoose from "mongoose";



const connetcDatabase = () =>{
    console.log("wait connecting to the database");

    mongoose.set("strictQuery", true);
    mongoose.connect(
        "mongodb+srv://juliorocha:Laranja123@cluster0.qztckn7.mongodb.net/?retryWrites=true&w=majority",
        { useUnifiedTopology: true}
        )
        .then(() => console.log("mongoDB atlas connected"))
        .catch((error) => console.log(error))
};
export default connetcDatabase;