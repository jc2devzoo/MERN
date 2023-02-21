import { createService, findAllService } from "../services/news.service.js";



const create = async (req, res) =>{
    try {

        const {title, text, banner} = req.body

        if(!title || !banner || !text) {
            res.status(400).send({message: "Submit all fileds for registration"})
        }

        await createService({
            title,
            text,
            banner,
            id:"objectidfake",
        })

        res.send(201);
    } catch(err) {
        res.status(500).send({message: err.message});
    }

};

const findAll = (req, res) =>{
    const news = [];
    res.send(news);
}

export  {
    create, findAll 
}