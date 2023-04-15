const Request = require("../model/Request");

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
    { upsert: true, returnNewDocument: true }
  );
  return update;
};

const deleteRequest = async (req, res) => {
  const update = await Request.findOneAndDelete({ unid: req.params.id });
  return update;
};

// const createRequest = (req, res) => {
//   const request = new Request({
//     // model data goes here
//     // title: req.body.title,
//     // description: req.body.description,
//     // completed: req.body.completed,
//   });

//   request.save((err, request) => {
//     if (err) {
//       res.send(err);
//     }
//     res.json(request);
//   });
// };

module.exports = {
  getRequests,
  updateRequest,
  deleteRequest,
  //   createRequest,
};
