const mongoose = require("mongoose");
const usersSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    phone_number: { type: Number, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    gender: { type: String, required: false, default: "Male" },
    admin: { type: Boolean, required: false, default: false },
  },
  { versionKey: false }
);

const UserModel = mongoose.model("resell_user", usersSchema);
module.exports = { UserModel };
