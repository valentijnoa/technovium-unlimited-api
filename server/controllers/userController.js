require("../models/db");
const User = require("../models/User");
const bcrypt = require("bcrypt");

/**
 * /api/user/{id}
 * GET user based on id
 */

exports.getUser = async (req, res) => {
  let paramID = req.params.id;
  try {
    const user = await User.findOne({ _id: paramID });
    res.json(user);
  } catch (err) {
    res.status(400).json({ message: err });
  }
};

/** 
 * /api/user/all
 * GET all users returned
*/

exports.getAllUsers = async (req, res) => {

   try {
      const users = await User.find({});
      res.json(users);

   } catch (err) {
      res.status(400).json({message: err});
   }
}

/**
 * /api/user/signup/{username}
 * POST create new user
 */

exports.createUser = async (req, res) => {

   const hashedPass = await bcrypt.hash(req.body.password, 10);

  const newUser = new User({
   id: req.body.id,
   username: req.body.username,
   email: req.body.email,
   password: hashedPass,
   date_of_birth: req.body.date_of_birth,
   gender: req.body.gender,
   status: req.body.status
  });

  try {
    await newUser.save();
    res.json(newUser);
  } catch (err) {
    console.log(err.message);
    res.status(400).json({ message: err });
  }
};
