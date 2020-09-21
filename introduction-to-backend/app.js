const express = require("express");
const app = express();

//Set view engine
app.set("view engine", "ejs");

// Use Pubic directory
app.use(express.static("public"));

// Routes
app.get("/", (req, res) => {
  res.render("home");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/contact", (req, res) => {
  res.render("contact");
});
app.get("/create-post", (req, res) => {
  res.render("create-post");
});
app.get("/post", (req, res) => {
  res.render("single-post");
});

app.get("*", (req, res) => {
  res.render("404");
});

// PORT
app.listen(5000, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("App Started in Port 5000");
  }
});
