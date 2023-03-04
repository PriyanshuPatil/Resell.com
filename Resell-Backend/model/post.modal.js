const mongoose = require("mongoose");
const postSchema = mongoose.Schema(
  {
    brand_name: { type: String, required: true },
    year_purchase: { type: String, required: true },
    physical_condition: { type: String, required: true },
    ad_tital: { type: String, required: true },
    price: { type: String, required: true },
    mobile_number: { type: String, required: true },
    email_id: { type: String, required: true },
    pincode: { type: String, required: true },
    you_are: { type: String, required: true },
    url: { type: String, required: true }
  },
  { versionKey: false }
);

const postModel = mongoose.model("resell_post", postSchema);
module.exports = { postModel };

