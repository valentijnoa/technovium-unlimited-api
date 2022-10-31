require("../models/db");
const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken')
let refreshTokens = []

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

/**
 * /api/user/login/{username}
 * POST login user
 */

exports.loginUser = async (req, res) => {
  User.findOne({ 
    username: req.body.username
  })
  .exec((err,user) => {
    if(err){
      res.status(500).send({ message: err });
      return;
    }

    if(!user){
      return res.status(404).send({ message: "User Not found." });
    }

    var passwordIsValid = bcrypt.compareSync(
      req.body.password,
      user.password
    );

    if (!passwordIsValid) {
      return res.status(401).send({
        accessToken: null,
        message: "Invalid Password!"
      });
    }



  })

  const user = User({
      id: req.body.id,
      email: req.body.email,
      password: req.body.password
    });

    const accessToken = generateAccessToken(user)
    const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET)

  try {
      refreshTokens.push(refreshToken)
      res.json({user, accessToken: accessToken, refreshToken: refreshToken})
      res.status(200).send({
        id: user._id,
        username: user.username,
        email: user.email,
        roles: authorities,
        accessToken: token
      });
  } catch (err) {
   console.log(err.message);
   res.status(400).json({ message: err });
  }
};

function generateAccessToken(user) {
  return jwt.sign({ id: user.id }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '15s' })
}