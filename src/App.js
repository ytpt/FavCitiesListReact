import React from 'react';
import FavCitiesList from "./FavoriteCityList";
import Nav from "./Nav";
import {FavCitiesProvider} from "./FavCitiesContext";
import s from './App.module.css';
import AddFavCity from "./AddFavCity";

function App() {
  return (
      <FavCitiesProvider>
        <div className={s.app}>
          <Nav />
          <AddFavCity />
          <FavCitiesList />
        </div>
      </FavCitiesProvider>
  );
}

export default App;
