const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const validator = require('validator');
let cloudinary = require('../../middleware/cloudinary');
const UserModel = require('../../models/AuthModel/UserModel');
const salt = 10;
const secret = '0123456789';


class AuthController {
    static async signUp(req, res) {
        let { email, password } = req.body, result = {};
        if (email && password) {
            if (validator.isEmail(email)) {
                // console.log('req.file: ', req.files);
                try {
                    result = await cloudinary.v2.uploader.upload(req.files[0].path, { public_id: `${req.body.name}image`, resource_type: 'raw' });
                    console.log('result1: ', result);
                    req.body['image_url'] = result.secure_url;
                    let userDocument = new UserModel(req.body);
                    userDocument.password = bcrypt.hashSync(userDocument.password, salt);
                    userDocument.save((err, user) => {
                        if (!err) {
                            delete user.password;
                            // user.image_url = result.secure_url;
                            return AuthController.sendResponse(res, user);
                        }
                        if (err.code == 11000) {
                            let error = {
                                code: err.code,
                                message: err.message
                            }
                            return AuthController.throwError(res, error, 400);
                        }
                        return AuthController.throwError(res, { message: err.message }, 400);
                    })
                } catch (e) {
                    console.error(e.message);
                    AuthController.throwError(res, { message: e.message });
                }

            } else {
                AuthController.throwError(res, { message: 'Email badly formated' }, 422);
            }
        }
        else {
            AuthController.throwError(res, { message: 'Email badly formated' }, 422);
        }
    }

    static signIn(req, res) {
        console.log(req.body)
        let { email, password } = req.body;
        if (email && password) {
            if (validator.isEmail(email)) {
                UserModel.findOne({ email }, (err, user) => {
                    console.log('from signIn:: ', user)
                    if (err === null && user === null) {
                        return AuthController.throwError(res, { message: `No user corresponding to the email ${email}` }, 404)
                    }
                    if (!err) {
                        if (bcrypt.compareSync(password, user.password)) {
                            delete user.password;
                            return AuthController.sendResponse(res, user);
                        } else {
                            return AuthController.throwError(res, { message: `Wrong password` }, 400)
                        }
                    } else {
                        return AuthController.throwError(res, { message: `No user corresponding to the email ${email}` }, 404)
                    }
                })
            } else {
                return AuthController.throwError(res, { message: 'Email or password badly formated' }, 400);
            }
        }
        else {
            return AuthController.throwError(res, { message: 'Email or password badly formated' }, 400);
        }
    }

    static signOut(req, res) {
        return res.json({
            status: 'success'
        })
    }

    static sendResponse(res, user) {
        let userObj = {
            name: user.name,
            email: user.email,
            id: user._id,
            createdAt: user.createdAt,
            // type: user.type,
            image_url: user.image_url,
            userType: user.userType
        }
        jwt.sign(userObj, secret, { expiresIn: Math.floor(Date.now() / 1000) + (60 * 60) }, (err, token) => {
            if (!err) {
                return res.json({
                    user: userObj,
                    status: 'success',
                    token
                })
            }
            return this.throwError(res, { message: err.message }, 400);///////////////tesst ans start working on sign in
        })
    }

    static throwError(res, errObj, statusCode = 400) {
        let error = new Error();
        error.code = errObj.code;
        error.message = errObj.message;
        // errObj.status = statusCode;
        error.status = statusCode
        return res.status(statusCode).json({ error })
    }
}

module.exports = AuthController;