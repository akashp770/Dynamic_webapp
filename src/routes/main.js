const express = require("express");

const detail = require("../models/detail.js");
const slider = require("../models/slider.js");

const routes = express.Router();

routes.get("/", async (req, res) => {
  const details = await detail.findOne({ _id: "63d7898c9cf54db973d396e9" });
  const slides = await slider.find();

  // console.log(details);
  // console.log(slides);

  res.render("index", {
    details: details,
    slides: slides,
  });
});

routes.get("/gallery", async (req, res) => {
  const details = await detail.findOne({ _id: "63d7898c9cf54db973d396e9" });

  res.render("gallery", {
    details: details,
  });
});

routes.get("/contactus", async (req, res) => {
  const details = await detail.findOne({ _id: "63d7898c9cf54db973d396e9" });
  res.render("contactus", {
    details: details,
  });
});
module.exports = routes;
