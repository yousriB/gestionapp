const express = require("express");
const router = express.Router();

const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

router.post("/register", (req, res) => {
  data = req.body;
  user = new User(data);

  salt = bcrypt.genSaltSync(10); //generation un code de 10 caractere
  user.password = bcrypt.hashSync(data.password, salt); //crypte the password by using the salt

  user
    .save()
    .then((saved) => {
      res.status(200).send(saved);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

// router.post("/login", (req, res) => {
//   let data = req.body;
//   User.findOne({ email: data.email })
//     .then((user) => {
//       let valid = bcrypt.compareSync(data.password, user.password); //comparison entre le password de user find by email and the password from data(frontend)
//       if (!valid) {
//         res.send("email or password invalid");
//       } else {
//         let payload = {
//           _id: user._id,
//           email: user.email,
//           fullname: user.name + " " + user.lastname,
//         };
//         let tokenu = jwt.sign(payload, "123456789");
//         res.send({ mytoken: tokenu });
//       }
//     })
//     .catch((err) => {
//       res.status(400).send(err);
//     });
// });

router.post("/login", (req, res) => {
  let data = req.body;
  User.findOne({ email: data.email })
    .then((user) => {
      if (!user) {
        // If user is not found
        res.status(400).json({ error: "Email or password is invalid" });
        return;
      }
      let valid = bcrypt.compareSync(data.password, user.password);
      if (!valid) {
        // If password is incorrect
        res.status(400).json({ error: "Email or password is invalid" });
      } else {
        let payload = {
          _id: user._id,
          email: user.email,
          fullname: user.name + " " + user.lastname,
        };
        let tokenu = jwt.sign(payload, "123456789");
        res.status(200).json({ mytoken: tokenu });
      }
    })
    .catch((err) => {
      res.status(500).json({ error: "An internal error occurred" });
    });
});

router.get("/all", (req, res) => {
  User.find({})
    .then((users) => {
      res.status(200).send(users);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

router.get("/getbyid/:id", (req, res) => {
  let id = req.params.id;
  User.findOne({ _id: id })
    .then((users) => {
      res.status(200).send(users);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

module.exports = router;
