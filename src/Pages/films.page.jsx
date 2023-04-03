import React, { useState, useEffect } from "react";
import {
  filterFilmsByDirector,
  getListOf,
  getFilmStats,
} from "../helpers/film.helpers";
import { Link } from "react-router-dom";

function FilmsPage(props) {
  let [list, setList] = useState([]);
  let [searchDirector, setSearchDirector] = useState("");

  function getFilms() {
    fetch("https://studioghibliapi-d6fc8.web.app/films")
      .then((response) => {
        return response.json();
      })
      .then((films) => setList(films))
      .catch((error) => console.error(error));
  }

  useEffect(() => {
    getFilms();
  }, []);

  let filmsByDirector = filterFilmsByDirector(list, searchDirector);
  let directors = getListOf(list, "director");
  let { avg_score, total, latest } = getFilmStats(list);

  return (
    <div>
      <h1>Studio Ghibli Films</h1>
      <form action="">
        <div className="form-group">
          <label htmlFor="">
            <select
              name="searchDirector"
              id="searchDirector"
              value={searchDirector}
              onChange={(e) => {
                setSearchDirector(e.target.value);
              }}
            >
              <option value="">All</option>
              {directors.map((director, idx) => {
                return (
                  <option key={director + idx} value={director}>
                    {director}
                  </option>
                );
              })}
            </select>
          </label>
        </div>
      </form>
      <div>
        <div>
          <span># Of Films</span>
          <span>{total}</span>
        </div>
        <div>
          <span>Average Rating</span>
          <span>{avg_score}</span>
        </div>
        <div>
          <span>Latest Film</span>
          <span>{latest}</span>
        </div>
      </div>
      <ul>
        {filmsByDirector.map((film) => {
          return (
            <li key={film.id}>
              <h5>
                <Link to={`/film/${film.id}`}>{film.title}</Link>
              </h5>
              <img src={film.image} alt="movie photo" />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default FilmsPage;
