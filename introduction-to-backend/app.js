const { urlencoded } = require("express");
const express = require("express");
const mongoose = require("mongoose");

const app = express();

//Set view engine
app.set("view engine", "ejs");

// Use body-parser
app.use(express.urlencoded({ extended: true }));

// Use Pubic directory
app.use(express.static("public"));

//Connect mongoose to mongodb
mongoose.connect("mongodb://localhost:27017/snapblog", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Create mongoose schema
const postSchema = mongoose.Schema({
  title: {
    type: String,
    // required: true,
  },
  imgUrl: {
    type: String,
    default:
      "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
  },
  content: {
    type: String,
    // required: true,
  },
  featured: {
    type: Boolean,
    default: false,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});

//Create mongoose model
const Post = mongoose.model("Post", postSchema);

// Routes
app.get("/", (req, res) => {
  Post.find({})
    .then((posts) => res.render("home", { posts: posts }))
    .catch((err) => console.log(err));
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
app.get("/single-post", (req, res) => {
  res.render("single-post");
});

// POST ROUTES
app.post("/create-post", (req, res) => {
  const newPost = new Post({
    title: req.body.title,
    imgUrl: req.body.img,
    content: req.body.content,
    featured: req.body.featured === "on" ? true : false,
  });

  newPost
    .save()
    .then((res) => console.log(res))
    .catch((err) => console.log(err));

  res.redirect("/");
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
