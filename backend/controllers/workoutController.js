const Workout = require('../models/workoutModel')

// function to get all workouts


// funcion to get a single workout


// function to create a new workout
const createWorkout = async(req, res) => {
    const {title, load, reps} = req.body

    try{
        const workout = await Workout.create({title, load, reps})
        res.status(200).json(workout)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}


// function to delete a workout


// function to update a workout


module.exports = {createWorkout}





