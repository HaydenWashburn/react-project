export function filterFilmsByDirector(list, director) {
  if (director) return list.filter((film) => film.director === director);
  else return list;
}

export function getListOf(list, prop) {
  return list.reduce((uniqueValue, item) => {
    if (uniqueValue.indexOf(item[prop]) === -1) {
      uniqueValue.push(item[prop]);
    }
    return uniqueValue;
  }, []);
}

export function getFilmStats(list) {
    console.log(list)
  let acc_score = 0;

  acc_score = list.reduce((acc, curr) => acc + parseInt(curr.rt_score), 0);

  const total = list.length;

  const avg_score = acc_score / total;

  let latestFilm = 0;
  list.forEach((film) => {
    if (latestFilm < film.release_date) {
      latestFilm = film.release_date;
    }
  });
console.log(avg_score, acc_score, total, latestFilm)
  return avg_score, acc_score, total, latestFilm;
}

// export function getListOf(list, prop) {
//     return [...new Set(list.map((film) => film[prop] || ""))]
// }
