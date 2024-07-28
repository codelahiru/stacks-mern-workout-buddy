const express = require('express')
const Workout = require('../models/workoutModel')
const {createWorkout} = require('../controllers/workoutController')
const router = express.Router()

// GET all workouts
router.get('/', (req, res) => {
    res.json({msg: 'GET all workouts'})
})

// GET a single workout
router.get('/:id', (req, res) => {
    res.json({msg: 'GET a single workout'})
})

// POST a new workout
router.post('/', createWorkout)

// DELETE a workout
router.delete('/:id', (req, res) => {
    res.json({msg: 'DELETE a workout'})
})

// PATCH (Update) a workout
router.patch('/:id', (req, res) => {
    res.json({msg: 'UPDATE a new workout'})
})

module.exports = router
