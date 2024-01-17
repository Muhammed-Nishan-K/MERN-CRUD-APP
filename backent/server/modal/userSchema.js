import mongoose from "mongoose";

const schema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  pass: String
});

const UserDb = mongoose.model("userdb", schema);

export default UserDb;