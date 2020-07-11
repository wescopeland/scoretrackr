// import { Request, Response } from 'express';
// import passport from 'passport';

// export default async (req: Request, res: Response) => {
//   console.log(req.sessionID);
//   try {
//     passport.authenticate(jwtStrategy, (err, user, info) => {
//       if (!user) {
//         return res.status(400).send(info);
//       } else {
//         return res.status(200).send();
//       }
//     })(req, res); // the req.body is passed to passportjs here
//   } catch (err) {
//     return res.status(400).send();
//   }
// };
