let MessageModel = require('../../models/PrivateMessageModel');
let throwError = require('../../middleware/errorMiddleware');

class PrivateMessage {
    static privateMessage(data, io) {
        io.sockets.emit(`${data.conversationId}`, data);
        let messageDocument = new MessageModel(data);
        messageDocument.save()
            .then(result => {

            })
            .catch(error => {
                console.log(error.message);
            })
    }

    static getConversation(req, res) {
        // let { conversationId } = req.body;
        if (conversationId) {
            MessageModel.find({ conversationId: req.params.conversationId }, (error, result) => {
                if (error) {
                    return throwError(res, { message: error.message });
                }
                return res.json(result);
            });
        }
        return throwError(res, { message: error.message });
    }
}


module.exports = PrivateMessage;