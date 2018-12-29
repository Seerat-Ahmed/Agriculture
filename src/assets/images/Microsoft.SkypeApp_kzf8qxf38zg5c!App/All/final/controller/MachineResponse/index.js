let MachineModel = require('../../models/MachineModel/index');
let throwError = require("../../middleware/errorMiddleware");
const validator = require('validator');
class MachineResponse {
    static addResponse(req, res) {
        let { machineId, email, name, qty, expectedPrice, senderId } = req.body;
        if (!machineId || !validator.isEmail(email) || !name || !qty || !expectedPrice || !senderId) {
            throwError(res, { message: "invalid body" }, 422);
        } else {
            let responseObj = { email, name, qty, expectedPrice, senderId };
            MachineModel.findOneAndUpdate({ _id: machineId }, { $push: { response: responseObj }, }, { new: true }, (err, doc) => {
                if (err || !doc) {
                    throwError(res, { message: (err && err.message) || "no record found" }, 500);
                } else {
                    res.json({ status: "success", response: doc.response })
                }
            })
        }
    }
    static updateResponse(req, res) {
        let { machineId, email, name, qty, expectedPrice, responseId } = req.body;
        if (!machineId || !validator.isEmail(email) || !name || !qty || !expectedPrice || !responseId) {
            throwError(res, { message: "invalid body" }, 422);

        } else {
            MachineModel.findOneAndUpdate({ "response._id": responseId },
                {
                    '$set': {
                        'response.$.qty': qty,
                        'response.$.email': email,
                        'response.$.name': name,
                        'response.$.expectedPrice': expectedPrice,
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
        let { machineId, responseId } = req.body;
        if (!machineId || !responseId) {
            throwError(res, { message: "invalid body" }, 422);

        }
        else {
            MachineModel.findByIdAndUpdate({ _id: machineId }, {
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
        let { machineId } = req.query;
        if (!machineId) {
            throwError(res, { message: "invalid body" }, 422);

        }
        else {
            MachineModel.findOne({ _id: machineId }, (err, doc) => {
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
module.exports = MachineResponse;