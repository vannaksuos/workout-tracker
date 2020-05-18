var db = require("../models");
var express = require("express")
var router = express.Router()

router.get('/api/workouts', function (req, res) {
    db.Workout.find({}).then(function(workouts) {
        res.json(workouts)
    })
})

router.post('/api/workouts', function (req, res) {
    db.Workout.create({}).then(function(workouts) {
        res.json(workouts)
    })
})

router.put('/api/workouts/:id', function(req, res) {
    console.log(req.body)
    db.Workout.findByIdAndUpdate(req.params.id,{$push: {exercises: req.body}},{new: true}).then(function(workouts) {
        res.json(workouts)
    } )
})

router.get(`/api/workouts/range`, function(req, res) {
    db.Workout.find({}).sort({ day: -1 }).limit(7).then(function(workouts)  {
        res.json(workouts)
    })
})

module.exports = router