import express from 'express';
import User from '../models/userModels.js';
import generateToken from '../utils.js';
import expressAsyncHandler from 'express-async-handler';
import bcrypt from 'bcryptjs';
const userRoute = express.Router();

//npm i express-async-hander
userRoute.post(
  '/signin',
  expressAsyncHandler(async (req, res) => {
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      if (bcrypt.compareSync(req.body.password, user.password)) {
        res.send({
          _id: user._id,
          name: user.name,
          email: user.email,
          isAdmin: user.isAdmin,
          token: generateToken(user),
        });
        return;
      } else {
        res.status(401).send({ message: 'Invalid User Email and password!' });
      }
    } else {
      res
        .status(401)
        .send({
          message: 'Invalid User Email and password!',
          data: req.body.email,
        });
    }
  })
);

userRoute.post(
  '/signup',
  expressAsyncHandler(async (req, res) => {
    const newUser = new User({
      name: req.body.name,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password),
    });
    const user = await newUser.save();
    res.send({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user),
    });
  })
);

userRoute.get('/', async (req, res) => {
  const users = await User.find();
  res.send(users);
});

export default userRoute;
