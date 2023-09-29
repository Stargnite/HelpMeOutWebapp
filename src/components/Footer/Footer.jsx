import classes from "./footer.module.css";
import Logo from "./../../assets/images/whiteLogo.svg";

const Footer = () => {
  return (
    <div className={classes.footer}>
      <img src={Logo} alt="" />
      <div className={classes.item}>
        <h2>Menu</h2>
        <p>Home</p>
        <p>Converter</p>
        <p>How it works</p>
      </div>

      <div className={classes.item}>
        <h2>About us</h2>
        <p>About </p>
        <p>Contact us</p>
        <p>Privacy policy</p>
      </div>

      <div className={classes.item}>
        <h2>Screen Record</h2>
        <p>Browser window</p>
        <p>Desktop</p>
        <p>Application</p>
      </div>
    </div>
  );
};

export default Footer;
