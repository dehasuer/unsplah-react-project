import './App.css'
import {SearchBar} from "./components/SearchBar.jsx";
import searchImages from "./api.js";
import React from 'react';
import ImageList from './components/ImageList.jsx'
import { useState } from 'react';

function App() {
  const [images, setImages] = useState([]);
  


const handleSubmit = async (term) => {
  const result =  await searchImages(term);
  console.log(result);
  setImages(result);
  
}

  return (
    <div className="App">
      <SearchBar onSubmit={handleSubmit}/>
      <ImageList images={images}/>
    </div>
  )
}

export default App
