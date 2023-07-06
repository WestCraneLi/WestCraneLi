const fs = require('fs');

// TODO 异步转同步，也可以用readSyncFile
const getJsonFileData = (filename, md = false, encoding = 'utf8') => {
  return new Promise((resolve, reject) => {
    try {
      fs.readFile(filename, encoding, (err, data) => {
        if (err) {
          console.error(err);
          reject(err);
        }
        if (md) {
          const INFO = data;
          resolve(INFO);
        } else {
          const INFO = JSON.parse(data);
          resolve(INFO);
        }
      });
    } catch (error) {
      console.error(error);
      reject(error);
    }
  });
};

// TODO 同步方法：writeSyncFile
const setJsonFileData = (filename, data, md = false, encoding = 'utf8') => {
  return new Promise((resolve, reject) => {
    try {
      const temp = md ? data : JSON.stringify(data, null, 2);
      fs.writeFile(filename, temp, encoding, err => {
        if (err) {
          console.error(err);
          reject(err);
        }
        // const INFO = JSON.parse(res);
        resolve(data);
      });
    } catch (error) {
      console.error(error);
      reject(error);
    }
  });
};

// TODO 追加写入内容
const continueAppendFileData = (filename, data, encoding = 'utf8') => {
  return new Promise((resolve, reject) => {
    try {
      fs.appendFile(filename, data, encoding, err => {
        if (err) reject(err);
        resolve('SUCCESS');
      });
    } catch (error) {
      console.error(error);
      reject(error);
    }
  });
};

module.exports = {
  getJsonFileData,
  setJsonFileData,
  continueAppendFileData,
};
