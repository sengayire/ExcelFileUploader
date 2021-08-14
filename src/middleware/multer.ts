import aws from 'aws-sdk';
import multer from 'multer';
import multerS3 from 'multer-s3';

const S3 = new aws.S3();

const storage = multerS3({
  s3: S3,
  bucket: process.env.AWS_BUCKET_NAME,
  metadata(req, file, cb) {
    cb(null, { fieldName: file.fieldname });
  },
  key(req, file, cb) {
    cb(null, Date.now().toString());
  },
});

export const multerUpload = multer({ storage });
