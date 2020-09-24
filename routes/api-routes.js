
const db = require("../models");
var express = require('express')
var app = express()
var router = express.Router()

    app.get("/api/workouts", (req, res) => {
        db.Workout.find({})  
            .then(Workout => {
            res.json(Workout);
          })
          .catch(err => {
            res.json(err);
          });
    });
    app.get("/api/workouts/range", (req, res) => {
        db.Workout.find({})
        .then(Workout => {
            res.json(Workout);
          })
          .catch(err => {
            res.json(err);
          });
    });

    app.post("/api/workouts", (req, res) => {
        db.Workout.create(req.body) 
        .then(dbWorkout => {
            res.json(dbWorkout);
          })
          .catch(err => {
            res.json(err);
          });
    });


    app.put("/api/workouts/:id", (req, res) => {
        db.Workout.findByIdAndUpdate(req.params.id,
            { $push:{exercise: req.body} } )
            .then(dbWorkout => {
                res.json(dbWorkout);
              })
              .catch(err => {
                res.json(err);
              });

    })
module.exports = app;