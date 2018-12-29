let mongoose = require('../../dbConfig');

let cropSchema = new mongoose.Schema({
    farmerId: {
        type: mongoose.Schema.Types.ObjectId,
        required: [true, 'farmerId is required']
    },
    name: {
        type: String,
        required: [true, 'Please insert the crop name']
    },
    wieght: {
        type: String,
        required: [true, 'Please insert crop weight']
    },
    transport: {
        type: Boolean,
        required: [true, 'transport info is mendatory']
    },
    // image_url: {
    //     type: String,
    //     required: [true, 'image url is required']
    // },
    price: {
        type: String,
        required: [true, 'Please insert the price']
    },
    date: {
        type: Date,
        required: [true, 'Please insert the date']
    },
    comments: [{ user_id: String, user_name: String, comment: String, time: String }]
})



module.exports = mongoose.model('AddCrop', cropSchema);