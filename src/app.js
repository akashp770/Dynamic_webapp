const express = require("express");
const hbs = require("hbs");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const detail = require("./models/detail.js");
const slider = require("./models/slider.js");
const service = require("./models/service.js");

const routes = require("./routes/main.js");

// use of statics  --------/static/css/style.css
app.use("/static", express.static("public"));

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use("", routes);

app.get("/", (req, res) => {
  res.send("it is working");
});

//db connection
mongoose.connect("mongodb://localhost/Dynamic_web", () => {
  console.log("db connected");

  //Service

  // service.create([
  //   {
  //     icon: "fa-brands fa-accusoft",
  //     title: "Provide best Courses",
  //     description:
  //       "We provide courses that help our tutee in learning and palacement.",
  //     linkText: "Check",
  //     link: "http://www.google.com",
  //   },
  //   {
  //     icon: "fa-brands fa-affiliatetheme",
  //     title: "Learn Projects",
  //     description:
  //       "We provide courses that help our tutee in learning and palacement.",
  //     linkText: "Learn",
  //     link: "http://www.google.com",
  //   },
  //   {
  //     icon: "fa-brands fa-affiliatetheme",
  //     title: "Learn Projects",
  //     description:
  //       "We provide courses that help our tutee in learning and palacement.",
  //     linkText: "Learn",
  //     link: "http://www.google.com",
  //   },
  // ]);

  //Slider

  // slider.create([
  //   {
  //     title: "Learn Java Programming",
  //     subTitle: "Java is one of the most popular programming language.",
  //     imageUrl: "/static/images/p2.jpg",
  //   },
  //   {
  //     title: "Learn JavaScript",
  //     subTitle: "JavaScript is one of the most frequently use  language.",
  //     imageUrl: "/static/images/p4.jpg",
  //   },
  //   {
  //     title: "Learn Nodejs",
  //     subTitle: "Nodejs is Runtime Environment",
  //     imageUrl: "/static/images/p4.jpg",
  //   },
  // ]);

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
