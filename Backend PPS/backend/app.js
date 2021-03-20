const express = require("express");
const fileUpload = require("express-fileupload");
const bodyparser = require("body-parser");
const mongoose = require("mongoose");

const authen = require("./mongoose");
//.......................................
const multer = require("multer"); 
require ("dotenv").config(); 
// var path = require('path');
var fs = require('fs');  
// const fileModel = require("./models/file-model");  

//.......................................
const app = express();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../../public");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});



const upload = multer({ storage: storage });
app.use(bodyparser.json());
//app.use(fileUpload());  //yeh wali  is se opath oka masla ho raha tha??????hn hakwiwwwwuwwwwwwww k yeh shyd shaban k code mei tha hadd ho gai ahoooo hahahahahaha ab styling kr doo mei tb tk delete wala kr leti hannn okaa donechlo phrr bye bye tata allah haafizxo

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");
  next();
});

//app.use (expressValidator);
app.post("/signup", authen.signup);
app.post("/login", authen.login);
app.post("/gmailLogin", authen.gmailLogin);
app.post("/spell", authen.matchWord);
app.post("/admin/addWord", authen.spellBeeAdmin);
app.post("/savingHTML", authen.savingHTML);
app.post("/matchStudentResponse", authen.matchStudentResponse);
// app.post("/uploadFile", upload.single("productImage"), authen.uploadFile);
app.get("/gettingHTML", authen.getHTML);
app.get("/word", authen.getWord); //app.get("/word/", authen.getWord);

app.patch("/confirmEmail", authen.confirmEmail);
app.patch("/confirmWorksheets", authen.confirmWorksheets);
app.patch("/disapprovedWorksheets", authen.disapprovedWorksheets);
app.delete("/deleteWorksheets", authen.deleteWorksheets);

app.post("/uploadFile", upload.single("file"), authen.uploadFile);
app.get("/gettingFile", authen.getFile);

//.........................................................
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//       cb(null, 'filesSave');
//   },
//   filename: (req, file, cb) => {
//       console.log(file," ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,");
//       cb(null, Date.now() + path.extname(file.originalname));
//   }
// });

// const upload = multer({ storage: storage});

//       app.post ('/upload',  upload.single("image"), (req, res, next) => {
//       const file = req.file;
//       var rec = new uploadModel;
    
//     rec.img.data = fs.readFileSync(req.file.path);
//    rec.pathi=req.file.path;
   
//     rec.img.contentType = 'image/png';
//     rec.save((err, result) => {
//         console.log(result)

//         if (err) return console.log(err)
//         console.log('saved to database')
//         res.send(rec);
//     })
// });

// app.get('/record', function(req, res, next) {
// uploadModel.find().then(data => {
//   console.log(data,"......,,,,,........,,,,,................,,,,,,,,,..");
//       res.status(200).send({ data });
//   })
//       .catch(err => {
//           return res.status(500).send({
//               Message: 'Unable to get. Please Try later.',
//               err,
//           });
//       });
// });




// const multer = require("multer");











//.................................................
mongoose
  .connect("mongodb://localhost/PPS", {
    useNewUrlParser: true,
    useFindAndModify: false,
  })
  .then(() => {
    app.listen(5000);
    console.log("connected successfully");
  })
  .catch(() => {
    console.log("failed to connect");
  });
