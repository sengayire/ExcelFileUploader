import { Request, Response } from 'express';
import xlsx from 'xlsx';

import jsonResponse from 'helpers/jsonResponse';
import requestWrapper from 'helpers/requestWrapper';
import getUsersFromStream from 'helpers/getUsersFromStream';
import Users from 'models/users';
import { HTTP_CREATED, HTTP_OK } from 'constants/httpStatusCodes';
import pagination from 'helpers/pagination';
import validationSchema from 'helpers/validationSchema';

/**
 * @param  {object} req
 * @param  {object} res
 * @return {Promise<Response>} http response
 */

export const users = requestWrapper(
  async (req: Request, res: Response): Promise<Response> => {
    const {
      query: { page, perPage, filePath, key },
    } = req;

    const buffer = await getUsersFromStream({ filePath, key });

    const workbook = xlsx.read(buffer);
    const sheetNames = workbook.SheetNames;

    const sheetIndex = 1;

    const data = xlsx.utils.sheet_to_json(workbook.Sheets[sheetNames[sheetIndex - 1]]);

    const validatedData = data.map((user) => {
      const validation = validationSchema.validate(user);
      return { ...(user as { [key: string]: string }), errors: validation.error?.details };
    });

    return jsonResponse({
      message: `users list`,
      status: HTTP_OK,
      res,
      data: pagination(validatedData, page, perPage),
      meta: {
        page: Number(page) || 1,
        perPage: Number(perPage),
        total: validatedData.length,
      },
    });
  },
);

export const saveUsers = requestWrapper(
  async (req: Request, res: Response): Promise<Response> => {
    const {
      body: { data },
    } = req;

    await Users.bulkCreate(data);

    return jsonResponse({
      message: `Users saved successfully`,
      status: HTTP_CREATED,
      res,
    });
  },
);
