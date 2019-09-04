const resize = require("../../libs/utility/imageprocessing");
const path = require("path");
const asyncQueue = require("async");

let imagerequest = async (req, res, next) => {
  let uploadedfilelist = [];
  let q = asyncQueue.queue(processImage, 20);

  if (!req.files) {
    return res.status(401).json({ error: "Please provide an image" });
  }
  try {   
  q.push(req.files, function(err, response) {
    if (err) {
      console.log(err);

      return res.status(400).json({ error: err });
    }
    uploadedfilelist.push(response);
  });

  return await q.drain(function() {
    q.drain = null;
    return res.status(200).json({ name: uploadedfilelist });
  });
}
  catch (err) {
    //todo log the error here
    return res.status(400).json({ error: err });
  }
};

async function processImage(task, callback) {
  const imagePath = path.join(__dirname, "/processed_images");
  const fileUpload = new resize(imagePath);
  const filename = await fileUpload.save(task.buffer);
  return filename;
}

module.exports = {
  imagerequest:imagerequest,
  processImage:processImage
}