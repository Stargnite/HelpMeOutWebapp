import classes from "./readyVideo.module.css";
import Logo from "./../assets/images/logo.svg";
import { BiEdit, BiSolidCopy } from "react-icons/bi";
import FaceBook from "./../assets/images/facebook.svg";
import Whatsapp from "./../assets/images/whatsapp.svg";
import Telegram from "./../assets/images/telegram.svg";
import RightContent from "./../assets/images/rightContent.svg";
import Footer from "../components/Footer/Footer";
import Modal from "../components/Modal/Modal";
import { useState } from "react";
import { Link } from "react-router-dom";

const ReadyVideo = () => {
  
const [modalIsActive, setModalIsactive] = useState(false);

const activateModal = () => {
  setModalIsactive(true)
}

const deactivateModal = () => {
  setModalIsactive(false)
}

  return (
    <div className={classes.readyVideo}>
      <nav>
        <Link to='/'>
        <img src={Logo} alt="logo" />
        </Link>
        <div className={classes.centerItems}>
          <p>Feature</p>
          <p>How it works</p>
        </div>
        <Link to='/sign-up'>
        <h2>Get Started</h2>
        </Link>
      </nav>

      <div className={classes.content}>
        <div className={classes.left}>
          <h1>Your Video is ready!</h1>
          <div className={classes.nameSection}>
            <p>Name</p>
            <div className={classes.edit}>
              <h3>Untitled_Video_20232509</h3>
              <BiEdit />
            </div>
          </div>
          <input type="email" placeholder="Email of reciever" />
          <button className={classes.send} 
          onClick={activateModal}
          >Send</button>

          <div className={classes.urlSection}>
            <h4>Video Url</h4>
            <div className="url">
              <input
                type="text"
                id="url"
                placeholder="https://www.helpmeout/Untitled_Video_20232509"
              />
              <button className={classes.copyBtn}>
                <BiSolidCopy />
                Copy
              </button>
            </div>
          </div>
          <div className={classes.contact}>
            <h4>Share your video</h4>
            <div className={classes.socials}>
              <img src={FaceBook} alt="" />
              <img src={Whatsapp} alt="" />
              <img src={Telegram} alt="" />
            </div>
          </div>
        </div>

        <div className={classes.right}>
          <img src={RightContent} alt="" />
        </div>
      </div>
      <div className={classes.conclusion}>
        <h3>
          To ensure the availability and privacy of your video, we recommend
          saving it to your account.
        </h3>
        <button>Save Video</button>
        <p>
          Don&apos;t have an account? <span>Create account</span>
        </p>
      </div>
      <Footer />
      {modalIsActive && <Modal cancel={deactivateModal} />}
    </div>
  );
};

export default ReadyVideo;
