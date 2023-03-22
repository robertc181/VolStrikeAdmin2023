var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
const { MongoClient } = require("mongodb");

var app = express();
app.use(bodyParser.json());

var distDir = __dirname + "/dist/voluntarystrikeoffadmin/";
app.use(express.static(distDir));

var CONNECTION_URL =
  "mongodb+srv://strike_off_admin:g9p0xff8S5ThqFZf@cluster0.sx8yktf.mongodb.net/?retryWrites=true&w=majority&useNewUrlParser=true&useUnifiedTopology=true";
const client = new MongoClient(CONNECTION_URL);

var server = app.listen(process.env.PORT || 8081, function () {
  var port = server.address().port;
  console.log("App now running on port", port);
});

app.get("/", (req, res) =>
  res.sendFile(path.resolve("dist/voluntarystrikeoffadmin/index.html"))
);

function handleError(res, reason, message, code) {
  console.log("ERROR: " + reason);
  res.status(code || 500).json({ error: message });
}

app.get("/api/requests", function (req, res) {
  (async () => {
    docs = await getRequests();
    res.status(200).json(docs);
  })();
});

app.put("/api/request/:id", function (req, res) {
  (async () => {
    success = await updateRequest(req._id);
    if (success.modifiedCount === 1) {
      res.status(200);
    } else {
      handleError(res, err.message, "Failed to update request.");
    }
  })();
});

app.delete("/api/request/:id", function (req, res) {
  (async () => {
    success = await deleteRequest(req._id);
    if (success.deletedCount === 1) {
      res.status(200);
    } else {
      handleError(res, err.message, "Failed to delete request.");
    }
  })();
});

async function getRequests() {
  let recs = [];
  try {
    await client.connect();
    const db = client.db("strike_offs");
    const col = db.collection("requests");

    const query = {};

    const options = {};

    const cursor = col.find(query, options);

    // print a message if no documents were found
    if ((await col.countDocuments(query, options)) === 0) {
      console.log("No documents found!");
    }
    // replace console.dir with your callback to access individual elements
    await cursor.forEach((rec) => recs.push(rec));
  } catch (err) {
    console.log(err.stack);
  } finally {
    await client.close();
    return recs;
  }
}

async function updateRequest(id) {
  try {
    await client.connect();
    const db = client.db("strike_offs");
    const col = db.collection("requests");

    const resp = col.updateOne({ _id: id }, { $set: { processed: true } });
    return resp;
  } catch (err) {
    console.log(err.stack);
  } finally {
    await client.close();
  }
}

async function deleteRequest(id) {
  try {
    await client.connect();
    const db = client.db("strike_offs");
    const col = db.collection("requests");

    const resp = col.remove({ _id: id }, true);
    return resp;
  } catch (err) {
    console.log(err.stack);
  } finally {
    await client.close();
  }
}
