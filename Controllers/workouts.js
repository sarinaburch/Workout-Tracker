var express = require("express");
var mongoose = require("mongoose");


var router = express.Router();

router.get("/exercise", (req, res) => {
    db.Workout.find({}, (err, data) => {
        if (err) {
            res.send(err)
        } else {
            res.json(data);
        }
    });
});

router.post("/dashboard", (req, res) => {
     Exercise = mongoose.model("Exercise", ExerciseSchema);

    
})

module.exports = router;