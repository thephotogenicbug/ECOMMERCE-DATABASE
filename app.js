const express = require("express");
const app = express();
const errorMiddleware = require("./middleware/error");
const cookieParser = require("cookie-parser");

app.use(express.json());
app.use(cookieParser());

//Route imports
const product = require("./routes/productRoute");
app.use("/api/v1", product);
const user = require("./routes/userRoute");
app.use("/api/v1", user);

//middleware for error
app.use(errorMiddleware);

module.exports = app;
