//const express = require("express");

const signupModel = require("./models/signup-models");
const spellModel = require("./models/spell-model");
const worksheetModel = require("./models/worksheet-model");
const fileModel = require("./models/file-model");
const { sendConfirmationEmail } = require("./mailer");
//const { validate } = require("./models/signup-models");
const signup = async (req, res, next) => {
  const { name, email, password, role } = req.body;
  let existingUser;
  try {
    existingUser = await signupModel.findOne({ email: email });
  } catch (err) {
    return res.status(500).send("Logging in failed, please try again later");
  }
  if (existingUser) {
    return res.status(422).send({ err: "user exists already", status: "422" });
  }

  if (!existingUser) {
    const createdUser = new signupModel({
      name,
      email,
      password,
      role,
    });

    const result = await createdUser.save();
    res.status(201).json({ email: result.email, status: 201 });
    sendConfirmationEmail({ userName: result.name, userEmail: result.email });
  }
};

const confirmEmail = async (req, res, next) => {
  const { email, Validate } = req.body;
  console.log(email);

  console.log(Validate);
  let confirmUser;

  try {
    confirmUser = await signupModel.findOneAndUpdate(
      { email: email },
      { $set: { isValidated: Validate } },
      {
        new: true,
      }
    );
    if (confirmUser) {
      console.log("sdfsf ", confirmUser);
      return res.json({ validated: true });
    }
  } catch (err) {
    return res.status(500).send("Logging in failed, please try again later");
  }
};

const login = async (req, res, next) => {
  const { email, password } = req.body;
  // console.log(!!Validate);
  let users;
  try {
    users = await signupModel.findOne({ email: email });
  } catch (err) {
    return res.status(500).send("Logging in failed, please try again later");
  }

  if (!users || users.password !== password || users.isValidated !== true) {
    return res.status(401).send({ err: "Invalid User Input", status: "401" });
  }
  if (email === "admin@gmail.com" && password === "admin123") {
    return res.json({ role: users.role });
  }

  if (users && users.password === password) {
    return res.json({ role: users.role, name: users.name, email: users.email });
  }
};

const gmailLogin = async (req, res, next) => {
  const { email } = req.body;
  let users;
  try {
    users = await signupModel.findOne({ email: email });
  } catch (err) {
    return res.status(500).send("Logging in failed, please try again later");
  }

  if (!users) {
    return res.status(401).send({ err: "invalid user account", status: "401" });
  }
  if (email === "admin@gmail.com") {
    return res.json({ role: users.role });
  }

  if (users) {
    res.json({ role: users.role, name: users.name });
  }
};

const spellBeeAdmin = async (req, res, next) => {
  const { spell, description, grade, level } = req.body;
  let sp;
  try {
    sp = await spellModel.findOne({ spell: spell });
  } catch (err) {
    return res.status(500).send("Logging in failed, please try again later");
  }
  if (sp) {
    return res.status(422).send({ err: "user exists already", status: "422" });
  }

  if (!sp) {
    const createdWord = new spellModel({
      spell,
      description,
      grade,
      level,
    });

    const result = await createdWord.save();

    res.status(201).json({ result: result });
  }
};

const getWord = async (req, res, next) => {
  //console.log("responding");
  const query = req.query;
  // console.log(" from query " + query.level);
  // console.log(" from query grade " + query.grade);
  let text;
  try {
    text = await spellModel.find({}, "spell level grade description");
  } catch (err) {
    return res.status(500).send("Logging in failed, please try again later");
  }
  if (!text) {
    return res.status(401).send({ err: "can not match words", status: "401" });
  }
  const level = text
    .filter((l) => l.level === query.level)
    .filter((g) => g.grade === query.grade);
  console.log("from level  " + level);

  if (text) {
    // res.json({ text: text.map((t) => t.toObject({ getters: true })) });
    return res.status(200).send({
      text: level.map((t) => t.spell),
      description: level.map((t) => t.description),
    });
  }
};
const matchWord = async (req, res, next) => {
  const { spell } = req.body;
  let pls;
  try {
    pls = await spellModel.findOne({ spell: spell });
  } catch (err) {
    return res.status(500).send("Logging in failed, please try again later");
  }
  if (!pls) {
    return res.status(401).json({ err: "Spellings do not match" });
  }
  if (pls) {
    return res.json({ spell: pls.spell });
  }
};

const savingHTML = async (req, res, next) => {
  const {
    html,
    type,
    inp1,
    inp2,
    inp3,
    inp4,
    inp5,
    code,
    creator,
    title,
  } = req.body;

  const createdHTML = new worksheetModel({
    html,
    code,
    type,
    inp1,
    inp2,
    inp3,
    inp4,
    inp5,
    creator,
    title,
  });

  const result = await createdHTML.save();

  res.status(201).json({ result: result.code });
};

