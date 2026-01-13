const workouts = require("../model/workoutmodel");
//getall
const getallworkout = async (req, res) => {
  const workout = await workouts.find({}).sort({ createdAt: -1 });
  res.status(200).json(workout);
};
//getid
const getworkout = async (req, res) => {
  const workout = await workouts.findById(req.params.id);
  if (!workout) {
    return res.status(400).json("no such id available");
  } else {
    res.status(200).json(workout);
  }
};
//post
const createworkout = async (req, res) => {
  const { title, load, rep } = req.body;
  const emptyfield = [];
  if (!title) {
    emptyfield.push("title");
  }
  if (!load) {
    emptyfield.push("load");
  }
  if (!rep) {
    emptyfield.push("rep");
  }
  if (emptyfield.length > 0) {
     return res.status(400)
      .json({ error: "please fill all the fields", emptyfield });
  }
  try {
    const workout = await workouts.create({ title, load, rep });
    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
  // res.json({mess:'post this '})
};
//delete
const deleteworkout = async (req, res) => {
  const id = req.params.id;
  const workout = await workouts.findByIdAndDelete(id);
  if (!workout) {
    return res.status(400).json("no such id available");
  }
  res.status(200).json(workout);
};
//update
const updateworkout = async (req, res) => {
  const workout = await workouts.findByIdAndUpdate(
    { _id: req.params.id },
    { ...req.body }
  );
  if (!workout) {
    return res.status(400).json("no such id available");
  }
  res.status(200).json(workout);
};
module.exports = {
  createworkout,
  getallworkout,
  getworkout,
  deleteworkout,
  updateworkout,
};
