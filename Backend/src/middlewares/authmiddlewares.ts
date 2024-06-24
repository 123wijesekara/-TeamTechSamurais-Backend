// // src/middleware/authMiddleware.ts

// import jwt from 'jsonwebtoken';
// import { Request, Response, NextFunction } from 'express';

// export const checkJwtExpiry = (req: Request, res: Response, next: NextFunction) => {
//   const authHeader = req.headers.authorization;

//   if (authHeader) {
//     const token = authHeader.split(' ')[1];

//     jwt.verify(token, 'JWT_SECRET', (err: any, decoded: any) => {
//       if (err) {
//         return res.status(403).json({ error: 'Token is not valid or has expired' });
//       }

//       // Optional: Attach decoded token to request object
//       req.decodedToken = decoded;
//       next();
//     });
//   } else {
//     res.sendStatus(401);
//   }
// };
