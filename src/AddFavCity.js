import React, {useState, useContext} from 'react';
import {FavCitiesContext} from "./FavCitiesContext";

const AddFavCity = () => {
    const [cityName,setCityName] = useState('');
    const [favCities, setFavCities] = useContext(FavCitiesContext);

    const updateCityName = (e) => {
        setCityName(e.target.value);
    }

    const addFavCity = (e) => {
        e.preventDefault();
        const maxId = favCities[favCities.length - 1]['id'];

        if (favCities.find(city => city.name === cityName)) {
            alert(`${cityName} is already in list!`);
        } else {
            setFavCities(prevFavCity => [
                ...prevFavCity,
                {id: maxId + 1, name: cityName}
            ]);
        }
    }

    return (
        <form onSubmit={addFavCity}>
            <label>Add new city</label>
            <input type='text' name='name' onChange={updateCityName} />
            <button>Submit</button>
        </form>
    )
}

export default AddFavCity;