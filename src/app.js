const express = require("express");
const hbs = require("hbs");
const app = express();
const mongoose = require("mongoose");

const detail = require("./models/detail.js");
const routes = require("./routes/main.js");

// use of statics  --------/static/css/style.css
app.use("/static", express.static("public"));

app.use("", routes);

app.get("/", (req, res) => {
  res.send("it is working");
});

//db connection
mongoose.connect("mongodb://localhost/Dynamic_web", () => {
  console.log("db connected");
  // detail.create({
  //   brandName: "AP Solutions",
  //   brandIconUrl:
  //     "https://as2.ftcdn.net/v2/jpg/03/45/74/05/1000_F_345740545_7tquEHXVw4uVXdK3vvOQor1jf4Opurqr.jpg",
  //   links: [
  //     {
  //       label: "Home",
  //       url: "/",
  //     },
  //     {
  //       label: "Services",
  //       url: "/services",
  //     },
  //     {
  //       label: "Gallery",
  //       url: "./gallery",
  //     },
  //     {
  //       label: "Contact Us",
  //       url: "/contactus",
  //     },
  //     {
  //       label: "About Us",
  //       url: "/aboutus",
  //     },
  //   ],
  // });
});

//template hbs
app.set("view engine", "hbs");
app.set("views", "views");
hbs.registerPartials("views/partials");

app.listen(process.env.PORT | 3000, () => {
  console.log("done");
});
