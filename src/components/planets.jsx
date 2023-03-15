import React, {useState, useEffect} from "react";
import axios from 'axios';
import {useParams} from "react-router-dom";



const Planets = () =>{
    const {id} = useParams();
    const [planets, setPlanets] = useState({
        climate: '',
        terrain: '',
        surface_water: '',
        population: ''
    });

    useEffect(()=>{
        axios.get(`https://swapi.dev/api/planets/${id}`)
        .then((res) => {
            setPlanets(res.data)
        })
        .catch((err) => console.log(err))
    },[id]);


return(
    <div>
        <p>Climate: {planets.climate}</p>
        <p>Terrain: {planets.terrain}</p>
        <p>Surface Water: {planets.surface_water}</p>
        <p>Population: {planets.population}</p>
    </div>
);

}


export default Planets;