const getHTML = async (req, res, next) => {
  let ws;
  let ws_type;

  try {
    ws = await worksheetModel.find(
      {},
      "html code type approved disapproved creator title"
    );
  } catch (err) {
    return res.status(500).send("Logging in failed, please try again later");
  }

  //for test showing worksheets//
  if (req.query.type === "test worksheet" && req.query.code) {
    ws_type = ws.filter(
      (w) => w.code === req.query.code && w.approved === true
    );
    return res.status(200).send({
      ws: ws_type.map((w) => w.html),
      code: ws_type.map((w) => w.code),
    });
  }

  //for showing practice worksheets//
  if (req.query.type === "practice worksheet") {
    ws_type = ws.filter(
      (w) => w.type === req.query.type && w.approved === true
    );
    return res.status(200).send({
      ws: ws_type.map((w) => w.html),
      code: ws_type.map((w) => w.code),
    });
  }

  ////////FOR TEACHER'S APPROVED MY_WORKSHEETS////
  if (ws && req.query.creator && req.query.myWorksheets) {
    ws_type = ws.filter(
      (w) =>
        w.approved === true &&
        w.creator === req.query.creator &&
        w.disapproved === "awaiting"
    );
    if (ws_type.length === 0) {
      return res.json({ err: "NO WORKSHEET AVAILABLE", status: "404" });
    }
    return res.status(200).send({
      ws: ws_type.map((w) => w.html),
      code: ws_type.map((w) => w.code),
      status: ws_type.map((w) => w.approved),
    });
  }

  ////////FOR WORKSHEETS HISTORY/////////
  if (ws && req.query.show && req.query.creator) {
    ws_type = ws.filter(
      (w) =>
        (w.disapproved === "disapproved" && w.approved === false) ||
        (w.disapproved === "awaiting" && w.approved === true)
    );
    console.log(ws_type.length);
    if (ws_type.length === 0) {
      return res.json({ err: "NO HISTORY AVAILABLE", status: "404" });
    }
    return res.status(200).send({
      ws: ws_type.map((w) => w.html),
      code: ws_type.map((w) => w.code),
      worksheets: ws_type,
    });
  }

  ////For showing worksheets to admin for approval//////
  if (ws) {
    ws_type = ws.filter(
      (w) => w.approved === false && w.disapproved === "awaiting"
    );
    console.log(req.query.show, "lkjjjl");
    if (ws_type.length === 0) {
      return res.json({ err: "NO WORKSHEETS AVAILABLE", status: "404" });
    }

    return res.status(200).send({
      worksheets: ws_type,
      ws: ws_type.map((w) => w.html),
      code: ws_type.map((w) => w.code),
    });
  }
};

const matchStudentResponse = async (req, res, next) => {
  const { inp1, inp2, inp3, inp4, inp5, searchId } = req.body;

  let correctAns;
  let count = 0;
  try {
    correctAns = await worksheetModel.findOne({ code: searchId });
  } catch (err) {
    return res.status(500).send("Logging in failed, please try again later");
  }
  if (!correctAns) {
    return res.status(401).json({ err: "Spellings do not match" });
  }
  if (correctAns) {
    if (inp1 === correctAns.inp1) {
      count = count + 1;
    }
    if (inp2 === correctAns.inp2) {
      count = count + 1;
    }
    if (inp3 === correctAns.inp3) {
      count = count + 1;
    }
    if (inp4 === correctAns.inp4) {
      count = count + 1;
    }
    if (inp5 === correctAns.inp5) {
      count = count + 1;
    }
    res.send({
      score: count,
    });
  }
};

const confirmWorksheets = async (req, res, next) => {
  const { searchId } = req.body;
  console.log(searchId);
  let approvedWS;

  try {
    approvedWS = await worksheetModel.findOneAndUpdate(
      { code: searchId },
      { $set: { approved: true } },
      {
        new: true,
      }
    );
    if (approvedWS) {
      return res.json({ approvedWS });
    }
  } catch (err) {
    return res.status(500).send("Something Went Wrong");
  }
};

const disapprovedWorksheets = async (req, res, next) => {
  const { searchId } = req.body;
  console.log(searchId);
  let approvedWS;

  try {
    approvedWS = await worksheetModel.findOneAndUpdate(
      { code: searchId },
      { $set: { disapproved: "disapproved" } },
      {
        new: true,
      }
    );
    if (approvedWS) {
      return res.json({ approvedWS });
    }
  } catch (err) {
    return res.status(500).send("Something Went Wrong");
  }
};

const deleteWorksheets = async (req, res, next) => {
  const { searchId } = req.body;
  console.log(searchId);
  let approvedWS;

  try {
    approvedWS = await worksheetModel.findOneAndDelete({ code: searchId });
    if (approvedWS) {
      return res.json({ deleted: "deleted" });
    }
    if (approvedWS.length === 0) {
      return res.json({ deleted: "ALL DELETED" });
    }
  } catch (err) {
    return res.status(500).send("Logging in failed, please try again later");
  }
};

const uploadFile = async (req, res, next) => {
  console.log("file is ", req.file.path, req.body.title);
  const fileName = req.file.filename;
  const createdFile = new fileModel({
    uploadedFile: fileName,
    title: req.body.title,
  });

  const result = await createdFile.save();
  res.status(200).send({ result });
};
//   const fs = require("fs");

//   const path = "../../public/1615983254061context-2.JPG";

//   try {
//     console.log(`deleted file is ${path}`);
//     fs.unlinkSync(path);
//     //file removed
//   } catch (err) {
//     console.error(err);
//   }

const getFile = async (req, res, next) => {
  let notes;

  try {
    notes = await fileModel.find({}, "uploadedFile");
    if (notes) return res.send({ notes });
  } catch (err) {
    return res.status(500).send("Something Went Wrong");
  }
};

exports.signup = signup;
exports.confirmEmail = confirmEmail;
exports.login = login;
exports.gmailLogin = gmailLogin;
exports.spellBeeAdmin = spellBeeAdmin;
exports.matchWord = matchWord;
exports.getWord = getWord;
exports.savingHTML = savingHTML;
exports.getHTML = getHTML;
exports.matchStudentResponse = matchStudentResponse;
exports.confirmWorksheets = confirmWorksheets;
exports.disapprovedWorksheets = disapprovedWorksheets;
exports.deleteWorksheets = deleteWorksheets;
exports.uploadFile = uploadFile;
exports.getFile = getFile;
