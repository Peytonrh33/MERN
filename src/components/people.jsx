import React, {useState, useEffect} from "react";
import axios from "axios";
import {useParams} from "react-router-dom";


const People = () =>{
    const {id} = useParams();
    const [people, setPeoples] = useState({
        height: 'Loading',
        mass: '',
        hair_color: '',
        skin_color: ''
    });

    useEffect(()=>{
        axios.get(`https://swapi.dev/api/people/${id}`)
        .then((res) => {
            setPeoples(res.data)
        })
        .catch((err) => console.log(err))
    },[id]);

    return(
        <div>
            <p>Height: {people.height}</p>
            <p>Mass: {people.mass}</p>
            <p>Hair Color: {people.hair_color}</p>
            <p>Skin Color: {people.skin_color}</p>
        </div>
    );
    


}


export default People;