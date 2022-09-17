const { promiseTheaterIXX, promiseTheaterVGC } = require('./external.js');

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = (emosi) => {
  return new Promise((resolve) => {
    const hasilBioskop = [];

    promiseTheaterIXX().then((data) => {
      hasilBioskop.push(...data);

      promiseTheaterVGC().then((data) => {
        hasilBioskop.push(...data);

        if (emosi === 'marah') {
          const marah = hasilBioskop.filter((item) => item.hasil === 'marah');

          resolve(marah.length);
        } else if (emosi === 'tidak marah') {
          const tidakMarah = hasilBioskop.filter(
            (item) => item.hasil === 'tidak marah'
          );

          resolve(tidakMarah.length);
        }
      });
    });
  });
};

module.exports = {
  promiseOutput,
};
