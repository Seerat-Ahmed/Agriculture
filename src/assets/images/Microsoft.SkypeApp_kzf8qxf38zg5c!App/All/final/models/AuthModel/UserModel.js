let mongoose = require('../../dbConfig')

const userSchema = mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: [true, 'User name is required'],
        // minlength: 3
    },
    userType: {
        type: String,
        trim: true,
        require: [true, 'Type must be required']
    },
    email: {
        type: String,
        trim: true,
        required: true,
        unique: [true, 'This email taken by another account']
    },
    password: {
        type: String,
        trim: true,
        required: true,
        minlength: 6
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    image_url: {
        type: String,
        require: [true, 'User profile image is required']
    }
});

const UserModel = mongoose.model('UserModel', userSchema);

module.exports = UserModel;