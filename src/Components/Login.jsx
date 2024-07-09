import React from 'react';
import '../Style/Signup.css';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className="signUpContent">
      <div className="signup">
        <h1>Signup</h1>
        <form>
          <input type="text" placeholder="Enter your username" />
          <input type="password" placeholder="Enter your password" />
          
          <Link to="/"><button type="submit">Login</button></Link>
        </form>
        
        <p>Don't have an account? <a href="/Signup">Signup</a></p>
        <p>Forgot your password? <a href="/forgotPassword">Reset</a></p>
      </div>
    </div>
  );
}

export default Login;

