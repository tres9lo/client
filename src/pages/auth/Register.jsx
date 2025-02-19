import '../index.css';
import { BsFacebook, BsTwitterX, BsInstagram } from 'react-icons/bs';


function Register() {
  return (
   <div class="container">
    <div class="left-bar"><h2>Sign Up</h2>
    <div class="tricircles">
      <div class="circle"><BsFacebook /></div>
      <div class="circle"><BsInstagram /></div>
      <div class="circle"><BsTwitterX /></div>
    </div>
    <div class="suggestion">Or use your account</div>
    <div class="form-container">
      <form>
        <input type="text" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <p>Already have an account?</p>
        <button>Sign Up</button>
        </form>
      </div>
  
    </div>
    <div class="right-bar">
      <div class="heading-logo">Dev Community</div>
    <h2> Hello, Friend!</h2>
    <p>Enter your personal details and start a</p><p> journey with us!</p>
    <button>Sign In</button>
    
    </div>
    </div>
  );
}

export default Register;
