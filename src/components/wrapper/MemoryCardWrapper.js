import classes from "./MemoryCardWrapper.module.css";
import Cards from "../cards/Cards";
import Score from "../score/Score";
import React, { useState } from "react";

const MemoryCardWrapper = (props) => {
  const [checkedCardsArr, setCheckedCardsArr] = useState(props.selectedCards);
  const [currentScore, setCurrentScore] = useState(0);

  const checkIdHandler = (card) => {
    if (!checkedCardsArr.some((item) => item.id === card.id)) {
      setCheckedCardsArr([...checkedCardsArr, { id: card.id, name: card.id }]);
      setCurrentScore(checkedCardsArr.length + 1);
    } else {
      setCheckedCardsArr(props.selectedCards);
      setCurrentScore(0)
    }
  };

  console.log(checkedCardsArr)

  return (
    <div className={classes.body}>
      <Score currScore={currentScore} />
      <div className={classes.container}>
        {props.cards.map((card) => (
          <Cards
            key={card.id}
            id={card.id}
            name={card.name}
            checkId={checkIdHandler}
          />
        ))}
      </div>
    </div>
  );
};

export default MemoryCardWrapper;
