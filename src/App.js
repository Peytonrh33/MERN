import React from 'react';
import {Routes, Route, Link} from 'react-router-dom';
import './App.css';
import Form from './components/form';
import People from './components/people';
import Planets from './components/planets';

function App() {
  return (
    <div className="App">
      <Form />
      <Routes>
        <Route path='/people/:id' element={<People />} />
        <Route path='/planets/:id' element={<Planets />} />
      </Routes>
    </div>
  );
}

export default App;
