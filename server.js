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

app.use(express.static("develop/public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true });

db.Workout.create({ name: "Workout Tracker" })
    .then(dbWorkout => {
        console.log(dbWorkout);
    })
    .catch(({ message }) => {
        console.log('this is the error:' + message);
    });

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "./Views/index.html"));
})

app.use(require("./Controllers/exercises"));
app.use(require("./Controllers/workouts"));

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});