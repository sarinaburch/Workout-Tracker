const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now()
      },
      exercises: [
        {
          type: {
            type: String,
            required: "Exercise is required",
            trim: true
          },
          name: {
            type: String,
            required: "Name is required",
            trim: true
          },
          duration: {
            type: Number
          },
          distance: {
            type: Number
          },
          weight: {
            type: Number
          },
          reps: {
            type: Number
          },
          sets: {
            type: Number
          }
        }
      ],
    },
    {
      toJSON: {
        virtuals: true
      }
});

WorkoutSchema.virtual("totalDuration").get(function () {
  return this.exercises.reduce((total, exercises) => {
      return total + exercises.duration
  }, 0);
})

const Workout = mongoose.model("workout-tracker", WorkoutSchema);

module.exports = Workout;