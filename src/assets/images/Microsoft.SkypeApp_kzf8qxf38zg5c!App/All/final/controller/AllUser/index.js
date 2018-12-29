let UserModel = require('../../models/AuthModel/UserModel');
let throwError = require('../../middleware/errorMiddleware');
class User {
    static getAllUser(req, res) {
        UserModel.find({ userType: req.query.userType }, (err, data) => {
            if (err) {
                return throwError(res, { message: err.message }, 500)
            } else {

                for (let i = 0; i < data.length; i++) {

                    data[i].password = undefined;
                }
                res.json(data);
            }
        })
    }
}
module.exports = User;