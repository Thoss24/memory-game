import classes from "./MemoryCardWrapper.module.css";
import Cards from "../cards/Cards";
import Score from "../score/Score";
import React, { useState, useEffect } from "react";

const MemoryCardWrapper = (props) => {
  const [checkedCardsArr, setCheckedCardsArr] = useState(props.selectedCards);
  const [unCheckedCards, setUnCheckedCards] = useState(props.cards);
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  // because this generates either a negative or positive number to either move array objects up or down. Each array item has a chance of being moved in either direction
  const shuffleCards = () => {
    setUnCheckedCards(unCheckedCards.sort(() => Math.random() - 0.5)) ;
  };

  useEffect(() => {

      if (highScore > currentScore) {
        return 
      } else {
        setHighScore(currentScore)
      }

      console.log(highScore)

  }, [checkedCardsArr])

  const checkIdHandler = (card) => {
    if (!checkedCardsArr.some((item) => item.id === card.id)) {
      setCheckedCardsArr([...checkedCardsArr, { id: card.id, name: card.id }]);
      setCurrentScore(checkedCardsArr.length + 1);
    } else {
      setCheckedCardsArr(props.selectedCards);
      setCurrentScore(0)
    }
    shuffleCards()
  };

  return (
    <div className={classes.body}>
      <Score currScore={currentScore} score={highScore}/>
      <div className={classes.container}>
        {unCheckedCards.map((card) => (
          <Cards
            key={card.id}
            id={card.id}
            name={card.name}
            img={card.image}
            checkId={checkIdHandler}
          />
        ))}
      </div>
    </div>
  );
};

export default MemoryCardWrapper;
