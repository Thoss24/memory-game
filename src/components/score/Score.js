import classes from "./Score.module.css";

const Score = (props) => {

  return (
    <div className={classes.container}>
      <p className={classes.instructions}>
        Get points by clicking on an image, but don't click on an image more
        than once or the game resets!
      </p>
      <div className={classes["score-container"]}>
        <div className={classes.score}>
          <p>High Score: </p>
          <p>
            <strong>{props.score}</strong>
          </p>
        </div>
        <div className={classes.score}>
          <p>Current Score: </p>
          <p>
            <strong>{props.currScore}</strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Score;
