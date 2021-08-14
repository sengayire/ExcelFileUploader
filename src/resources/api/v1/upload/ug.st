AWS.config.update({ accessKeyId: process.env.AWS_ACCESS_KEY_ID, secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY, });
// Get buffered file from s3 const getBufferFromS3 = (file, callback) => { const buffers = []; const s3 = new AWS.S3();
const stream = s3.getObject({ Bucket: 'prince-files', Key: `${file.key}` }).createReadStream(); stream.on('data', (data)
=> buffers.push(data)); stream.on('end', () => callback(null, Buffer.concat(buffers))); stream.on('error', (error) =>
callback(error)); }; const getBufferFromS3Promise = (file) => { return new Promise((resolve, reject) => {
getBufferFromS3(file, (error, s3buffer) => { if (error) return reject(error); return resolve(s3buffer); }); }); }; const
buffer = await getBufferFromS3Promise(file); const workbook = xlsx.read(buffer); const sheetNames = workbook.SheetNames;
const sheetIndex = 1; const data = xlsx.utils.sheet_to_json(workbook.Sheets[sheetNames[sheetIndex - 1]]);
console.log(`data`, data); // const response = await Users.bulkCreate(data);
