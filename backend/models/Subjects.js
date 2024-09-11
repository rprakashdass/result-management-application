const mongoose = require('mongoose')

const SubjectsSchema = new mongoose.Schema({
    title:{
        type: String,
    },
    department: {
        type: String,
    },
    studentsCount: {
        type: Number,
    },
})

module.exports = Book = mongoose.model('subjects', SubjectsSchema)