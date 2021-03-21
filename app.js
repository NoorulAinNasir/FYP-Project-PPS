const express = require("express");
const bodyparser = require("body-parser");
const mongoose = require("mongoose");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../../public");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});

const upload = multer({ storage: storage });

require("dotenv").config();

const authen = require("./mongoose");

const app = express();

app.use(bodyparser.json());

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
app.post("/uploadFile", upload.single("file"), authen.uploadFile);
app.get("/gettingFile", authen.getFile);
app.get("/gettingHTML", authen.getHTML);
app.get("/word", authen.getWord); //app.get("/word/", authen.getWord);

app.patch("/confirmEmail", authen.confirmEmail);
app.patch("/confirmWorksheets", authen.confirmWorksheets);
app.patch("/disapprovedWorksheets", authen.disapprovedWorksheets);
app.delete("/deleteWorksheets", authen.deleteWorksheets);

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
