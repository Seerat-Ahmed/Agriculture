let ProblemModel = require('../../models/AddProblem');
let AddCrop = require('../../models/AddCropData');

class Comment {
    static getAllComments(req, res) {
        // let { problem_id } = req.query.problem_id;
        // if (!problem_id) {
        //     Comment.throwError(res, { message: "invalid body" });

        // }
        // else {
        let { type, _id } = req.query;
        if (type === 'crop') {
            AddCrop.findOne({ _id: _id }).then(value => {
                Comment.sendResponse(res, value);
            })
        }
        if (type === 'problem') {
            ProblemModel.findOne({ _id: _id }).then(value => {
                Comment.sendResponse(res, value);
            })
        }

        // }
    }
    static addComment(req, res) {
        let { _id, comment, user_id, user_name, type } = req.body;
        if (!_id || !comment || !user_id || !user_name || !type) {
            Comment.throwError(res, { message: "invalid body" })
        } else {

            let commentObj = { user_id, comment, user_name, time: String(Date.now()) }
            if (type === "crop") {
                AddCrop.findOneAndUpdate({ _id: _id }, { $push: { comments: commentObj } }, { new: true }).then(value => {
                    return Comment.sendResponse(res, value)
                }).catch(err => {
                    return Comment.throwError(res, { message: "cannot add comment internal server error" }, 500)
                })
            }
            if (type === 'problem') {
                ProblemModel.findOneAndUpdate({ _id: _id }, { $push: { comments: commentObj } }, { new: true }).then(value => {
                    return Comment.sendResponse(res, value)
                }).catch(err => {
                    return Comment.throwError(res, { message: "cannot add comment internal server error" }, 500)
                })
            }
        }
    }
    static updateComment(req, res) {
        let { _id, comment, user_id, user_name, comment_id, type } = req.body;
        if (!_id || !comment || !user_id || !user_name || !comment_id || !type) {
            Comment.throwError(res, { message: "invalid body" })
        } else {
            let commentObj = { user_id, comment, user_name, time: Date.now() }
            if (type === "crop") {
                AddCrop.findOneAndUpdate({ 'comments._id': comment_id },
                    {
                        '$set': {
                            'comments.$.comment': commentObj.comment,
                            'comments.$.time': String(commentObj.time)
                        }
                    }, { new: true }
                ).then(value => {
                    Comment.sendResponse(res, value);
                }).catch(err => {
                    Comment.throwError(res, { message: "cannot update comment internal server error" }, 500)
                })
            }
            if (type === "problem") {
                ProblemModel.findOneAndUpdate({ 'comments._id': comment_id },
                    {
                        '$set': {
                            'comments.$.comment': commentObj.comment,
                            'comments.$.time': String(commentObj.time)
                        }
                    }, { new: true }
                ).then(value => {
                    Comment.sendResponse(res, value)

                }).catch(err => {
                    Comment.throwError(res, { message: "cannot update comment internal server error" }, 500)
                })
            }
        }
    }
    static deleteComment(req, res) {
        let { _id, comment_id, type } = req.body;
        if (!_id || !comment_id || !type) {
            Comment.throwError(res, { message: "invalid body" })
        } else {
            if (type === "crop") {
                AddCrop.findByIdAndUpdate(
                    _id,
                    { $pull: { 'comments': { _id: comment_id } } }, { new: true }
                ).then(value => {
                    Comment.sendResponse(res, value)
                }).catch(err => {
                    Comment.throwError(res, { message: "cannot delete comment internal server error" }, 500)
                })
            }
            if (type === "problem") {
                ProblemModel.findByIdAndUpdate(
                    _id,
                    { $pull: { 'comments': { _id: comment_id } } }, { new: true }
                ).then(value => {
                    Comment.sendResponse(res, value)
                }).catch(err => {
                    Comment.throwError(res, { message: "cannot delete comment internal server error" }, 500)
                })
            }
        }
    }
    static sendResponse(res, data) {
        let { comments } = data
        return res.json({
            comments
        })
    }
    static throwError(res, errObj, statusCode = 400) {
        let error = new Error();
        error.code = errObj.code;
        error.message = errObj.message;
        error.status = statusCode
        return res.status(statusCode).json({ error })
    }

}
module.exports = Comment;