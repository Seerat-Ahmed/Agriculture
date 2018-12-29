let PesticideModel = require('../../models/PesticideModel/index');
let throwError = require("../../middleware/errorMiddleware");
const validator = require('validator');
let cloudinary = require('../../middleware/cloudinary');

class Pesticide {
    static async addPesticide(req, res) {
        let { pesticideName, pesticideDescription, price, contactDetails, companyId, companyName } = req.body;
        if (!pesticideName || !pesticideDescription || !price
            || !contactDetails.contactNumber
            || !validator.isEmail(contactDetails.contactEmail)
            || !contactDetails || !contactDetails.contactName
            || !contactDetails.location || !contactDetails.address
            || !companyName || !companyId
        ) {
            throwError(res, { message: "invalid body" }, 422)
        } else {
            let image_url = await cloudinary.v2.uploader.upload(req.files[0].path, { public_id: `${req.body.name}image`, resource_type: 'raw' });
            req.body['image_url'] = image_url.secure_url;
            let pesticideDoc = new PesticideModel(req.body);
            pesticideDoc.save((err, result) => {
                if (!err) {
                    res.json({ status: "success", data: result })
                } else {
                    throwError(res, { message: err.message }, 500)
                }
            })

        }
    }
    static async updatePesticide(req, res) {
        let { pesticideId, pesticideName, pesticideDescription, price, contactDetails, companyId } = req.body;

        if (!pesticideId || !pesticideName || !pesticideDescription || !price
            || !contactDetails.contactNumber
            || !validator.isEmail(contactDetails.contactEmail)
            || !contactDetails || !contactDetails.contactName
            || !contactDetails.location || !contactDetails.address
            || !companyId

        ) {
            throwError(res, { message: "invalid body" }, 422)
        } else {
            let image_url = await cloudinary.v2.uploader.upload(req.files[0].path, { public_id: `${req.body.name}image`, resource_type: 'raw' });
            req.body['image_url'] = image_url.secure_url;
            PesticideModel.find({ _id: pesticideId }, (err, doc) => {
                // console.log(doc)
                if (!err && doc[0] && doc[0].companyId == companyId) {
                    PesticideModel.findOneAndUpdate({ _id: pesticideId }, req.body, { new: true }, (err, doc) => {
                        if (!err)
                            res.json({ status: "success", data: doc })
                        else
                            throwError(res, { message: "you donot have rights" }, 401)

                    })
                }
                else {
                    throwError(res, { message: "no record found" }, 500)

                }
            })
        }
    }
    static deletePesiticide(req, res) {
        let { pesticideId, companyId } = req.body;
        if (!pesticideId || !companyId) {
            throwError(res, { message: "invalid body" }, 422)

        } else {
            PesticideModel.find({ _id: pesticideId }, (err, doc) => {
                if (!err && doc[0] && doc[0].companyId == companyId) {
                    PesticideModel.findOneAndRemove({ _id: pesticideId }, (err, doc) => {
                        if (!err) {
                            res.json({ status: "success" })
                        }
                    })
                } else {
                    throwError(res, { message: err.message }, 500)
                }
            })
        }
    }
    static getAllPesticides(req, res) {
        PesticideModel.find({}, (err, doc) => {
            res.json({ status: "success", pesticides: doc })
        })
    }
    static getPesticideById(req, res) {
        let { pesticideId } = req.query;
        if (!pesticideId) {
            throwError(res, { message: "invalid body" }, 422)

        } else {
            PesticideModel.findOne({ _id: pesticideId }, (err, doc) => {
                if (err || !doc) {
                    throwError(res, { message: (err && err.message) || "no record found" }, 500)

                }
                res.json({ status: "success", pesticide: doc })
            })
        }
    }
}
module.exports = Pesticide;