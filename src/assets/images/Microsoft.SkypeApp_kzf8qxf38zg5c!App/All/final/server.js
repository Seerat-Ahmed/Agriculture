const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const logger = require('morgan');
const AuthController = require('./controller/AuthController');
const Weather = require('./controller/weather');
const VerificationMiddleware = require('./middleware/tokenVerification');
const FarmerProblem = require('./controller/FarmerProblem');
const CropData = require('./controller/AddCrop');
const Comment = require("./controller/Comment/index");
const User = require("./controller/AllUser/index");
let upload = require('./middleware/mutlerUpload');
let MessageModel = require('./models/PrivateMessageModel');
let PrivateMessage = require('./controller/PrivateMessages');
let Fertilizer = require('./controller/Fertilizer');
let FertilizerResponse = require('./controller/FertilizerResponse');
let Machine = require("./controller/Machine");
let MachineResponse = require("./controller/MachineResponse")
let Pesticide = require("./controller/Pesticide");
let PesticideResponse = require("./controller/PesticideResponse")



const app = express();
let server = require('http').Server(app);
let io = require('socket.io')(server);


app.set('port', process.env.PORT || 8080);
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.post('/signin', (req, res) => {
    AuthController.signIn(req, res)
})
app.post('/signup', upload.any(), (req, res) => {
    AuthController.signUp(req, res);
});

app.use(VerificationMiddleware);


/* problem routes */
//problem
app.post('/problem/add', upload.any(), (req, res) => {
    console.log(':::::::::::::::::::: ', req.body)
    FarmerProblem.InsertProblem(req, res);
});
app.get("/problem/all", (req, res) => {
    FarmerProblem.getAllProblem(req, res);
})

app.post("/problem/farmer", (req, res) => {
    FarmerProblem.getFarmerProblem(req, res)
})
app.put("/problem/update", (req, res) => {
    FarmerProblem.updateProblem(req, res);
})
app.delete("/problem/delete", (req, res) => {
    FarmerProblem.deleteProblem(req, res);
})


//comments
app.post("/comment/add", (req, res) => {
    Comment.addComment(req, res);
})
app.put("/comment/update", (req, res) => {
    Comment.updateComment(req, res);
})
app.delete("/comment/delete", (req, res) => {
    Comment.deleteComment(req, res);
});
app.get("/comment/all", (req, res) => {
    Comment.getAllComments(req, res);
})

//fertilizer

app.post('/fertilizer/add', upload.any(), (req, res) => {
    Fertilizer.addFertilizer(req, res);
});
app.put('/fertilizer/update', upload.any(), (req, res) => {
    Fertilizer.updateFertilizer(req, res);
});
app.delete('/fertilizer/delete', (req, res) => {
    Fertilizer.deleteFertilizer(req, res);
});
app.get('/fertilizer', (req, res) => {
    //?fertilizerId=
    Fertilizer.getFertilizerById(req, res);
});
app.get('/fertilizer/all', (req, res) => {
    Fertilizer.getAllFertilizer(req, res);
})
app.post('/fertilizer/response/add', (req, res) => {
    FertilizerResponse.addResponse(req, res);
});
//fertilizer response
app.post("/fertilizer/response/add", (req, res) => {
    FertilizerResponse.addResponse(req, res);
})
app.put("/fertilizer/response/update", (req, res) => {
    FertilizerResponse.updateResponse(req, res);
});
app.delete("/fertilizer/response/delete", (req, res) => {
    FertilizerResponse.deleteResponse(req, res);
})
app.get("/fertilizer/response", (req, res) => {
    //?fertilizerId=
    FertilizerResponse.getAllResponses(req, res)
})
// app.get('fertilizer/response', (req, res) => {
//     //?fertilizerId
//     Fertilizer.getResponseById(req, res);
// });


//weather
app.get('/getweather', (req, res) => {
    console.log('getWeather api calling....');
    Weather.getWeather(req, res);
});


/* crop routes */

app.post('/crop/add', upload.any(), (req, res) => {
    CropData.AddCropData(req, res);
})
app.get("/crop/all", (req, res) => {
    CropData.getAllCrops(req, res);
})
app.post("/crop/farmer", (req, res) => {
    CropData.getFarmerCrop(req, res)
})
app.put("/crop/update", upload.any(), (req, res) => {
    CropData.updateCrop(req, res);
})
app.delete("/crop/delete", (req, res) => {
    CropData.deleteCropData(req, res);
})

/* crop routes */






//private Messages

app.get('/privateMessage/conversation/:conversationId', (req, res) => {
    PrivateMessage.getConversation(req, res);
})

app.get("/allusers/", (req, res) => {
    User.getAllUser(req, res);
});

//machine
app.post("/machine/add", upload.any(), (req, res) => {
    Machine.addMachine(req, res);
});
app.put("/machine/update", upload.any(), (req, res) => {
    Machine.updateMachine(req, res);
});
app.delete("/machine/delete", (req, res) => {
    Machine.deleteMachine(req, res);
});
app.get("/machine/all", (req, res) => {
    Machine.getAllMachines(req, res);
});
app.get("/machine", (req, res) => {
    //?machineId=
    Machine.getMachineById(req, res);
});
//machine response
app.post("/machine/response/add", (req, res) => {
    MachineResponse.addResponse(req, res);
})
app.put("/machine/response/update", (req, res) => {
    MachineResponse.updateResponse(req, res);
});
app.delete("/machine/response/delete", (req, res) => {
    MachineResponse.deleteResponse(req, res);
})
app.get("/machine/response", (req, res) => {
    //?machineId=
    MachineResponse.getAllResponses(req, res)
})



//pesticide
app.post("/pesticide/add", upload.any(), (req, res) => {
    Pesticide.addPesticide(req, res);
});
app.put("/pesticide/update", upload.any(), (req, res) => {
    Pesticide.updatePesticide(req, res);
});
app.delete("/pesticide/delete", (req, res) => {
    Pesticide.deletePesiticide(req, res);
});
app.get("/pesticide/all", (req, res) => {
    Pesticide.getAllPesticides(req, res);
});
app.get("/pesticide", (req, res) => {
    //?pesticideId=
    Pesticide.getPesticideById(req, res);
});



//pesticide response
app.post("/pesticide/response/add", (req, res) => {
    PesticideResponse.addResponse(req, res);
})
app.put("/pesticide/response/update", (req, res) => {
    PesticideResponse.updateResponse(req, res);
});
app.delete("/pesticide/response/delete", (req, res) => {
    PesticideResponse.deleteResponse(req, res);
})
app.get("/pesticide/response", (req, res) => {
    //?pesticideId=
    PesticideResponse.getAllResponses(req, res)
})


io.on('connection', (socket) => {
    socket.on('message', (data) => {
        PrivateMessage.privateMessage(data, io);
    });
    console.log('socket io is connected');
});


server.listen(app.get('port'), () => {
    console.log('server is running on port 8080');
});