import mongoose from "mongoose";
import userService from "../services/user.service.js";

const validid = (req, res , next) =>{
    const id = req.params.id

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).send({ message: " invalid Id" });
    }
    next();
};

const validUser = async (req, res, next) =>{

    const id = req.params.id

    const user = await userService.findByIdService(id);

    if (!user) {
        return res.status(400).send({ message: "User not Found" });
    }
    next();
};

export default { validUser, validid };