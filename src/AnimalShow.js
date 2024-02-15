import "./AnimalShow.css";
import { useState } from "react";
import bird from "./svg/bird.svg";
import cat from "./svg/cat.svg";
import cow from "./svg/cow.svg";
import dog from "./svg/dog.svg";
import gator from "./svg/gator.svg";
import heart from "./svg/heart.svg";
import horse from "./svg/horse.svg";

const svg = {
  bird,
  cat,
  cow,
  dog,
  gator,
  horse,
};

function AnimalShow({ type }) {
  const [count, setCount] = useState(0);

  const handleOnClick = () => {
    setCount(count + 1);
  };

  return (
    <div className="animal-show" onClick={handleOnClick}>
      <div>
        <img className="animal" src={svg[type]} alt="Animal" />
        <h3 className="animal-name">{type}</h3>
      </div>
      <div >
        <img src={heart} alt="heart" width={30} className="heart" />
        <h3 className="heart-count">{count}</h3>
      </div>
    </div>
  );
}

export default AnimalShow;
