import jwt from "jsonwebtoken";
<<<<<<< HEAD:Controller/verifyToken.js
import dotenv from "dotenv";
=======
import dotenv from 'dotenv';
>>>>>>> 193be970fd39efc2631f8b4c9f6bca5182e36c8f:Routes/verifyToken.js
dotenv.config();

export const verifyToken = (req, res, next) => {
  const authHeader = req.headers.token;
  if (authHeader) {
    const token = authHeader.split(" ")[1];
    jwt.verify(token, process.env.JWT_SEC, (err, user) => {
      if (err) res.status(403).json("Token is not valid!");
      req.user = user;
      next();
    });
  } else {
    return res.status(401).json("You are not authenticated!");
  }
};

export const verifyTokenAndAuthorization = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
      next();
    } else {
      res.status(403).json("You are not allowed to do that!");
    }
  });
};

export const verifyTokenAndAdmin = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.isAdmin) {
      next();
    } else {
      res.status(403).json("You are not allowed to do that!");
    }
  });
};
<<<<<<< HEAD:Controller/verifyToken.js
=======
export  {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
};
>>>>>>> 193be970fd39efc2631f8b4c9f6bca5182e36c8f:Routes/verifyToken.js
