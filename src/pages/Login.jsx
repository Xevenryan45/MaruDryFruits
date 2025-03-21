import React, { useState } from "react";
import "../App.css";

const Login = ({ onSwitch }) => {
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    const newErrors = {};
    if (!loginData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(loginData.email)) {
      newErrors.email = "Invalid email format.";
    }

    if (!loginData.password.trim()) {
      newErrors.password = "Password is required.";
    }else if (loginData.password.length < 8 || loginData.password.length > 15) {
      newErrors.password = "Password must be between 8 and 15 characters.";
    }

    setErrors(newErrors);

    // If there are errors, stop the submission
    if (Object.keys(newErrors).length > 0) return;

    // Simulate login process
    setIsLoading(true);
    try {
      // Simulate API call (replace with actual API logic)
      await new Promise((resolve) => setTimeout(resolve, 2000));
      console.log("Login successful:", loginData);
      alert("Welcome back!");
    } catch (error) {
      console.error("Login failed:", error);
      alert("Login failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const buttonText = isLoading ? "Logging in..." : "Login";

  return (
    <div className="auth-container">
      <h2>Welcome Back</h2>
      <p>Enter your credentials to access your account</p>
      <form onSubmit={handleLoginSubmit}>
        <div className="input-group">
          <label>Email</label>
          <input
            type="email"
            placeholder="Please enter your email"
            value={loginData.email}
            onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>

        <div className="input-group">
          <label>Password</label>
          <input
            type={showPassword ? "text" : "password"} 
            placeholder="Please enter your password"
            value={loginData.password}
            onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
          />
          <span
              className="password-toggle"
              onClick={() => setShowPassword(!showPassword)}
            >
              <i>{showPassword ? "Hide" : "Show"}</i>
            </span>
          {errors.password && <p className="error">{errors.password}</p>}
        </div>

        <button className="auth-button" disabled={isLoading}>
          {buttonText}
        </button>
      </form>
      <p className="switch-text">
        Don't have an account? <span onClick={() => onSwitch("signup")}>Sign Up</span>
      </p>
    </div>
  );
};

export default Login;
