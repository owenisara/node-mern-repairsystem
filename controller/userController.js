const User = require("../models/User");

exports.listUser = async (req, res) => {
  try {
    const listUser = await User.find({})
      .populate("department")
      .select("-password")
      .exec();
    res.send(listUser);
  } catch (err) {
    console.log(err);
    res.send("Server Error");
  }
};
// id => 64a69014a43d30a6e4c7a806
exports.readUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findOne({ _id: id })
      .populate("department")
      .select("-password -email -enabled -role -createdAt -updatedAt")
      .exec();
    res.send(user);
  } catch (err) {
    console.log(err);
    res.send("Server Error");
  }
};
exports.updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findOneAndUpdate({ _id: id }, req.body, {
      new: true,
    }).exec();
    res.send(user);
  } catch (err) {
    console.log(err);
    res.send("Server Error");
  }
};

exports.changeRole = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findOneAndUpdate({ _id: id }, req.body, {
      new: true,
    }).exec();
    res.send(user);
  } catch (err) {
    console.log(err);
    res.send("Server Error");
  }
};

exports.changeStatus = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(req.body);
    const user = await User.findOneAndUpdate({ _id: id }, req.body, {
      new: true,
    }).exec();
    res.send(user);
  } catch (err) {
    console.log(err);
    res.send("Server Error");
  }
};

exports.removeUser = async (req, res) => {
  try {
    let { id } = req.params;
    console.log(req.params);
    const user = await User.findOneAndDelete({ _id: id }).exec();
    res.send("Romove Success!!");
  } catch (err) {
    console.log(err);
    res.send("Server Error");
  }
};
