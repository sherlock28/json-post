const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const app = express();
app.set("port", process.env.PORT || 3100);

// middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// routes
app.use("/posts", require("./routes"));

module.exports = app;
