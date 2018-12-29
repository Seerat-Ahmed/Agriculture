let mongoose = require('../../dbConfig');

let messageSchema = mongoose.Schema({
    message: {
        type: String,
        minlength: [1, "Message can't be empty string"],
        require: [true, 'message is required']
    },
    senderInfo: {
        senderType: {
            type: String,
            minlength: [5, "sender type is mandatory"]
        },
        senderId: {
            type: String,
            minlength: [1, "senderId can't be empty"],
            require: [true, 'sender id is required']
        },
        senderName: {
            type: String,
            minlength: [3, "sender Name can't be empty string"],
            require: [true, 'sender name is required']
        }
    },
    receiverInfo: {
        receiverType: {
            type: String,
            minlength: [5, "reveiver type is mandatory"]
        },
        receiverId: {
            type: String,
            minlength: [1, 'receiverId can not be empty'],
            require: [true, 'receiver id is required']
        },
        receiverName: {
            type: String,
            minlength: [3, 'receiver name can not be empty string'],
            require: [true, 'receiver name is required']
        }
    },
    conversationId: {
        type: String,
        require: [true, 'Message id is required']
    },
    timeStamp: {
        type: Date,
        require: [true, 'timeStamp is required']
    }
});

module.exports = mongoose.model('MessageModel', messageSchema)