import jwt from 'jsonwebtoken';

export default ({ username }: any) => {
  return jwt.sign({ username }, `${process.env.SECRET_KEY}`, { expiresIn: '1d' });
};
