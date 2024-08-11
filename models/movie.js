// DB
const mongoose = require("mongoose")

const movieSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },

    posterImage: {
        type: String,
        required: true,
    },

    year: {
        type: Number,
        required: true
    },

    video: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    },

    casting: {
        type: String,
        required: true,
    },

    realeseDate: {
        type: Date,
        required: true
    },

    tags: {
        type: {
            duration: {
                type: Number,
                required: true
            },
            rated: {
                type: String,
                required: true
            }
        },
        required: true
    },

    genre: {
        type: String,
        required: true,
    },

    language: {
        type: String,
        required: true,
    }
})

module.exports = mongoose.model('Movie', movieSchema);
