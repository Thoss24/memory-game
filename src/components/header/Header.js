import classes from './Header.module.css';

const Header = (props) => {
  return (
    <div className={classes.container}>
      <div className={classes.title}>
        <h1>Memory Game</h1>
      </div>
    </div>
  );
};

export default Header;
