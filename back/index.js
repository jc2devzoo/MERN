import express, { json } from "express";
import dotenv from "dotenv";
import connetcDatabase from "./src/database/db.js";
import userRoute from "./src/routes/user.route.js";
import authRoute from "./src/routes/auth.route.js";
import newsRoute from "./src/routes/news.route.js"



dotenv.config();




const app = express();
connetcDatabase()
app.use(json())
app.use("/user", userRoute);
app.use("/auth", authRoute);
app.use("/news", newsRoute);

const port = 3000
app.listen(port, () => console.log(`servidor rodando na porta ${port}`));