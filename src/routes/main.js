const express = require("express");

const detail = require("../models/detail.js");
const service = require("../models/service.js");
const slider = require("../models/slider.js");
const contact = require("../models/contact.js");
const banner = require("../models/banner");

const routes = express.Router();

routes.get("/", async (req, res) => {
  const details = await detail.findOne({ _id: "63d7898c9cf54db973d396e9" });
  const slides = await slider.find();
  const services = await service.find();
  const bannerr = await banner.find();

  // console.log(details);
  // console.log(slides);
  // console.log(services);

  res.render("index", {
    details: details,
    slides: slides,
    services: services,
    bannerr: bannerr,
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

routes.post("/process-contact-form", async (req, res) => {
  console.log("Submmited");
  console.log(req.body);

  //Save query data to db
  try {
    const data = await contact.create(req.body);
    console.log(data);
    res.redirect("/");
  } catch (e) {
    console.log(e);
    res.redirect("/");
  }
});
module.exports = routes;
