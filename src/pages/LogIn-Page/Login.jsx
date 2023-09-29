import "./Login.css";
import {FcGoogle} from 'react-icons/fc'
import { BsFacebook } from 'react-icons/bs'

export default function Login() {
  return (
    <div className="login-content">
      <div className="auto_login">
        <h5>Log in or Sign up</h5>
        <p>
          Join millions of others in sharing successful <br /> moves on
          HelpMeOut.
        </p>

        <div className="auto_login_btn">
          <button>
            <FcGoogle className="icon" />
            <div className="auto_login_text">Continue with Google</div>
          </button>
          <button>
            <BsFacebook className="icon" />
            <div className="auto_login_text">Continue with Facebook</div>
          </button>
        </div>
        <p>OR</p>
      </div>
      <form id="log_in">
        <div className="input_fields">
          <div className="input_item">
            <label htmlFor="">Email</label>
            <input type="email" placeholder="Email your email address" />
          </div>

          <div className="input_item">
            <label htmlFor="">Password</label>
            <input placeholder="Enter your password" required />
          </div>
        </div>
        <button className="login_btn" type="submit">
          Sign up
        </button>
      </form>
    </div>
  );
}
