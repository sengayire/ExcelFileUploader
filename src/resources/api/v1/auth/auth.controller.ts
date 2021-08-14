import { Request, Response } from 'express';
import bcrypt from 'bcrypt';

import jsonResponse from 'helpers/jsonResponse';
import requestWrapper from 'helpers/requestWrapper';
import Login from 'models/login';
import { HTTP_BAD_REQUEST, HTTP_CREATED, HTTP_EXIST, HTTP_NOT_FOUND } from 'constants/httpStatusCodes';
import generateToken from 'helpers/generateToken';

/**
 * @param  {object} req
 * @param  {object} res
 * @return {Promise<Response>} http response
 */

export const login = requestWrapper(
  async (req: Request, res: Response): Promise<Response> => {
    const {
      body: { username, password },
    } = req;
    const user = await Login.findOne({
      where: {
        username,
      },
    });

    if (!user) {
      return jsonResponse({
        status: HTTP_NOT_FOUND,
        res,
        message: `user ${username} not exist.`,
      });
    }
    const passwordMatches = await bcrypt.compare(password, user.dataValues.password);
    if (!passwordMatches) {
      return jsonResponse({
        status: HTTP_BAD_REQUEST,
        res,
        message: 'Bad credentials',
      });
    }
    const token = generateToken(username);

    return jsonResponse({
      status: 200,
      res,
      message: 'Logged in successfully',
      token,
    });
  },
);

export const registerUser = requestWrapper(
  async (req: Request, res: Response): Promise<Response> => {
    const { body } = req;

    const hashedPassword = await bcrypt.hash(body.password, 10);
    const data = { ...body, password: hashedPassword };
    const userExists = await Login.findOne({ where: { username: body.username } });
    if (userExists) {
      return jsonResponse({
        status: HTTP_EXIST,
        res,
        message: 'User already exists',
      });
    }
    const response = await Login.create(data);
    const token = generateToken(body.username);

    delete response.dataValues.password;

    return jsonResponse({
      status: HTTP_CREATED,
      res,
      message: `User ${data.username} register successfully`,
      data: response,
      token,
    });
  },
);
