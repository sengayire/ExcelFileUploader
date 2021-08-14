import path from 'path';
import multer from 'multer';
import aws from 'aws-sdk';
import multerS3 from 'multer-s3';

const dirname = path.resolve();

const S3 = new aws.S3();
aws.config.update({
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  region: 'eu-west-3',
});
const storage = multerS3({
  s3: S3,
  bucket: 'prince-files',
  metadata(req, file, cb) {
    cb(null, { fieldName: file.fieldname });
  },
  key(req, file, cb) {
    cb(null, Date.now().toString());
  },
});
export const multerUpload = multer({ storage });
