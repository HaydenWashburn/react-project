export function filterFilmsByDirector(list, director){
if (director) return list.filter((film) => film.director == director);
else return list;
}      

export function getListOf(list, prop){
    return list.reduce((uniqueValue, item) => {
        if (uniqueValue.indexOf(item[prop]) == -1) {
            uniqueValue.push(item[prop]);
        }
            return uniqueValue;
    }, []);
}

// export function getListOf(list, prop) {
//     return [...new Set(list.map((film) => film[prop] || ""))]
// }