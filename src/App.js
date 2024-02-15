import { useState } from "react";

function pickAnimal() {
  const animals = ["🐶", "🐱", "🐭", "🐹", "🐰", "🦊", "🐻", "🐼", "🐨", "🐯"];

  return animals[Math.floor(Math.random() * animals.length)];
}

function App() {
  const [animal, setAnimal] = useState("");

  const handleOnClick = () => {
    const newAnimal = pickAnimal();
    setAnimal([...animal, newAnimal]);
  };

  return (
    <div>
      <button onClick={handleOnClick}>Add Animals Emoji</button>
      <h1> Animals Emoji = {animal}</h1>
    </div>
  );
}

export default App;
