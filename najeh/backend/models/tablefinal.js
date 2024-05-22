const mongoose = require("mongoose");

const tablefinalSchema = new mongoose.Schema({
  0: {
    day: { type: String, default: "Monday" },
    slot1: { type: String, default: "" },
    slot2: { type: String, default: "" },
    slot3: { type: String, default: "" },
  },
  1: {
    day: { type: String, default: "Tuesday" },
    slot1: { type: String, default: "" },
    slot2: { type: String, default: "" },
    slot3: { type: String, default: "" },
  },
  2: {
    day: { type: String, default: "Wednesday" },
    slot1: { type: String, default: "" },
    slot2: { type: String, default: "" },
    slot3: { type: String, default: "" },
  },
  3: {
    day: { type: String, default: "Thursday" },
    slot1: { type: String, default: "" },
    slot2: { type: String, default: "" },
    slot3: { type: String, default: "" },
  },
  4: {
    day: { type: String, default: "Friday" },
    slot1: { type: String, default: "" },
    slot2: { type: String, default: "" },
    slot3: { type: String, default: "" },
  },
  5: {
    day: { type: String, default: "Saturday" },
    slot1: { type: String, default: "" },
    slot2: { type: String, default: "" },
    slot3: { type: String, default: "" },
  },
  6: {
    day: { type: String, default: "Sunday" },
    slot1: { type: String, default: "" },
    slot2: { type: String, default: "" },
    slot3: { type: String, default: "" },
  },
});

const Tablefinal = mongoose.model("Tablefinal", tablefinalSchema);

module.exports = Tablefinal;
