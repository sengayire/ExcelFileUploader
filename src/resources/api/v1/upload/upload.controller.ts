import { Request, Response } from 'express';

import jsonResponse from 'helpers/jsonResponse';
import requestWrapper from 'helpers/requestWrapper';

/**
 * @param  {object} req
 * @param  {object} res
 * @return {Promise<Response>} http response
 */

export const uploadFile = requestWrapper(
  async (req: Request, res: Response): Promise<Response> => {
    const {
      file: { location, bucket, key, originalname },
    } = req;

    const data = {
      fileName: originalname,
      filePath: location,
      key,
      bucketName: bucket,
    };

    return jsonResponse({
      status: 200,
      res,
      message: `File (${originalname}) uploaded successfully`,
      data,
    });
  },
);
