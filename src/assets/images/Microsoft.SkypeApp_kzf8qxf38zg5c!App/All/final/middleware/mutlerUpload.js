let multer = require('multer');
let path = require('path');
let storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, new Date().toISOString().replace(/:/g, '-') + file.originalname);
    }
})
let upload = multer({
    storage,
    limits: {
        fileSize: 1024 * 1024 * 8
    }
});
module.exports = upload;