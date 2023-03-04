const jwt = require("jsonwebtoken");
const { UserModel } = require("../model/user.modal");
const AdminRoleAuth = async (req, res, next) => {
  const token = req.headers.authorization;
  //   console.log(token);
  try {
    if (token) {
      jwt.verify(token, "clotheyard", async (err, decoded) => {
        if (decoded) {
          let user = await UserModel.findById(decoded.userId);
          if (user.admin) {
            next();
          } else {
            res.status(400).send({ msg: "You are not authorized" });
          }
        } else {
          res.status(400).send({ msg: "Plz Login" });
        }
      });
    } else {
      res.status(400).send({ msg: "Plz Login" });
    }
  } catch (error) {
    // console.log("hi");
    res.status(400).send({ msg: error.message });
  }
};

module.exports = {
  AdminRoleAuth,
};