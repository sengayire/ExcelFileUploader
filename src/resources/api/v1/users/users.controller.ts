import { Request, Response } from 'express';
import xlsx from 'xlsx';

import jsonResponse from 'helpers/jsonResponse';
import requestWrapper from 'helpers/requestWrapper';
import getUsersFromStream from 'helpers/getUsersFromStream';

/**
 * @param  {object} req
 * @param  {object} res
 * @return {Promise<Response>} http response
 */

export const users = requestWrapper(
  async (req: Request, res: Response): Promise<Response> => {
    const { body } = req;

    const buffer = await getUsersFromStream(body);

    const workbook = xlsx.read(buffer);
    const sheetNames = workbook.SheetNames;

    const sheetIndex = 1;

    const data = xlsx.utils.sheet_to_json(workbook.Sheets[sheetNames[sheetIndex - 1]]);

    return jsonResponse({
      message: `users list`,
      status: 200,
      res,
      data,
    });
  },
);
