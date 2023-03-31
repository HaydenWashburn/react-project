import { useState } from "react";
import "./App.css";
import FilmsList from "./components/filmsList";
import {BrowserRouter, NavLink, Routes, Route} from 'react-router-dom';
import HomePage from './Pages/';
import FilmsPage from './Pages/index'
function App(props) {
  return (
    <BrowserRouter>
    <Routes>
      <Route path = "/">
 
      </Route>
      <Route>
 
          </Route>
    </Routes>
    </BrowserRouter>
  )
  }

export default App;
