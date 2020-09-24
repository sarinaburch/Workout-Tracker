var path = require("path");

module.exports = app => {
    app.get("/", (req, res) => {
        res.sendFile(path.join(__dirname, "../Views/index.html"))
    })
    app.get("/exercise", (req, res) => {
        res.sendFile(path.join(__dirname, "../Views/exercise.html"))
    });
    app.get("/stats", (req,res) => {
        res.sendFile(path.join(__dirname, "../Views/stats.html"))
    });
}
