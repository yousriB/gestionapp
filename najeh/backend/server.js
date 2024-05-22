const express = require("express");
const cors = require("cors");
const adminApi = require("./routers/admin");
const formulaireApi = require("./routers/formulaire");
const userApi = require("./routers/user");
const tablefinalApi = require("./routers/tablefinal");

require("./config/connect");

const app = express();

// Enable CORS for all routes
app.use(cors());

// Alternatively, specify allowed origins
// app.use(cors({ origin: ['http://localhost:4200'] }));

app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies

// Routes
app.use("/admin", adminApi);
app.use("/formulaire", formulaireApi);
app.use("/user", userApi);
app.use("/tablefinal", tablefinalApi);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong!");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
