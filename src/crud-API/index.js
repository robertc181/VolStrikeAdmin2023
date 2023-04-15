const express = require("express");
const router = require("./router");
const mongoose = require("mongoose");
const cors = require("cors");

const PORT = 8000;

const app = express();
var CONNECTION_URL =
  "mongodb+srv://strike_off_admin:9nZswGiDOBZvej55@cluster0.sx8yktf.mongodb.net/?retryWrites=true&w=majority";

mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: "strike_offs",
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(router);

app.listen(PORT, async () => {
  console.log(`server up on port ${PORT}`);
});
