
const { Exercise } = require("../models");
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

    // app.post("/api/workouts", (req, res) => {
    //     db.Workout.find().then(data => {
    //         res.json(data)
    //     })
    //     .catch(err => {
    //         res.json(err)
    //     })
    // }) ***Returning not a function error, trying to use router

    // router.post("/api/workouts", ({ body }, res) => {
    //     db.Workout.create(body)
    //     .then(({_id}) => db.Exercise.findByIdAndUpdate({}, {$push: { workout: _id} }, {new: true}))
    //     .then(Exercise => {
    //         res.json(Exercise)
    //     });
    // });

    // app.put("/api/workouts/:id", ({body,params}, res) => {
    //     Workout.findByIdAndUpdate(
    //         params.id,
    //         {$push:{exercise:body} }, (err, data) => {
    //             if (err) {
    //                 console.log(err)
    //             } else {
    //                 res.json(data)
    //             }
    //         }
    //     )

    // })
}