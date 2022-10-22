const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
app.use(bodyParser.json());

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect(
  "mongodb+srv://admin:admin@cluster0.dycul.mongodb.net/adminapi"
);

const userSchema = new mongoose.Schema({
  name: String,
  Email: String,
  Cell: Number,
  Age: Number,
  Password: String,
});

// name: name,
// email: email,
// phone: phone,
// age: age,
// password: password

const User = mongoose.model("User", userSchema);

app.get("/", function (req, res) {
  res.send("backend");
});

app.post("/addUser", async function (req, res) {
  const existUser = await User.findOne({ Email: req.body.email1 });
  console.log("Query Result.... ", existUser);
  if (existUser) {
    res.send({ message: "User already exist" });
  } else {
    const user = new User({
      name: req.body.name1,
      Email: req.body.email1,
      Cell: req.body.phone1,
      Age: req.body.age1,
      Password: req.body.password1,
    });
    user.save((err, data) => {
      console.log(err, data);
      if (err) throw err;
      else {
        res.send(data);
      }
    });
  }
});


app.get("/getAllUsers", async function (req, res) {
  res.set("Access-Control-Allow-Origin", "*");
  const found = await User.countDocuments({});
  const users = await User.find({})
  res.send({ count: found, Data: users });
});

app.listen(5000, function (req, res) {
  console.log("running on port: 5000");
});
