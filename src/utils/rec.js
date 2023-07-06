const fetch = require('node-fetch');
// const getData = async uri => {
//   try {
//     const response = await fetch(uri);
//     if (!response.ok) {
//       throw new Error(`Error! status: ${response.status}`);
//     }
//     const result = await response.json();
//     return result;
//   } catch (error) {
//     console.log(err);
//   }
// };

const getData = uri => {
  return new Promise((resolve, reject) => {
    try {
      fetch(uri).then(res => {
        resolve(res.json());
      });
    } catch (error) {
      reject(error);
    }
  });
};

module.exports = { getData };
