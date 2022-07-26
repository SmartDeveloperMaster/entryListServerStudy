const express = require("express");
const { visitorModel } = require("../models/visitor");

const apiRouter = express.Router();

apiRouter.get("/", (req, res) => {
  res.sendFile(__dirname + "/page-2.html");
});

apiRouter.post("/", (req, res) => {
  const {
    visitorName,
    visitorPhoneNumber,
    visitorDivision,
    visitorReason,
    temp,
  } = req.body;
  visitorModel
    .create({
      visitorName,
      visitorPhoneNumber,
      visitorDivision,
      visitorReason,
      temp,
    })
    .then((e) => {
      res.send(e);
    })
    .catch((data) => {
      console.log(data);
      res.json(data);
    });
});

module.exports = apiRouter;
