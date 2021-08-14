const getBuffer = (file, callback) => {
  const buffers = [];

  const s3 = new AWS.S3();
  const stream = s3.getObject({ Bucket: `${process.env.AWS_BUCKET_NAME}`, Key: `${file.key}` }).createReadStream();
  stream.on('data', (data) => buffers.push(data));
  stream.on('end', () => callback(null, Buffer.concat(buffers)));
  stream.on('error', (error) => callback(error));
};

export default (file) => {
  return new Promise((resolve, reject) => {
    getBuffer(file, (error, s3buffer) => {
      if (error) return reject(error);
      return resolve(s3buffer);
    });
  });
};
