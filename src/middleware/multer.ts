import path from 'path';
import multer from 'multer';

const dirname = path.resolve();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, `${dirname}/src/uploads/`);
  },

  filename: (req, file, cb) => {
    cb(null, `${file.fieldname}-${Date.now()}-${file.originalname}`);
  },
});

const fileFilter = (req, file, cb, onError) => {
  if (file.mimetype.includes('jpeg') || file.mimetype.includes('png') || file.mimetype.includes('jpg')) {
    return cb(new Error('Only pdf are allowed'));
  }
  cb(null, true);
};

export const multerUpload = multer({ storage, fileFilter });
