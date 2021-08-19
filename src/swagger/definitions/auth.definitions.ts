export default {
  LoginSchema: {
    type: 'object',
    required: ['username', 'password'],
    properties: {
      username: {
        type: 'string',
        example: 'JOHNDOE',
      },
      password: {
        type: 'string',
        example: '******',
      },
    },
  },
};
