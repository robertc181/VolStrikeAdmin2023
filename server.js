var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
const { MongoClient } = require("mongodb");
const MONGO_USERNAME = process.env.MONGO_USERNAME;
const MONGO_PWD = process.env.MONGO_PWD;
const expectedName = process.env.AdminUser;
const expectedPassword = process.env.AdminPwd;
// const expectedName = "h";
// const expectedPassword = "r";

const mongoose = require("mongoose");
// const cors = require("cors");

const PORT = 8081;

var app = express();
app.use(bodyParser.json());

var distDir = __dirname + "/dist/voluntarystrikeoffadmin/";
app.use(express.static(distDir));

var CONNECTION_URL =
  "mongodb+srv://strike_off_admin:9nZswGiDOBZvej55@cluster0.sx8yktf.mongodb.net/?retryWrites=true&w=majority";

mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: "strike_offs",
  })
  .then(() => {
    console.log("Connected to MongoDB.......");
  })
  .catch((err) => {
    console.log(err);
  });

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const Request = require("./request");

const getRequests = async (req, res) => {
  const allRecs = await Request.find();
  return allRecs;
};

const updateRequest = async (req, res) => {
  const update = await Request.findOneAndUpdate(
    { unid: req.params.id },
    {
      $set: {
        processed: true,
      },
    },
    { upsert: false }
  );
  return update;
};

const deleteRequest = async (req, res) => {
  const update = await Request.findOneAndDelete({ unid: req.params.id });
  return update;
};

app.listen(PORT, async () => {
  console.log(`server up on port....... ${PORT}`);
});

app.post("/login", (req, res) => {
  const { name, password } = req.body;

  if (name === expectedName && password === expectedPassword) {
    // if the name and password match the expected values, return success
    res.status(200).json({ valid: true });
  } else {
    // if the name and password do not match the expected values, return error
    res.status(401).json({ valid: false });
  }
});

app.get("/", (req, res) =>
  res.sendFile(path.resolve("dist/voluntarystrikeoffadmin/index.html"))
);

function handleError(res, message, code) {
  console.log("ERROR: " + message);
  res.status(code || 500).json({ error: message });
}

app.get("/read", async (req, res) => {
  console.log("read");
  const allRecs = await getRequests();
  res.status(200).send({
    status: "Success",
    data: allRecs,
  });
});

app.put("/update/:id", async (rec, res) => {
  console.log("update");
  const updated = await updateRequest(rec, res);
  res.status(200).send({
    status: "Success",
    data: updated,
  });
});

app.delete("/delete/:id", async (rec, res) => {
  console.log("delete");
  const deleted = await deleteRequest(rec, res);
  res.status(200).send({
    status: "Success",
    data: deleted,
  });
});

// ************************************************* Original code*******************************
// var CONNECTION_URL =
//   "mongodb+srv://" +
//   MONGO_USERNAME +
//   ":" +
//   MONGO_PWD +
//   "@cluster0.sx8yktf.mongodb.net/?retryWrites=true&w=majority&useNewUrlParser=true&useUnifiedTopology=true";
// var CONNECTION_URL =
//   "mongodb+srv://strike_off_admin:9nZswGiDOBZvej55@cluster0.sx8yktf.mongodb.net/?retryWrites=true&w=majority&useNewUrlParser=true&useUnifiedTopology=true";
// var CONNECTION_URL =
//   "mongodb+srv://strike_off_admin:9nZswGiDOBZvej55@cluster0.sx8yktf.mongodb.net/?retryWrites=true&w=majority";
// const client = new MongoClient(CONNECTION_URL);

// var server = app.listen(process.env.PORT || 8081, function () {
//   var port = server.address().port;
//   console.log("App now running on port", port);
// });

// app.post("/api/login", (req, res) => {
//   const { name, password } = req.body;

//   if (name === expectedName && password === expectedPassword) {
//     // if the name and password match the expected values, return success
//     res.status(200).json({ valid: true });
//   } else {
//     // if the name and password do not match the expected values, return error
//     res.status(401).json({ valid: false });
//   }
// });

// app.get("/", (req, res) =>
//   res.sendFile(path.resolve("dist/voluntarystrikeoffadmin/index.html"))
// );

// function handleError(res, message, code) {
//   console.log("ERROR: " + message);
//   res.status(code || 500).json({ error: message });
// }

// app.get("/api/read", function (req, res) {
//   (async () => {
//     docs = await getRequests();
//     res.status(200).json(docs);
//   })();
// });

// app.put("/api/update/:id", function (req, res) {
//   (async () => {
//     success = await updateRequest(req.body.id);
//     if (success.modifiedCount === 1) {
//       res.status(200);
//     } else {
//       handleError(res, "Failed to update request.");
//     }
//   })();
// });

// app.delete("/api/delete/:id", function (req, res) {
//   (async () => {
//     success = await deleteRequest(req.params.id);
//     if (success.deletedCount === 1) {
//       res.status(200);
//     } else {
//       handleError(res, "Failed to delete request.");
//     }
//   })();
// });

// async function getRequests() {
//   let recs = [];
//   try {
//     await client.connect();
//     const db = client.db("strike_offs");
//     const col = db.collection("requests");

//     const query = {};

//     const options = {};

//     const cursor = col.find(query, options);

//     // print a message if no documents were found
//     if ((await col.countDocuments(query, options)) === 0) {
//       console.log("No documents found!");
//     }
//     // replace console.dir with your callback to access individual elements
//     await cursor.forEach((rec) => recs.push(rec));
//   } catch (err) {
//     console.log("error getRequests");
//     console.log(err.stack);
//   } finally {
//     console.log("closing getRequests");
//     await client.close();
//     return recs;
//   }
// }

// async function updateRequest(id) {
//   try {
//     await client.connect();
//     const db = client.db("strike_offs");
//     const col = db.collection("requests");

//     const resp = await col.updateOne(
//       { unid: id },
//       { $set: { processed: true } }
//     );
//     return resp;
//   } catch (err) {
//     console.log("error updateRequest");
//     console.log(err.stack);
//   } finally {
//     console.log("closing updateRequest");
//     await client.close();
//   }
// }

// async function deleteRequest(id) {
//   try {
//     await client.connect();
//     const db = client.db("strike_offs");
//     const col = db.collection("requests");

//     const resp = await col.deleteOne({ unid: id }, true);
//     return resp;
//   } catch (err) {
//     console.log("error deleteRequest");
//     console.log(err.stack);
//   } finally {
//     console.log("closing deleteRequest");
//     await client.close();
//   }
// }
