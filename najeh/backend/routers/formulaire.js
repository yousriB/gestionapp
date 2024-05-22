const express = require("express");
const router = express.Router();

const Formulaire = require("../models/formulaire");

router.post("/add", async (req, res) => {
  let data = req.body;
  formulaire = new Formulaire(data);
  try {
    const saved = await formulaire.save();
    res.status(200).send(saved);
  } catch (err) {
    res.status(400).send(err);
  }
});

router.get("/getbyiduser/:id", (req, res) => {
  let id = req.params.id;
  Formulaire.find({ iduser: id })
    .then((formulaire) => {
      res.status(200).send(formulaire);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

router.get("/all", (req, res) => {
  Formulaire.find({})
    .then((formulaire) => {
      res.status(200).send(formulaire);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

router.get("/getbyid/:id", (req, res) => {
  let id = req.params.id;
  Formulaire.findOne({ _id: id })
    .then((formulaire) => {
      res.status(200).send(formulaire);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

router.delete("/deleteall", (req, res) => {
  Formulaire.deleteMany({})
    .then(() => {
      res.status(200).send({ message: "All formulaires deleted successfully" });
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});


module.exports = router;
