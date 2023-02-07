const express = require("express");
const { connect } = require("mongoose");
const app = express();
const connetcDatabase = require("./src/database/db");

const userRoute = require("./src/routes/user.route");

connetcDatabase()
app.use(express.json())

app.use("/user", userRoute);

const port = 3000
app.listen(port, () => console.log(`servidor rodando na porta ${port}`));