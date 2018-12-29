let mongoose = require('../../dbConfig');

let fertilizerSchema = mongoose.Schema({
    companyName: {
        type: mongoose.SchemaTypes.String,
        trim: true,
        required: [true, "company name required"],
        validate: {
            validator: (companyName) => companyName.length >= 3,
            message: "company name length should be 3 or above"
        }
    },
    companyId: {
        type: mongoose.SchemaTypes.String,
        trim: true,
        required: [true, "company id required"],
        validate: {
            validator: (companyId) => companyId.length > 10,
            message: "companyId length should be 10 or above"
        }
    },
    name: {
        type: mongoose.SchemaTypes.String,
        trim: true,
        required: [true, "fertilizer name required"],
        validate: {
            validator: (name) => name.length >= 3,
            message: "Fertilizer name length should be 3 or above"
        }
    },
    product: {
        type: mongoose.SchemaTypes.String,
        trim: true,
        required: [true, "product name required"],
        validate: {
            validator: (product) => product.length >= 6,
            message: "product name length should be 6 or above"
        }
    },
    application: {
        type: mongoose.SchemaTypes.String,
        trim: true,
        required: [true, "application required"],
        validate: {
            validator: (application) => application.length >= 15,
            message: "application length should be 15 or above"
        }
    },
    price: {
        type: mongoose.SchemaTypes.String,
        trim: true,
        required: [true, "price required"],
        validate: {
            validator: (price) => price.length >= 4,
            message: "Wrong price length should be 4 or above"
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
    image_url: {
        type: mongoose.SchemaTypes.String,
        trim: true,
        required: [true, "contact address is required"],
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
        }
    }]
});


module.exports = mongoose.model("FertilizerModel", fertilizerSchema);