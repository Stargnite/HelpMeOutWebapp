import classes from "./how.module.css";
import Number1 from "./../../assets/icons/number1.svg";
import Number2 from "./../../assets/icons/number2.svg";
import Number3 from "./../../assets/icons/number3.svg";
import SampleImg from "./../../assets/images/sampleImg.svg";

const How = () => {
  return (
    <div className={classes.how}>
      <h1>How it works</h1>
      <div className={classes.list}>
        <div className={classes.item}>
          <img src={Number1} alt="" />
          <h1>Record Screen</h1>
          <p>
            Click the Start `Recording` button in our extension. choose which
            part of your screen to capture and who you want to send it to.
          </p>
          <img src={SampleImg} className={classes.img} alt="" />
        </div>

        <div className={classes.item}>
          <img src={Number2} alt="" />
          <h1>Share Your Recording</h1>
          <p>
            We generate a shareable link for your video. Simply send it to your
            audience via email or copy the link to send via any platform.
          </p>
          <img src={SampleImg} className={classes.img} alt="" />
        </div>

        <div className={classes.item}>
          <img src={Number3} alt="" />
          <h1>Learn Effortlessly</h1>
          <p>
            Recipients can access your video effortlessly through the provided
            link, with our user-friendly interface suitable for everyone.
          </p>
          <img src={SampleImg} className={classes.img} alt="" />
        </div>
      </div>
    </div>
  );
};

export default How;
