import { useState } from "react";
import AnimalShow from "./AnimalShow";

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
    <div>
      <button onClick={handleOnClick}>Add Animals Emoji</button>
      <h1> Animals Emoji = {renderedAnimals}</h1>
    </div>
  );
}

export default App;
