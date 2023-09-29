import classes from "./hero.module.css";
import Logo from "./../../assets/images/logo.svg";
import BackDots from "./../../assets/images/backDots.svg";
import BackDots2 from "./../../assets/images/backDots2.svg";
import heroImg1 from "./../../assets/images/heroImg1.png";
import heroImg2 from "./../../assets/images/heroImg2.png";
// import heroImg3 from "./../../assets/images/heroImg3.png";
import { BiRightArrowAlt } from "react-icons/bi";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className={classes.hero}>
      <nav>
        <img src={Logo} alt="logo" />
        <div className={classes.centerItems}>
          <Link to="/videos-list">
            <p>Feature</p>
          </Link>
          <p>How it works</p>
        </div>
        <Link to="/sign-up">
          <h2>Get Started</h2>
        </Link>
      </nav>

      <div className={classes.heroContent}>
        <div className={classes.text}>
          <h1>
            Show Them <br /> Don&apos;t Just Tell
          </h1>
          <p>
            Help your friends and loved ones by creating and sending videos on
            how to get things done on a website.
          </p>
          <Link to="/ready-video">
            <button>
              <p>Install HelpMeOut</p>
              <BiRightArrowAlt className={classes.arrowIcon} />
            </button>
          </Link>
        </div>
        <div className={classes.heroImgs}>
          <div className={classes.backDots}>
            <img src={BackDots} alt="" className={classes.upperDots} />
            <img src={BackDots2} alt="" className={classes.lowerDots} />
          </div>
          <div className={classes.imgs}>
            <img src={heroImg1} alt="img" />
            <img src={heroImg2} alt="img" />
            {/* <img src={heroImg3} alt="img" className={classes.lastImg} /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
