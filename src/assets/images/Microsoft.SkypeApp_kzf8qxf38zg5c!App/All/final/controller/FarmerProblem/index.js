let cloudinary = require('../../middleware/cloudinary');
let ProblemModel = require('../../models/AddProblem');
let throwError = require('../../middleware/errorMiddleware')

class FarmerProblem {
    static async insertProblem(req, res) {
        let { name, description } = req.body;
        let result1 = {}, result2 = {};
        try {
            if (name.trim() !== "" && description.trim() !== "") {
                console.log('comming till there: ', req.body);
                result2 = await cloudinary.v2.uploader.upload(req.files[1].path, { public_id: `${req.body.public_id}audio`, resource_type: 'raw' });
                result1 = await cloudinary.v2.uploader.upload(req.files[0].path, { public_id: `${req.body.public_id}image`, resource_type: 'raw' });
                req.body['image_url'] = result1.secure_url;
                req.body['audio_url'] = result2.secure_url;
                let problemDocument = new ProblemModel(req.body);
                problemDocument.save((error, data) => {
                    console.log('database saved data: ', data)
                    if (!error) {
                        return FarmerProblem.sendResponse(res, data);
                    }
                    return throwError(res, { message: error.message });
                })
            } else {
                throw 'name and description is required'
            }

        } catch (e) {
            throwError(res, { message: e });
        }
    }
    static async updateProblem(req, res) {
        let { problem_id, name, description } = req.body;
        if (!problem_id || !name || !description) {
            throwError(res, { message: "invalid body" });
        }
        else {
            let image_url = await cloudinary.v2.uploader.upload(req.files[0].path, { public_id: `${req.body.problem_id}image`, resource_type: 'raw' });
            let audio_url = await cloudinary.v2.uploader.upload(req.files[1].path, { public_id: `${req.body.problem_id}audio`, resource_type: 'raw' });
            req.body['image_url'] = image_url.secure_url;
            req.body['audio_url'] = audio_url.secure_url;
            delete req.body.problem_id;
            ProblemModel.findOneAndUpdate({ _id: problem_id }, req.body, { new: true })
                .then(value => {
                    FarmerProblem.sendResponse(res, value);
                })
                .catch(err => {
                    throwError(res, { message: "cannot update post internal server error" }, 500)
                })
        }
    }
    static deleteProblem(req, res) {
        let { problem_id } = req.body;
        if (!problem_id) {
            throwError(res, { message: "invalid body" });
        }
        else {
            ProblemModel.deleteOne({ _id: problem_id })
                .then(value => {
                    res.json({ _id: problem_id, message: "deleted successfully", value })
                })
                .catch(err => {
                    throwError(res, { message: "cannot delete post internal server error" }, 500)
                })
        }
    }

    static getAllProblem(req, res) {
        ProblemModel.find({})
            .then(value => {
                return res.json({ problems: value })
            })
            .catch(err => {
                return throwError(res, { message: "cannot get problems internal server error" }, 500)
            })
    }

    static getFarmerProblem(req, res) {
        let { id } = req.body;
        if (id) {
            ProblemModel.find({ farmerId: id }, (error, result) => {
                if (result === null) {
                    return throwError(res, { message: 'there is no data corresponding the farmer ID' }, 500)
                }
                if (!error) {
                    return res.json({ problems: result });
                }
                return throwError(res, { message: error.message }, 500);
            })
        }
        else {
            return throwError(res, { message: "Farmer Id is required for farmer Problems" });
        }
    }


    static sendResponse(res, data) {
        return res.json({
            _id: data._id,
            name: data.name,
            description: data.description,
            image_url: data.image_url,
            audio_url: data.audio_url,
            comments: data.comments
        })
    }


    // static throwError

}

module.exports = FarmerProblem;