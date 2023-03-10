import { createService, findAllService, topNewsService } from "../services/news.service.js";



const create = async (req, res) => { 
    try {
        const {title, text, banner} = req.body

        if(!title || !banner || !text) {
            res.status(400).send({message: "Submit all fileds for registration"})
        }

        await createService({
            title,
            text,
            banner,
            user: req.userId,
        })

        res.sendStatus(201);
    } catch(err) {
        res.status(500).send({message: err.message});
    }

};

const findAll = async (req, res) => {
    try {
        let { limit, offset} = req.query;

        limit = Number(limit);
        offset = Number(offset);

        if (!limit){
            limit = 5;
        }
    
        if (!offset) {
            offset = 0;
        }

         
        const news = await findAllService(offset, limit);
        const total = await countNews();
        const currentUrl = req.baseUrl;

        const next = offset + limit;
        const nextUrl = next < total? `${currentUrl}?limit=${limit}&offset=${next}` : null;

        const previous = offset - limit < 0 ? null : offset - limit;
        const previousUrl = previous != null ? `${currentUrl}?limit=${limit}&offset=${previous}`: null;

        if (news.length === 0){
                return res.status(400).send({
                 message: "There are no registered news"
                })
         }
        res.send({
            nextUrl,
            previousUrl,
            limit,
            offset,
            total,

            result: news.map((item) => ({
                id: item._id,
                title: item.title,
                text: item.text,
                banner: item.banner,
                likes: item.likes,
                comments: item.comments,
                userName: item.user.name,
                userAvatar: item.user.avatar,
            }))
        });

    }catch (err){
        res.status(500).send({message: err.message})
    }
};


const topNews = async (req, res) =>{
    try {
        const news = await topNewsService();

        if (!news) {
            return res.status(400).send({})

        }
    } catch (err) {
            res.status(500).send({news:{
            id: news._id,
            title: news.title,
            text: news.text,
            banner: news.banner,
            likes: news.likes,
            comments: news.comments,
            userName: news.user.name,
            userAvatar: news.user.avatar,
            }
            })
    }
};

export  {
    create, findAll, topNews
}