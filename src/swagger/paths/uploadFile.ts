import { customResponse } from 'swagger/constants/responses';

export default {
  '/upload': {
    post: {
      tags: ['upload'],
      summary: 'Upload an excel file',
      consumes: 'multipart/form-data',
      parameters: [
        {
          type: 'file',
          in: 'formData',
          name: 'file',
          required: true,
          description: 'should upload en excel file to AWS S3',
        },
        {
          in: 'header',
          name: 'access-token',
          type: 'string',
          required: true,
          example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9',
        },
      ],
      responses: customResponse({
        200: {
          schema: {
            type: 'object',
            properties: {
              status: {
                type: 'int32',
                example: 200,
              },
              data: {
                status: 200,
                message: 'message',
                token: 'token',
              },
              token: {
                type: 'string',
              },
            },
          },
        },
      }),
    },
  },
};
