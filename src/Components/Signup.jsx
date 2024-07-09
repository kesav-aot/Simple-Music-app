import React from 'react';
import '../Style/Signup.css';
import { Link } from 'react-router-dom';

function Signup() {
  return (
    <div className="signUpContent">
      <div className="signup">
        <h1>Signup</h1>
        <form>
          <input type="text" placeholder="Enter your username" />
          <input type="email" placeholder="Enter your email" />
          <input type="password" placeholder="Enter your password" />
          <input type="password" placeholder="Confirm your password" />
          <Link to="/"><button type="submit">Signup</button></Link>
        </form>
        
        <p>Already have an account? <a href="/login">Login</a></p>
        <p>Forgot your password? <a href="/forgotPassword">Reset</a></p>
      </div>
    </div>
  );
}

export default Signup;

