import "./modal.css";
import SentGif from "./../../assets/images/sentGif.gif";
import { ImCancelCircle } from "react-icons/im";

const Modal = ({cancel}) => {
  return (
    <div className="overlay">
      <div className="modal">
        <div className="modal-content">
          <button className="success-text close-modal">
            <ImCancelCircle className="close-modal" onClick={cancel} />
          </button>

          <div className="success-img">
            <img src={SentGif} alt="success" className="successful" />
          </div>
          <h5 className="success-text">
            Your video link has been sent to johnmark@gmail.com
          </h5>
          <p className="success-text py-7">
            Would you need to view this video later? Save to your account now!{" "}
          </p>
        <button className="send-vid">Send Video</button>
        <p className="create">Don&apos;t have an account? <span>Create account</span></p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
