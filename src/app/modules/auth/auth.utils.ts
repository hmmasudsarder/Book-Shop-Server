/* eslint-disable @typescript-eslint/no-unused-vars */
import jwt, { JwtPayload, SignOptions } from 'jsonwebtoken';

export const createToken = (
  jwtPayload: { userId: string; role: string, email:string },
  secret: string,
  expiresIn: number,
) => {
  // console.log('creating token with payload:', jwtPayload);
  // console.log('using secret:', secret);
  // console.log('token expires in:', expiresIn);
  const options: SignOptions = { expiresIn };
  return jwt.sign(jwtPayload, secret, options);
};

export const verifyToken = (token: string, secret: string) => {
  return jwt.verify(token, secret) as JwtPayload;
};