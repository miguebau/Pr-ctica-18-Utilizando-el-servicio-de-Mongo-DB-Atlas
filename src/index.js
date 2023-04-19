const express = require('express');
const { default: mongoose } = require('mongoose');
require("dotenv").config();

const app = express();
const port = process.env.PORT || 9000;

app.get("/", (req, res) => {
    res.send("welcome to my API");
});
// mongobd connection

mongoose


    .connect(process.env.MONGOOB_URI)
    .then(() => console.log("connected to MongoDB Atlas"))
    .catch((error) => console.error(error));

app.listen(port, () => console.log('server listening on port', port));