let mongoose = require('../../dbConfig');

let problemSchema = mongoose.Schema({
    farmerId: {
        type: mongoose.Schema.Types.ObjectId,
        required: [true, 'Please insert your ID']
    },
    name: {
        type: String,
        required: [true, 'Please mention your problem name'],
        trim: true
    },
    description: {
        type: String,
        required: [true, 'Please describe your problem'],
        minlength: 15
    },
    image_url: {
        type: String,
        required: [false, 'Please insert the image of your problem'],
    },
    audio_url: {
        type: String,
        required: [false, 'Please describe your problem in audio'],
    },
    comments: [{ user_id: String, user_name: String, comment: String, time: String }]
});

const ProblemModel = mongoose.model('ProblemModel', problemSchema);


module.exports = ProblemModel;