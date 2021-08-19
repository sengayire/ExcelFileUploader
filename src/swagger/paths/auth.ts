import { customResponse } from 'swagger/constants/responses';

export default {
  '/auth/login': {
    post: {
      tags: ['auth'],
      summary: 'Login an existing user',
      parameters: [
        {
          in: 'body',
          name: 'body',
          required: true,
          schema: {
            $ref: '#/definitions/LoginSchema',
          },
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
