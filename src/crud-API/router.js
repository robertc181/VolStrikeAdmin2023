var path = require("path");

const {
  getRequests,
  updateRequest,
  deleteRequest,
} = require("./controllers/request");

const router = require("express").Router();

// router.get("/", (req, res) => {
//   res.send("Let's build a CRUD API!");
// });

router.get("/", (req, res) =>
  res.sendFile(path.resolve("./dist/voluntarystrikeoffadmin/index.html"))
);

router.get("/requests", async (req, res) => {
  const allRecs = await getRequests();
  res.status(200).send({
    status: "Success",
    data: allRecs,
  });
});

router.put("/request/:id", async (rec, res) => {
  const updated = await updateRequest(rec, res);
  res.status(200).send({
    status: "Success",
    data: updated,
  });
});

router.delete("/request/:id", async (rec, res) => {
  const deleted = await deleteRequest(rec, res);
  res.status(200).send({
    status: "Success",
    data: deleted,
  });
});

module.exports = router;
