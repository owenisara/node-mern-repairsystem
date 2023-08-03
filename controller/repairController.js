const User = require("../models/User");
const Repair = require("../models/Repair");
const Locations = require('../models/Location')
const Device = require('../models/Device')
const Department = require('../models/Department')
const { notifyLine } = require("../function/Notify");
const tokenLine = 'O9uYSEfWiAHxmJsBVj8aFrxpk2txa0BL9p0jwBbtsgv'
exports.createRepair = async (req, res) => {
  try {
    console.log(req.body);
    let {
      requireBy,
      repairBy,
      phone,
      location,
      department,
      device,
      detailproblem,
      detailrepair,
    } = req.body;
    let repair = new Repair({
      requireBy,
      repairBy,
      phone,
      location,
      department,
      device,
      detailproblem,
      detailrepair,
    });
    await repair.save();
    //notify
    const user = await User.findOne({_id:requireBy}).exec()
    const locations = await Locations.findOne({_id:location}).exec()
    const devices = await Device.findOne({_id:device}).exec()
    const departments = await Department.findOne({_id:department}).exec()

    console.log('user',user)
    const text = 
`
ผู้เเจ้งซ่อม : ${user.firstname} ${user.lastname} 
ติดต่อ : ${phone}
อุปรกณ์ : ${devices.devicename}
รายละเอียด : ${detailproblem}
สถาที่ : ${locations.locationname} 
แผนก : ${departments.departmentname}`


    await notifyLine(tokenLine,text)
    res.send("Create Success");
  } catch (err) {
    console.log(err);
    res.status(500).send("Server Error");
  }
};
exports.listRepair = async (req, res) => {
  try {
    const repair = await Repair.find({})
      .populate("department", ["departmentname"])
      .populate("device", ["devicename"])
      .populate("location", ["locationname"])
      .populate("requireBy", ["email", "firstname", "lastname"])
      .populate("repairBy", ["email", "firstname", "lastname"])
      .sort([["createdAt", "desc"]])
      .exec();
    res.send(repair);
  } catch (err) {
    console.log(err);
    res.status(500).send("Server Error");
  }
};
exports.readRepair = async (req, res) => {
  try {
    const { id } = req.params;
    const repair = await Repair.findOne({ _id: id })
      .populate("department", ["departmentname"])
      .populate("device", ["devicename"])
      .populate("location", ["locationname"])
      .populate("requireBy", ["email", "firstname", "lastname"])
      .populate("repairBy", ["email", "firstname", "lastname"])
      .exec();
    res.send(repair);
  } catch (err) {
    console.log(err);
    res.status(500).send("Server Error");
  }
};
exports.updateRepair = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(req.body);
    const repair = await Repair.findOneAndUpdate({ _id: id }, req.body, {
      new: true,
    }).exec();

    res.send(repair);
  } catch (err) {
    console.log(err);
    res.status(500).send("Server Error");
  }
};
exports.updateStatus = async (req, res) => {
  try {
    console.log(req.body);
    const { id } = req.params;
    const repair = await Repair.findOneAndUpdate({ _id: id }, req.body, {
      new: true,
    }).exec();

    res.send(repair);
  } catch (err) {
    console.log(err);
    res.status(500).send("Server Error");
  }
};

exports.waitingRepair = async (req, res) => {
  try {
    const repair = await Repair.find({ statusRepair: "รอซ่อม" })
      .populate("department", ["departmentname"])
      .populate("device", ["devicename"])
      .populate("location", ["locationname"])
      .populate("requireBy", ["email", "firstname", "lastname"])
      .populate("repairBy", ["email", "firstname", "lastname"])
      .sort([["createdAt", "desc"]])
      .exec();
    res.send(repair);
  } catch (err) {
    console.log(err);
    res.status(500).send("Server Error");
  }
};
exports.waitingpartsRepair = async (req, res) => {
  try {
    const repair = await Repair.find({ statusRepair: "รออะไหล่" })
      .populate("department", ["departmentname"])
      .populate("device", ["devicename"])
      .populate("location", ["locationname"])
      .populate("requireBy", ["email", "firstname", "lastname"])
      .populate("repairBy", ["email", "firstname", "lastname"])
      .sort([["createdAt", "desc"]])
      .exec();
    res.send(repair);
  } catch (err) {
    console.log(err);
    res.status(500).send("Server Error");
  }
};

exports.completeRepair = async (req, res) => {
  try {
    const repair = await Repair.find({ statusRepair: "เสร็จเรียบร้อย" })
      .populate("department", ["departmentname"])
      .populate("device", ["devicename"])
      .populate("location", ["locationname"])
      .populate("requireBy", ["email", "firstname", "lastname"])
      .populate("repairBy", ["email", "firstname", "lastname"])
      .sort([["createdAt", "desc"]])
      .exec();
    res.send(repair);
  } catch (err) {
    console.log(err);
    res.status(500).send("Server Error");
  }
};
