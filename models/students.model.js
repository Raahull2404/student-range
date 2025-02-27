const mongoose = require('mongoose')
const DB = require('../connections/db.connection')

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    subject: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    location: pointSchema
})

const pointSchema = new mongoose.Schema({
    type: {
        type: String,
        enum: ['Point'],
        required: true
    },
    coordinates: {
        type: [Number],
        required: true,
        index: '2dsphere'
    }
})



module.exports = mongoose.model('student', studentSchema)