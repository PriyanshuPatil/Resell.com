const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");
const { UserModel } = require("../model/user.modal");

const getUser = async (req, res) => {
  try {
    const user_Data = await UserModel.find();
    res.send(user_Data);
  } catch (err) {
    res.status(400).send({ msg: err.message });
  }
};

const getSingleUser = async (req, res) => {
  const id = req.params.id;
  //   console.log(id);
  try {
    const user_Data = await UserModel.findById(id);
    if (user_Data) {
      res.send(user_Data);
    } else {
      res.send({ msg: "Account is Not Present" });
    }
  } catch (err) {
    res.status(400).send({ msg: err.message });
  }
};

const updateUser = async (req, res) => {
  const id = req.params.id;
  try {
    const user_Data = await UserModel.findByIdAndUpdate(
      { _id: id },
      { ...req.body }
    );
    res.send({ msg: "User Details Succesfully Updated" });
  } catch (err) {
    res.status(400).send({ msg: err.message });
  }
};

const deleteUser = async (req, res) => {
  const id = req.params.id;
  try {
    const user_Data = await UserModel.findByIdAndDelete(id);
    res.send({ msg: "User Account Succesfully Deleted" });
  } catch (err) {
    res.status(400).send({ msg: err.message });
  }
};

const register = async (req, res) => {
  try {
    let userdata = await UserModel.find({ email: req.body.email });
    if (userdata.length == 0) {
      bcrypt.hash(req.body.password, 5, async (err, hash) => {
        if (err) {
          //   console.log(err);
          res.status(400).send({ msg: "Error in password hashing" });
        } else {
          const newuser = new UserModel({ ...req.body, password: hash });
          await newuser.save();
          res.status(201).send({ msg: "User Succesfully Register" });
        }
      });
    } else {
      res.status(400).send({ msg: "User is allready present" });
    }
  } catch (err) {
    // console.log(err);
    res.status(400).send({ msg: "Invalid Credentials" });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    let userdata = await UserModel.find({ email });
    if (userdata.length > 0) {
      bcrypt.compare(password, userdata[0].password, (err, result) => {
        if (result) {
          const token = jwt.sign({ userId: userdata[0]._id }, "resell");
          res.send({ msg: "Login Succesfully", token: token });
        } else {
          res.status(400).send({ msg: "Password Is Wrong" });
        }
      });
    } else {
      res.status(404).send({ msg: "Email is not Registered" });
    }
  } catch (err) {
    res.status(400).send({ msg: err.message });
  }
};
module.exports = {
  getUser,
  getSingleUser,
  updateUser,
  deleteUser,
  register,
  login,
};
