const express = require("express");
const app = express();
let dotenv = require("dotenv");
dotenv.config({
  path: "./config.env",
});

const connectDB = require("./config/databaseConnection");
const PORT = process.env.PORT || 4000;
connectDB();

app.use(express.json());

app.get("/", (req, res, next) => {
  res.send("API Runnning");
});

app.use("/api/auth", require("./routes/auth"));

const server = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} `);
});
