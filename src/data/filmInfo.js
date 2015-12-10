import http from '../core/HttpClient';

function productFromFilm(film) {
  return film._embedded['viaplay:blocks'][0]._embedded['viaplay:product'];
}

function imdbIdFromProduct(product) {
  return (product.content.imdb.id).replace('tt', '');
}

function getFilm(name) {
  return new Promise(async(resolve, reject) => {
    try {
      const film = await http.get(`https://content.viaplay.se/web-se/film/${name}`);
      const product = productFromFilm(film);
      const imdbId = imdbIdFromProduct(product);
      const trailer = await http.getXml(`http://api.traileraddict.com/?imdb=${imdbId}`);
      if (product && trailer.trailers && trailer.trailers.trailer) {
        resolve({
          product,
          trailer: trailer.trailers.trailer[0],
        });
      } else {
        reject(new Error('Incomplete data'));
      }
    } catch (err) {
      reject(err);
    }
  });
}

export default { getFilm };
