import jwt from 'jsonwebtoken';

const authMiddleware = (req, res, next) => {
  const bearer = req.headers.authorization;
  if (!bearer) return res.status(401).send({ message: 'Access Denied' });

  try {
    const token = bearer.split(' ')[1];
    const decoded = jwt.verify(token, process.env.JWTPRIVATEKEY);
    req.userId = decoded;
    next();
  } catch (error) {
    res.status(400).send({ message: 'Invalid Token' });
  }
};

export default authMiddleware;
