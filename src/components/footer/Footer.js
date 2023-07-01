import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={classes.container}>
      <p>Thoss24</p>
      <a href="https://github.com/Thoss24" target="blank_" rel="noreferrer">
        <img src="/github-mark.png" alt="github logo" className={classes.logo} />
      </a>
    </div>
  );
};

export default Footer;
