import React, {useContext} from 'react';
import FavCity from "./FavCity";
import {FavCitiesContext} from "./FavCitiesContext";

const FavCitiesList = () => {
    const [favCities, setFavCities] = useContext(FavCitiesContext);
    return (
        <div>
            {favCities.map(favCity => (
                <FavCity key={favCity.id} name={favCity.name} />
            ))}
        </div>
    );
}
export default FavCitiesList;