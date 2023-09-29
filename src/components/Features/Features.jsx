import classes from "./features.module.css";
import StartRecord from "./../../assets/icons/StartRecord.svg";
import Share from "./../../assets/icons/share.svg";
import Revisit from "./../../assets/icons/revisit.svg";
import FeaturesImg from "./../../assets/images/features-img.png";

const Features = () => {
  return (
    <div className={classes.features}>
      <div className={classes.header}>
        <h1>Features</h1>
        <p>Key Highlights of Our Extension</p>
      </div>

      <div className={classes.featuresCont}>
        <div className={classes.featuresList}>
          <div className={classes.item}>
            <img src={StartRecord} alt="" />
            <div className={classes.itemText}>
              <h2>Simple Screen Recording</h2>
              <p>
                Effortless screen recording for everyone. Record with ease, no
                tech expertise required.
              </p>
            </div>
          </div>

          <div className={classes.item}>
            <img src={Share} alt="" />
            <div className={classes.itemText}>
              <h2>Easy-to-Share URL</h2>
              <p>
                Share your recordings instantly with a single link. No
                attachments, no downloads.
              </p>
            </div>
          </div>

          <div className={classes.item}>
            <img src={Revisit} alt="" />
            <div className={classes.itemText}>
              <h2>Revisit Recordings</h2>
              <p>
                Access and review your past content effortlessly. Your
                recordings, always at your fingertips.
              </p>
            </div>
          </div>
        </div>
        <img src={FeaturesImg} alt="" className={classes.featuresImg} />
      </div>
    </div>
  );
};

export default Features;
