import React, {useState, createContext} from 'react';

export const FavCitiesContext = createContext();

export const FavCitiesProvider = (props) => {
    const [favCities, setFavCities] = useState([
        {id: 1, name: 'Bali'},
        {id: 2, name: 'Dubrovnik'},
        {id: 3, name: 'Budva'},
        {id: 4, name: 'Tomsk Oblast'},
        {id: 5, name: 'Dubai'}
    ]);

    return (
        <FavCitiesContext.Provider value={[favCities, setFavCities]}>
            {props.children}
        </FavCitiesContext.Provider>
    )
}