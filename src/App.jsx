import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [catImages, setCatImages] = useState([]);

  const fetchCatImages = () => {
    fetch('https://api.thecatapi.com/v1/images/search?limit=10')
      .then(response => response.json())
      .then(data => setCatImages(data));
  };

  useEffect(() => {
    fetchCatImages();
  }, []);

  return (
    <div>
      <h3>Cat Gallery</h3>
      <button onClick={fetchCatImages}>Generate New Cats</button>
      <div>
        {catImages.map((cat, index) => (
          <img key={index} src={cat.url} alt="A cute cat" width="200" height="200" />
        ))}
      </div>
    </div>
  );
}

export default App;