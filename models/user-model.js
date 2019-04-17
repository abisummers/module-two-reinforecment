const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const userSchema = new Schema(
  {
    firstName: { type: String },
    description: { type: String },

  },
  { timestamps: true }
)


const User = mongoose.model("User", userSchema)
module.exports = User