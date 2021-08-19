import { customResponse } from 'swagger/constants/responses';

export default {
  '/users': {
    get: {
      tags: ['get users'],
      summary: 'Get uploaded users list',
      consumes: 'application/json',
      parameters: [
        {
          type: 'string',
          in: 'query',
          name: 'filePath',
          required: true,
          description: 'uploaded file',
          example: 'https://prince-files.s3.eu-west-3.amazonaws.com/1234566',
        },
        {
          in: 'query',
          name: 'key',
          type: 'string',
          required: true,
          example: '1234566',
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
    post: {
      tags: ['save users'],
      summary: 'save uploaded users list',
      parameters: [
        {
          type: 'object',
          in: 'body',
          name: 'body',
          schema: {
            type: 'object',
            properties: {
              data: {
                type: 'object',
                name: 'data',
              },
            },
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
