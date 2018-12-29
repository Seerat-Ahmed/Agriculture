let FertilizerModel = require('../../models/FertilizerModel');
let throwError = require("../../middleware/errorMiddleware");
const validator = require('validator');
let cloudinary = require('../../middleware/cloudinary');
class Fertilizer {
    static async addFertilizer(req, res) {
        let { name, product, application, price, contactDetails } = req.body;
        console.log("req.body: ", req.body);
        if (!name ||
            !product ||
            !application ||
            !price ||
            !companyName ||
            !companyId ||
            !contactDetails.contactNumber ||
            !validator.isEmail(contactDetails.contactEmail) ||
            !contactDetails.contactName ||
            !contactDetails.location ||
            !contactDetails.address
        ) {
            return throwError(res, { message: "invalid request" }, 422);
        } else {
            try {
                let image_url = await cloudinary.v2.uploader.upload(req.files[0].path, { public_id: `${req.body.name}image`, resource_type: 'raw' });
                req.body['image_url'] = image_url.secure_url;
                let fertilizerDocument = new FertilizerModel(req.body);
                fertilizerDocument.save((error, result) => {
                    console.log("error: ", error);
                    if (!error) {
                        return res.json({ status: "success", data: result });
                    }
                    return throwError(res, { message: error.message }, 500);
                })
            } catch (e) {
                return throwError(res, { message: e.message }, 500);
            }
        }
    }

    static async updateFertilizer(req, res) {
        let { name, product, application, price, contactDetails, _id } = req.body;
        console.log("req.body: ", req.body);
        if (!name ||
            !product ||
            !application ||
            !price ||
            !companyName ||
            !companyId ||
            !contactDetails.contactNumber ||
            !validator.isEmail(contactDetails.contactEmail) ||
            !contactDetails.contactName ||
            !contactDetails.location ||
            !contactDetails.address
        ) {
            return throwError(res, { message: "invalid request" }, 422);
        } else {
            try {
                let image_url = await cloudinary.v2.uploader.upload(req.files[0].path, { public_id: `${req.body.name}image`, resource_type: 'raw' });
                req.body['image_url'] = image_url.secure_url;
                // let fertilizerDocument = new FertilizerModel(req.body);
                FertilizerModel.findOneAndUpdate(_id, req.body, { upsert: true }, (error, result) => {
                    // console.log("error: ", error);
                    if (!error) {
                        return res.json({ status: "success", data: result });
                    }
                    return throwError(res, { message: error.message }, 500);
                })
            } catch (e) {
                return throwError(res, { message: e.message }, 500);
            }
        }
    }

    static deleteFertilizer(req, res) {
        let { _id } = req.body;
        console.log("_id: ", _id);
        FertilizerModel.findByIdAndDelete(_id, (error, result) => {
            if (result === null) {
                return throwError(res, { message: "The server has not found anything" }, 404);
            }
            if (!error) {
                return res.json({ status: "success", data: result });
            }
            return throwError(res, { message: error.message }, 500);
        })
    }

    static getFertilizerById(req, res) {
        let { fertilizerId } = req.query;
        if (!fertilizerId) {
            return throwError(res, { message: "invalid body" }, 422);
        } else {
            FertilizerModel.find({ _id: fertilizerId }, (error, doc) => {
                if (!error && doc) {
                    return res.json({ status: "success", fertilizer: doc });
                }
                return throwError(res, { message: error.message }, 500);
            })
        }
    }

    static getAllFertilizer(req, res) {
        FertilizerModel.find({}, (error, fertilizers) => {
            if (!error && fertilizers) {
                return res.json({ status: "success", fertilizers });
            }
            return throwError(res, { message: error.message }, 500);
        })
    }


}

module.exports = Fertilizer;