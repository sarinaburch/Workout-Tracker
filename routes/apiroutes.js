
var db = require("../models");
var router = require("express").Router()

module.exports = app => {
    app.get("/api/workouts", (req, res) => {
        db.Workout.find({}, (err, data) => {
            if (err) {
                console.log(err)
            } else {
                res.json(data)
            }
        })
    });
    app.get("/api/workouts/range", (req, res) => {
        db.Workout.find({})
        .then(dbWorkout => {
            res.json(dbWorkout);
          })
          .catch(err => {
            res.json(err);
          });
    });

    app.post("/api/workouts", (req, res) => {
        db.Workout.find() 
        .then(dbWorkout => {
            res.json(dbWorkout);
          })
          .catch(err => {
            res.json(err);
          });
    });


    // app.put("/api/workouts/:id", (req, res) => {
    //     db.Workout.findByIdAndUpdate(req.params.id,
    //         {$push:{exercise: req.body} }, (err, data) => {
    //             if (err) {
    //                 console.log(err)
    //             } else {
    //                 res.json(data)
    //             }
    //         }
    //     )

    // })
}