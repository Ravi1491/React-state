import { useState } from "react";
import AnimalShow from "./AnimalShow";
import "./App.css";

function pickAnimal() {
  const animals = ["bird", "cat", "cow", "dog", "gator", "horse"];

  return animals[Math.floor(Math.random() * animals.length)];
}

function App() {
  const [animals, setAnimal] = useState([]);

  const handleOnClick = () => {
    const newAnimal = pickAnimal();
    setAnimal([...animals, newAnimal]);
  };

  const renderedAnimals = animals.map((animal, index) => {
    return <AnimalShow key={index} type={animal} />;
  });

  return (
    <div className="app">
      <button onClick={handleOnClick}>Add Animals</button>
      <div className="animal-list"> {renderedAnimals}</div>
    </div>
  );
}

export default App;
