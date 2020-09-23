const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 8000;

// const db = require("./models");

const app = express();

app.use(morgan("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("develop/public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/", { useNewUrlParser: true });