import express, { json } from "express";
import { connect } from "mongoose";
import dotenv from "dotenv"

dotenv.config();

const app = express();
import connetcDatabase from "./src/database/db.js";

import userRoute from "./src/routes/user.route.js";

connetcDatabase()
app.use(json())

app.use("/user", userRoute);

const port = 3000
app.listen(port, () => console.log(`servidor rodando na porta ${port}`));