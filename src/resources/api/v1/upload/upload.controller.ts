import path from 'path';
import { Request, Response } from 'express';
import xlsx from 'xlsx';

import { object } from 'joi';
import jsonResponse from 'helpers/jsonResponse';
import requestWrapper from 'helpers/requestWrapper';

/**
 * @param  {object} req
 * @param  {object} res
 * @return {Promise<Response>} http response
 */

const dir = path.resolve();

export const uploadFile = requestWrapper(
  async (req: Request, res: Response): Promise<Response> => {
    const filePath = path.join(dir, `/src/uploads/${req.file.filename}`);

    const workbook = xlsx.readFile(filePath);
    const sheetNames = workbook.SheetNames;

    const sheetIndex = 1;

    const data = xlsx.utils.sheet_to_json(workbook.Sheets[sheetNames[sheetIndex - 1]]);

    return jsonResponse({
      status: 200,
      res,
      message: 'success',
      data,
    });
  },
);
