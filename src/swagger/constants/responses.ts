interface IResponseExample {
  data?: any;
  status?: number;
  message?: string;
}

interface IResponseValue {
  description?: string;
  schema?: unknown;
  example?: IResponseExample;
}

interface IResponse {
  [key: number]: IResponseValue;
}

const defaultResponse: IResponse = {
  400: {
    description: 'Bad Request',
    schema: {
      type: 'object',
      properties: {
        status: {
          type: 'integer',
          example: '400',
        },
        message: { type: 'string', example: 'Bad request' },
      },
    },
  },
  401: {
    description: 'Unauthorized access',
    example: {
      status: 401,
      message: 'Unauthorized Access',
    },
    schema: {
      type: 'object',
      properties: {
        status: {
          type: 'integer',
          example: '401',
        },
        message: { type: 'string', example: 'Unauthorized Access' },
      },
    },
  },
  404: {
    description: 'Record does not exist',
    schema: {
      type: 'object',
      properties: {
        status: {
          type: 'integer',
          example: '404',
        },
        message: { type: 'string', example: 'user not found' },
      },
    },
  },
  500: {
    description: 'Internal Server Error',
    example: {
      status: 500,
      message: 'Internal Server Error',
    },
  },
};

export const metaResponse = {
  type: 'object',
  properties: {
    page: {
      type: 'number',
      format: 'int32',
      example: 1,
    },
  },
};

export const customResponse = (props = {}): IResponse => ({
  ...defaultResponse,
  ...props,
});

export default defaultResponse;
