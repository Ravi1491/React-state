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
    <div onClick={handleOnClick}>
      <img src={svg[type]} alt="Animal" width={100} height={100} />
      <img
        src={heart}
        alt="heart"
        width={10 + 10 * count}
        style={{ maxWidth: "100px" }}
      />
    </div>
  );
}

export default AnimalShow;
