const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const userSchema = new Schema(
  {
    firstName: { type: String },
    description: { type: String },
    avatar: {
      type: String,
      default: "https://media.giphy.com/media/QvvtwToKIUUpWXDPK6/giphy.gif"
    }

  },
  { timestamps: true }
)


const User = mongoose.model("User", userSchema)
module.exports = User