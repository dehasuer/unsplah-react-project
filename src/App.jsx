import './App.css'
import {SearchBar} from "./components/SearchBar.jsx";
import searchImages from "./api.js";
import React from 'react';

function App() {
const handleSubmit = (term) => {
  console.log(term);
  
}

  return (
    <div className="App">
      <SearchBar onSubmit={handleSubmit}/>
    </div>
  )
}

export default App
