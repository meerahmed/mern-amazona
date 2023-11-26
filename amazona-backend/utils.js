import jwt from 'jsonwebtoken';
const generateToken = (user) => {
  return jwt.sign(
    {
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: '30d',
    }
  );
};
export default generateToken;

export const isAuth = (req, res, next) => {
  const authorization = req.headers.authorization;
  console.log(authorization + 'ddddd');
  if (authorization) {
    const token = authorization.slice(7, authorization.length); // Bearer XXXXXXX
    console.log(token + 'ddddd');
    jwt.verify(token, process.env.JWT_SECRET, (err, decode) => {
      if (err) {
        res.status(401).send({ message: 'Invalid Token' });
      } else {
        req.user = decode;
        next();
      }
    });
  } else {
    res.status(401).send({ message: 'No token found ' });
  }
};
