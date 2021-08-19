import auth from './auth';
import uploadFile from './uploadFile';
import users from './users';

export default { ...auth, ...uploadFile, ...users };
