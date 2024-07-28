const mongoose = require('mongoose');   // we need mongoose since it allows to create models and schemas. 
                                        // mongoDB alone, is schemaless

const Schema = mongoose.Schema

const workoutSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    reps: {
        type: Number,
        required: true
    },
    load: {
        type: Number,
        required: true
    }
}, {timestamps: true})

module.exports = mongoose.model('Workout', workoutSchema)

