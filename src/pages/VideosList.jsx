import classes from "./videosList.module.css";
import Logo from "./../assets/images/logo.svg";
import ProfilePic from "./../assets/images/profile-circle.svg";
import { IoIosArrowDown } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { MdLink } from "react-icons/md";

const VideosList = () => {
  return (
    <div className={classes.videosList}>
      <nav>
        <img src={Logo} alt="logo" />
        <div className={classes.centerItems}>
          <img src={ProfilePic} alt="" />
          <p>John Mark</p>
          <IoIosArrowDown />
        </div>
      </nav>

      <div className={classes.heading}>
        <div className={classes.text}>
          <h1>Hello, John Mark</h1>
          <p>Here are your recorded videos</p>
        </div>
        <div className={classes.search}>
          <CiSearch />
          <input type="text" placeholder="Search for a particular video" />
        </div>
      </div>

      <div className={classes.videos}>
        <h2>Recent Files</h2>

        <div className={classes.list}>
          <div className={classes.item}>
            <div className={classes.vid}></div>
            <div className={classes.cont}>
              <h3>Video name</h3>
              <MdLink className={classes.link} />
            </div>
          </div>

          <div className={classes.item}>
            <div className={classes.vid}></div>
            <div className={classes.cont}>
              <h3>Video name</h3>
              <MdLink className={classes.link} />
            </div>
          </div>

          <div className={classes.item}>
            <div className={classes.vid}></div>
            <div className={classes.cont}>
              <h3>Video name</h3>
              <MdLink className={classes.link} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideosList;
