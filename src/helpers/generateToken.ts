import jwt from 'jsonwebtoken';

export default (username) => {
  return jwt.sign({ username }, process.env.SECRET_KEY, { expiresIn: '1d' });
};
