let throwError = require('../../middleware/errorMiddleware');
let FertilizerModel = require('../../middleware/errorMiddleware');


class FertilizerResponse {
    static addResponse(req, res) {
        let { _id, name, expectedPrice, qty, email, senderId } = req.body;
        if (!_id || !name || !expectedPrice || !qty || !email || !senderId) {
            return throwError(res, { message: "invalid request" }, 422);
        } else {
            FertilizerModel.findOneAndUpdate({ _id: _id }, { $push: { response: req.body } }, { new: true }, (error, data) => {
                if (!error || !doc) {
                    return res.json({ status: "success", data: data });
                }
                return throwError(res, { message: error.message }, 500);
            })
        }
    }
    static updateResponse(req, res) {
        let { _id, name, expectedPrice, qty, email, responseId } = req.body;
        if (!_id || !name || !expectedPrice || !qty || !email) {
            return throwError(res, { message: "invalid request" }, 422);
        } else {
            FertilizerModel.findOneAndUpdate({ "response._id": responseId },
                {
                    "$set": {
                        "response.$.name": name,
                        "response.$.expectedPrice": expectedPrice,
                        "response.$.qty": qty,
                        "response.$.email": email
                    }

                }, { new: true }, (error, doc) => {
                    if (!error && doc) {
                        return res.json({ status: "sccuess", response: doc });
                    }
                    return throwError(res, { message: error.message }, 500);
                }
            )
        }
    }

    static deleteResponse(req, res) {
        let { responseId, fertilizerId } = req.body;
        if (!responseId || !fertilizerId) {
            return throwError(res, { message: "invalid" }, 422);
        } else {
            FertilizerModel.findOneAndUpdate({ _id: responseId }, {
                $pull: { 'response': { _id: responseId } }
            }, { new: true }, (err, doc) => {
                if (err || !doc) {
                    return throwError(res, { message: error.message || "no record found" }, 500);
                }
                return res.json({ status: "success", response: doc.response })
            })
        }
    }

    static getAllResponses(req, res) {
        let { fertilizerId } = req.query;
        if (!fertilizerId) {
            return throwError(res, { message: "invalid body" }, 422);
        }
        else {
            MachineModel.findOne({ _id: fertilizerId }, (error, doc) => {
                if (!error && doc) {
                    return res.json({ status: "success", response: doc.response });
                }
                return throwError(res, { message: err.message || "no record found" }, 500);
            })
        }
    }
}

module.exports = FertilizerResponse;