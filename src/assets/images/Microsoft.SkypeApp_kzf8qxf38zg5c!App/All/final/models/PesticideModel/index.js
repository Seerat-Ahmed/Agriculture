let mongoose = require('../../dbConfig');

const pesticideSchema = mongoose.Schema({
    pesticideName: {
        type: String,
        trim: true,
        required: [true, 'Machine name is required'],
        validate: {
            validator: (price) => price.length >= 4,
            message: "machine name length must be greater than or equals to 4 characters"
        }
        // minlength: 3
    },
    pesticideDescription: {
        type: String,
        trim: true,
        required: [true, 'Type must be required'],
        validate: {
            validator: (price) => price.length >= 20,
            message: "machine description length must be greater than or equals to 20 characters"
        }
    },
    price: {
        type: String,
        trim: true,
        required: true,
        validate: {
            validator: (price) => price.length >= 4,
            message: "price length should be 4 or above"
        }

    },
    contactDetails: {
        contactNumber: {
            type: mongoose.SchemaTypes.String,
            trim: true,
            required: [true, "contactNumber required"],
            validate: {
                validator: (contactNumber) => contactNumber.length >= 11,
                message: "contact number length should be 13 or above"
            }
        },
        contactEmail: {
            type: mongoose.SchemaTypes.String,
            trim: true,
            required: [true, "contact email is required"],
            validate: {
                validator: (contactEmail) => contactEmail.length >= 11,
                message: "email length should be 13 or above"
            }
        },
        contactName: {
            type: mongoose.SchemaTypes.String,
            trim: true,
            required: [true, "contact name is required"],
            validate: {
                validator: (contactName) => contactName.length >= 3,
                message: "contact name length should be 3 or above"
            }
        },
        location: {
            type: mongoose.SchemaTypes.String,
            trim: true,
            required: [true, "contact location is requied"],
            validate: {
                validator: (location) => location.length >= 15,
                message: "contact location length should be 15 or above"
            }
        },
        address: {
            type: mongoose.SchemaTypes.String,
            trim: true,
            required: [true, "contact address is required"],
            validate: {
                validator: (address) => address.length >= 15,
                message: "address length should be 15 or above"
            }
        }
    },

    companyName: {
        type: String,
        required: [true, "creator name is required"],

    },
    companyId: {
        type: String,
        required: [true, "creator id is required"]
    },
    response: [{
        name: {
            type: mongoose.SchemaTypes.String,
            trim: true,
            validate: {
                validator: (name) => name.length >= 3,
                message: " name length should be 3 or above"
            }
        },
        expectedPrice: {
            type: mongoose.SchemaTypes.String,
            trim: true,
            validate: {
                validator: (price) => price.length >= 4,
                message: "price length should be 3 or above"
            }
        },
        qty: {
            type: mongoose.SchemaTypes.String,
            trim: true,
            validate: {
                validator: (qty) => qty.length >= 1,
                message: "qty length should be 1 or above"
            }
        },
        email: {
            type: mongoose.SchemaTypes.String,
            trim: true,
            validate: {
                validator: (email) => email.length >= 11,
                message: "email length should be 13 or above"
            }
        },
        senderId: {
            type: mongoose.SchemaTypes.String,
            requried: [true, "senderId is required"]
        }
    }],

    image_url: {
        type: mongoose.SchemaTypes.String,
        trim: true,
        required: [true, "image is required"],
    }


});
const PesticideModel = mongoose.model('PesticideModel', pesticideSchema);

module.exports = PesticideModel;