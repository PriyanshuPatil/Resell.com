const jwt = require("jsonwebtoken");
const Authenticator = (req, res, next) => {
  const userToken = req.headers.authorization;

  if (userToken) {
    jwt.verify(userToken, "resell", (err, decoded) => {
      if (decoded) {
        req.body.userId = decoded.userId;
        next();
      } else {
        res.send({ msg: "Plz Login" });
      }
    });
  } else {
    res.send({ msg: "Plz Login" });
    
  }
};

module.exports = { Authenticator };