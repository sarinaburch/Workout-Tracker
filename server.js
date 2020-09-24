const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const path = require("path")
// const { Db } = require("mongodb");

const PORT = process.env.PORT || 8000;

const db = require("./models");

const app = express();

app.use(morgan("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout-tracker", { useNewUrlParser: true });

app.use(require("./routes/apiroutes"));
app.use(require("./routes/htmlroutes"));

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});