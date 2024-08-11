const { required } = require("joi");
const mongoose = require("mongoose");

const hallSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },

    description: {
        type: String,
        required: true
    },

    facilities: {
        type: [String],  // Array of strings
        required: true
    },

    room: {
        type: [
            {
                roomName: {
                    type: String,
                    required: true
                },
                noOfSeatsInRow: {
                    type: Number,
                    required: true
                },
                noOfSeatsInColumn: {
                    type: Number,
                    required: true
                },
                facilities: {
                    type: [String],  // Array of strings
                    required: true
                }
            }
        ],
        required: true,
    },

    media: {
        type: {
            videos: {
                type: String,
                required: false
            },
            images: {
                type: String,
                required: false
            }
        },
        required: true,
    }
});

module.exports = mongoose.model('Hall', hallSchema);
