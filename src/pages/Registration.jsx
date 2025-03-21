import React, { useState } from "react";
import "../App.css";

const Signup = ({ onSwitch }) => {
  const [signupData, setSignupData] = useState({ name: "", email: "", password: "", confirmPassword: "" });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  
  const handleSignupSubmit = async (e) => {
    e.preventDefault();
    
    // Check if all fields are filled out correctly
    const newErrors = {};
    
    if (!signupData.name.trim()) {
      newErrors.name = "Full name is required";
    }
    
    if (!signupData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(signupData.email)) {
      newErrors.email = "Invalid email format.";
    }
    
    if (!signupData.password) {
      newErrors.password = "Password is required.";
    }else if (signupData.password.length < 8 || signupData.password.length > 15) {
      newErrors.password = "Password must be between 8 and 15 characters.";
    }
    
    if (signupData.password !== signupData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match.";
    }
    
    setErrors(newErrors);
    
    // Stop here if we found any problems
    if (Object.keys(newErrors).length > 0) return;
    
    // Show loading spinner while we work
    setIsLoading(true);
    
    try {
      // Replace this with your actual signup API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      console.log("New user signed up:", signupData);
      alert("Your account is all set up.");
    } catch (error) {
      console.error("something went wrong:", error);
      alert("Sorry, we couldn't create your account right now. Give it another shot?");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <h2>Create an Account</h2>
      <p>Join NutriNuts for special offers and easy ordering</p>
      <form onSubmit={handleSignupSubmit}>
        <div className="input-group">
          <label>Full Name</label>
          <input
            type="text"
            placeholder="Please Enter Your Fullname"
            value={signupData.name}
            onChange={(e) => setSignupData({ ...signupData, name: e.target.value })}
          />
          {errors.name && <p className="error">{errors.name}</p>}
        </div>

        <div className="input-group">
          <label>Email</label>
          <input
            type="email"
            placeholder="Please enter your email"
            value={signupData.email}
            onChange={(e) => setSignupData({ ...signupData, email: e.target.value })}
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>

        <div className="input-group">
          <label>Password</label>
          <input
             type={showPassword ? "text" : "password"}
            placeholder="Please enter your password"
            value={signupData.password}
            onChange={(e) => setSignupData({ ...signupData, password: e.target.value })}
          />
           <span
              className="password-toggle"
              onClick={() => setShowPassword(!showPassword)} 
            >
              <i>{showPassword ? "Hide" : "Show"}</i>
            </span>
          {errors.password && <p className="error">{errors.password}</p>}
        </div>

        <div className="input-group">
          <label>Confirm Password</label>
          <input
            type="password"
            placeholder="Please confirm your password"
            value={signupData.confirmPassword}
            onChange={(e) => setSignupData({ ...signupData, confirmPassword: e.target.value })}
          />
          {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}
        </div>

        <button className="auth-button" disabled={isLoading}>
          {isLoading ? "Creating account..." : "Sign Up"}
        </button>
      </form>
      <p className="switch-text">
        Already have an account? <span onClick={() => onSwitch("login")}>Login</span>
      </p>
    </div>
  );
};

export default Signup;
