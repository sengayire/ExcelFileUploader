import { Request, Response } from 'express';

import jsonResponse from 'helpers/jsonResponse';
import requestWrapper from 'helpers/requestWrapper';

/**
 * @param  {object} req
 * @param  {object} res
 * @return {Promise<Response>} http response
 */
export const login = requestWrapper(
  async (req: Request, res: Response): Promise<Response> => {
    return jsonResponse({
      status: 200,
      res,
      message: 'success',
    });
  },
);
