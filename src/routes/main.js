const express = require("express");

const detail = require("../models/detail.js");
const service = require("../models/service.js");
const slider = require("../models/slider.js");

const routes = express.Router();

routes.get("/", async (req, res) => {
  const details = await detail.findOne({ _id: "63d7898c9cf54db973d396e9" });
  const slides = await slider.find();
  const services = await service.find();

  // console.log(details);
  // console.log(slides);
  // console.log(services);

  res.render("index", {
    details: details,
    slides: slides,
    services: services,
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
