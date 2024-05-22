const mongoose = require("mongoose");

const Formulaire = mongoose.model("Formulaire", {
  iduser: {
    type: String,
  },
  name: {
    type: String,
  },
  lastname: {
    type: String,
  },
  phone: {
    type: String,
  },
  message: {
    type: String,
  },
  Monday: {
    type: String,
  },
  Tuesday: {
    type: String,
  },
  Wednesday: {
    type: String,
  },
  Thursday: {
    type: String,
  },
  Friday: {
    type: String,
  },
  Saturday: {
    type: String,
  },
  Sunday: {
    type: String,
  },
});
module.exports = Formulaire;
