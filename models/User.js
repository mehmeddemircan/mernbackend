const mongoose = require("mongoose"); // Erase if already required

// Declare the Schema of the Mongo model
const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    profilePicture: {
      type: String,
    },

    // mobile:{
    //     type:String,
    //     required:true,
    //     unique:true,
    // },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
