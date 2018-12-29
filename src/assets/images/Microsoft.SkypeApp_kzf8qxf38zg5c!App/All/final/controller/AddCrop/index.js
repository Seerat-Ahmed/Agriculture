let AddCrop = require("../../models/AddCropData");
let cloudinary = require('../../middleware/cloudinary');
let throwError = require('../../middleware/errorMiddleware');

class CropData {
    static async AddCropData(req, res) {
        let { name, farmerId, wieght, transport, price, date } = req.body;
        console.log(req.body);
        // console.log(req.file.path);
        try {
            if (name.trim() !== "" && farmerId.trim() !== "" && wieght.trim() !== "" && transport.trim() !== "" && price.trim() !== "" && date.trim() !== "") {
                let image_url = await cloudinary.v2.uploader.upload(req.files[1].path, { public_id: `${req.body.name}image`, resource_type: 'raw' });
                req.body['image_url'] = image_url.secure_url;
                // let result = await cloudinary.v2.uploader.upload(req.file.path, { public_id: `${req.body.public_id}image` });
                // console.log('result: ', result);
                // console.log('req.body.image_url: ', req.body);
                let cropDocument = new AddCrop(req.body);
                cropDocument.save((error, data) => {
                    if (!error) {
                        return CropData.sendResponse(res, data);
                    }
                    return throwError(res, { message: error.message }, 500);
                })
            } else {
                return throwError(res, { message: "data badly formated" });
            }
        }
        catch (e) {
            return throwError(res, { message: e.message });
        }
    }

    static deleteCropData(req, res) {
        let { crop_id } = req.body;
        AddCrop.findByIdAndDelete({ _id: crop_id })
            .then((data) => {
                return res.json(data);
            })
            .catch(e => {
                return throwError(res, { message: e.message });
            })
    }

    static async updateCrop(req, res) {
        let { name, wieght, transport, price, date, crop_id } = req.body;
        console.log('req.body from  update: ', req.body);
        console.log((name.trim() !== "" && wieght.trim() !== "" && price.trim() !== "" && date.trim() !== ""))
        if (name.trim() !== "" && wieght.trim() !== "" && price.trim() !== "" && date.trim() !== "" && crop_id.trim() !== "") {
            try {
                let image_url = await cloudinary.v2.uploader.upload(req.files[1].path, { public_id: `${req.body.name}image`, resource_type: 'raw' });
                req.body['image_url'] = image_url.secure_url;
                AddCrop.findOneAndUpdate({ _id: crop_id }, req.body, { new: true })
                    .then(value => {
                        CropData.sendResponse(res, value);
                    })
                    .catch(err => {
                        console.log("error::", err)
                        throwError(res, { message: "cannot update crops data internal server error" }, 500)
                    })
            } catch (e) {
                throwError(res, { message: e.message }, 500);
            }
        }
        else {
            throwError(res, { message: "invalid body" }, 422);
        }
    }
    static getFarmerCrop(req, res) {
        let { farmerId } = req.body;
        if (farmerId) {
            AddCrop.find({ farmerId: farmerId }, (error, result) => {
                if (result === null) {
                    return throwError(res, { message: 'there is no data corresponding the farmer ID' }, 500)
                }
                if (!error) {
                    return res.json({ cropData: result });
                }
                return throwError(res, { message: error.message }, 500);
            })
        }
        else {
            return throwError(res, { message: "Farmer Id is required for farmer Problems" });
        }
    }

    static getAllCrops(req, res) {
        AddCrop.find({})
            .then(value => {
                return res.json({ crops: value })
            })
            .catch(err => {
                return throwError(res, { message: "cannot get crops internal server error" }, 500)
            })
    }

    static sendResponse(res, data) {
        return res.json({
            id: data._id,
            name: data.name,
            farmerId: data.farmerId,
            image_url: data.image_url,
            wieght: data.wieght,
            transport: data.transport,
            price: data.price,
            date: data.date
        })
    }
}

module.exports = CropData;