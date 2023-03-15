import React, {useState} from "react";
import {useNavigate} from 'react-router-dom';

const Form = props =>{
    const [topic, setTopic] = useState('people');
    const [id, setId] = useState(1);

    const nav = useNavigate();

    const handleSubmit = (e) =>{
        e.preventDefault()

        nav(`/${topic}/${id}`);
    }

    return(
        <form onSubmit={handleSubmit}>
            <div>
                <p>Search for:</p>
                <select onChange={(e) => setTopic(e.target.value)}>
                    <option value="people">People</option>
                    <option value="planets">Planets</option>
                </select>
            </div>
            <div>
                <p>ID:</p>
                <input type="number" onChange={(e) => setId(e.target.value)}/>
            </div>
            <div>
                <button>Search</button>
            </div>
        </form>
    );

}

export default Form;