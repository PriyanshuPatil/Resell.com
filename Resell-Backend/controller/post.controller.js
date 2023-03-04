const { postModel } = require("../model/post.modal");

const getPost = async (req, res) => {
    try {
        const postData = await postModel.find()
        if (postData) {
          res.send(postData);
        } else {
          res.status(404).send({ msg: "Post Not Found" });
        }
      } catch (err) {
        res.status(400).send({ msg: err.message });
      }
};

const getSinglePost = async (req, res) => {
  const id = req.params.id;
  try {
    const Postdata = await postModel.findById(id);
    if (Postdata) {
      res.send(Postdata);
    } else {
      res.status(404).send({ msg: "Item not found" });
    }
  } catch (err) {
    res.status(400).send({ msg: err.message });
  }
};

const updatePost= async (req, res) => {
  const id = req.params.id;
  try {
    let productdata = await postModel.findByIdAndUpdate(
      { _id: id },
      req.body
    );
    res.send({ msg: "Post Succesfully Updated" });
  } catch (err) {
    res.status(400).send({ msg: err.message });
  }
};

const addPost= async (req, res) => {
  try {
    const newuser = new postModel(req.body);
    await newuser.save();
    res.send({ msg: "Post Succesfully added" });
  } catch (err) {
    res.status(400).send({ msg: err.message });
  }
};

const deletePost = async (req, res) => {
  const id = req.params.id;
  try {
    let productdata = await postModel.findByIdAndDelete(id);
    res.send({ msg: "Post Succesfully deleted" });
  } catch (err) {
    res.status(400).send({ msg: err.message });
  }
};

module.exports = {
  getPost,
  getSinglePost,
  updatePost,
  addPost,
  deletePost,
};