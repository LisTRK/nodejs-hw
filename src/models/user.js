import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    email: {type: String, unique: true, required: true, trim: true},
    password: { type: String, required: true, minlength: 8},
},
{
    timestamps: true,
    versionKey: false
}
);

userSchema.methods.toJSON = function () {
  const obj = this.toObject();
  delete obj.password;
  return obj;
};

export const User = mongoose.model("User", userSchema);