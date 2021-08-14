import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';

import jsonResponse from 'helpers/jsonResponse';
import { HTTP_ACCESS_DENIED, HTTP_BAD_REQUEST } from 'constants/httpStatusCodes';

/**
 * @param  {object} req
 * @param  {object} res
 * @param  {next} next
 * @return {Promise<Response>} http response
 */
const verifyToken = async (req: Request, res: Response, next?: NextFunction): Promise<void | Response> => {
  try {
    const token = req.header('access-token');
    const secret = process.env.SECRET_KEY;
    if (!token) {
      return jsonResponse({
        status: HTTP_ACCESS_DENIED,
        res,
        message: 'Access denied',
      });
    }

    const decoded = jwt.verify(token, `${secret}`);

    req.user = decoded;

    return next && next();
  } catch (error) {
    return jsonResponse({
      status: HTTP_BAD_REQUEST,
      res,
      message: 'Invalid token',
    });
  }
};

export default verifyToken;
