const express = require("express");
const router = express.Router();

const Admin = require("../models/admin");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

router.post("/register", (req, res) => {
  data = req.body;
  admin = new Admin(data);

  salt = bcrypt.genSaltSync(10); //generation un code de 10 caractere
  admin.password = bcrypt.hashSync(data.password, salt); //crypte the password by using the salt

  admin
    .save()
    .then((saved) => {
      res.status(200).send(saved);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

router.post("/login", (req, res) => {
  let data = req.body;
  Admin.findOne({ email: data.email })
    .then((admin) => {
      let valid = bcrypt.compareSync(data.password, admin.password); //comparison entre le password de admin find by email and the password from data(frontend)
      if (!valid) {
        res.send("email or password invalid");
      } else {
        let payload = {
          _id: admin._id,
          email: admin.email,
          fullname: admin.name + " " + admin.lastname,
        };
        let token = jwt.sign(payload, "123456789");
        res.send({ mytoken: token });
      }
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

// New route to extract data from token
router.get("/data-from-token", (req, res) => {
  const token = req.headers["authorization"];
  if (!token) {
    return res.status(401).send("Access Denied");
  }

  try {
    const verified = jwt.verify(token, "123456789");
    res.send(verified);
  } catch (err) {
    res.status(400).send("Invalid Token");
  }
});

module.exports = router;
