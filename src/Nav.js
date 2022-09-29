import React, {useContext} from 'react';
import {FavCitiesContext} from "./FavCitiesContext";

const Nav = () => {
    const [favCities, setFavCities] = useContext(FavCitiesContext);
    return (
        <div>
            <h3>Anna Archive</h3>
            <p>Favorite cities list: {favCities.length}</p>
        </div>
    );
}
export default Nav;