const express = require("express");
const app = express();
const errorMiddleware = require("./middleware/error");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
const path = require("path");

app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload());

//Route imports
const product = require("./routes/productRoute");
app.use("/api/v1", product);
const user = require("./routes/userRoute");
app.use("/api/v1", user);
const order = require("./routes/orderRoute");
app.use("/api/v1", order);

//middleware for error
app.use(errorMiddleware);

module.exports = app;
