// const { Workout } = require("../models/Workout");
var db = require("../models");

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

//  var router = require("express").Router();
//  router.post("/api/workouts", (req, res, next) => {

//  })

    // app.put("/api/workouts:id", ({body,params}, res) => {
    //     Workout.findByIdAndUpdate(
    //         params.id,
    //         {$push:{exercise:body} },
    //         {new: true,runValidators:true}, (err, data) => {
    //             if (err) {
    //                 console.log(err)
    //             } else {
    //                 res.json(data)
    //             }
    //         }
    //     )

    // })
}