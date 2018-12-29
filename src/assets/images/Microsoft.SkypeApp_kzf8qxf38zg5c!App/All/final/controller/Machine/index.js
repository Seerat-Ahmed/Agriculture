let MachineModel = require('../../models/MachineModel/index');
let throwError = require("../../middleware/errorMiddleware");
const validator = require('validator');
let cloudinary = require('../../middleware/cloudinary');

class Machine {
    static async addMachine(req, res) {
        let { machineName, machineDescription, price, contactDetails, companyId, companyName } = req.body;
        if (!machineName || !machineDescription || !price
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
            let machineDoc = new MachineModel(req.body);
            machineDoc.save((err, result) => {
                if (!err) {
                    res.json({ status: "success", data: result })
                } else {
                    throwError(res, { message: err.message }, 500)
                }
            })

        }
    }
    static async updateMachine(req, res) {
        let { machineId, machineName, machineDescription, price, contactDetails, companyId } = req.body;

        if (!machineId || !machineName || !machineDescription || !price
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
            MachineModel.find({ _id: machineId }, (err, doc) => {
                // console.log(doc)
                if (!err && doc[0] && doc[0].companyId == companyId) {
                    MachineModel.findOneAndUpdate({ _id: machineId }, req.body, { new: true }, (err, doc) => {
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
    static deleteMachine(req, res) {
        let { machineId, companyId } = req.body;
        if (!machineId || !companyId) {
            throwError(res, { message: "invalid body" }, 422)

        } else {
            MachineModel.find({ _id: machineId }, (err, doc) => {
                if (!err && doc[0] && doc[0].companyId == companyId) {
                    MachineModel.findOneAndRemove({ _id: machineId }, (err, doc) => {
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
    static getAllMachines(req, res) {
        MachineModel.find({}, (err, doc) => {
            res.json({ status: "success", machines: doc })
        })
    }
    static getMachineById(req, res) {
        let { machineId } = req.query;
        if (!machineId) {
            throwError(res, { message: "invalid body" }, 422)

        } else {
            MachineModel.findOne({ _id: machineId }, (err, doc) => {
                if (err || !doc) {
                    throwError(res, { message: (err && err.message) || "no record found" }, 500)
                }
                res.json({ status: "success", machine: doc })
            })
        }
    }
}
module.exports = Machine;