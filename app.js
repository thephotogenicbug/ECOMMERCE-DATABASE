const express = require("express");
const app = express();
const errorMiddleware = require("./middleware/error");
const cookieParser = require("cookie-parser");
const cors = require("cors");

app.use(express.json());
app.use(cookieParser());
app.use(cors());

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
