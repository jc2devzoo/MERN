import UserService from "../services/user.service.js";
import mongoose from "mongoose";

const create = async (req, res) => {
    const {name, username, email, password, avatar}= req.body;

    if(!name || !username || !email || !password || !avatar) {
        res.status(400).send("submit all fields for registration");
    }

const user = await UserService.createService(req.body);

if (!user){
     return res.status(400).send({ message: "Error creating User"});
}

    res.status(201).send({
        message: "User created sucessfully",
        user:{
            name,
            username,
            email,
            avatar,
        }
       
    });
};

const findAll = async (req, res) => {
    const users = await UserService.findAllService();

    if (users.length === 0){
        return res.status(400).send({message: "there are no registered users"});
    }

    res.send(users)
};


const findById = async (req, res) =>{
    const id = req.params.id

    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).send({message: "user not found"});
    }

    const user = await UserService.findByIdService(id)

    if(!user){
        return res.status(400).send({message: "User not Found"});
    }

    res.send(user);
};


const update = async (req, res) => {

    const { name, username, email, password, avatar } = req.body;

    
    if (!name && !username && !email && !password && !avatar) {
        return res.status(400).send({ message: "submit at least one field for registration"});
    }

    const id = req.params.id;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).send({message:"Invalid ID"}) ;
    }

    const user = await UserService.findByIdService(id);

    if (!user) {
        return res.status(400).send({ message: "User not Found" });
    }

    await UserService.updateService(
        id, name, username, email, password, avatar
    );
    
    res.send({message:"User successfully update"});
};




export default {create, findAll, findById, update };