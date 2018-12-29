let PesticideModel = require('../../models/PesticideModel/index');
let throwError = require("../../middleware/errorMiddleware");
const validator = require('validator');
class PesticideResponse {
    static addResponse(req, res) {
        let { pesticideId, email, name, qty, expectedPrice, senderId } = req.body;
        if (!pesticideId || !validator.isEmail(email) || !name || !qty || !expectedPrice || !senderId) {
            throwError(res, { message: "invalid body" }, 422);
        } else {
            let responseObj = { email, name, qty, expectedPrice, senderId };
            PesticideModel.findOneAndUpdate({ _id: pesticideId }, { $push: { response: responseObj }, }, { new: true }, (err, doc) => {
                if (err || !doc) {
                    throwError(res, { message: (err && err.message) || "no record found" }, 500);
                } else {
                    res.json({ status: "success", response: doc.response })
                }
            })
        }
    }
    static updateResponse(req, res) {
        let { pesticideId, email, name, qty, expectedPrice, responseId, senderId } = req.body;
        if (!pesticideId || !validator.isEmail(email) || !name || !qty || !expectedPrice || !responseId) {
            throwError(res, { message: "invalid body" }, 422);

        } else {
            PesticideModel.findOneAndUpdate({ "response._id": responseId },
                {
                    '$set': {
                        'response.$.qty': qty,
                        'response.$.email': email,
                        'response.$.name': name,
                        'response.$.expectedPrice': expectedPrice,
                        'response.$.senderId': senderId
                    }
                }, { new: true }, (err, doc) => {
                    if (err || !doc) {
                        throwError(res, { message: (err && err.message) || "no record found" }, 500);
                    } else {
                        res.json({ status: "success", response: doc.response })
                    }
                }
            )
        }
    }
    static deleteResponse(req, res) {
        let { pesticideId, responseId } = req.body;
        if (!pesticideId || !responseId) {
            throwError(res, { message: "invalid body" }, 422);

        }
        else {
            PesticideModel.findByIdAndUpdate({ _id: pesticideId }, {
                $pull: { 'response': { _id: responseId } }
            }, { new: true }, (err, doc) => {
                if (err || !doc) {
                    throwError(res, { message: (err && err.message) || "no record found" }, 500);
                } else {
                    res.json({ status: "success", response: doc.response })
                }
            })
        }
    }
    static getAllResponses(req, res) {
        let { pesticideId } = req.query;
        if (!pesticideId) {
            throwError(res, { message: "invalid body" }, 422);

        }
        else {
            PesticideModel.findOne({ _id: pesticideId }, (err, doc) => {
                if (err || !doc) {
                    throwError(res, { message: (err && err.message) || "no record found" }, 500);

                }
                else {
                    console.log(doc.response)
                    res.json({ status: "success", response: doc.response })
                }
            })
        }
    }
}
module.exports = PesticideResponse;