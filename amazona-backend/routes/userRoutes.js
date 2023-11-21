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
      res.status(401).send({ message: 'Invalid User Email and password!' });
    }
  })
);

export default userRoute;
