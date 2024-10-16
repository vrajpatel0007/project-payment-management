const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    budget: {
        type: Number
    }
});

module.exports = mongoose.model('Project', ProjectSchema);
