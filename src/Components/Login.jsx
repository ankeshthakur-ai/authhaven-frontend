import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import axios from 'axios';
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError('Please enter both email and password.');
      return;
    }

    try {
      const res = await axios.post("https://authhaven-backend-production.up.railway.app/api/auth/login", {
        email,
        password,
      });

      // Debug: log response and token
      // console.log('Login response:', res);
      // Save token in localStorage (for authentication persistence)
      localStorage.setItem("token", res.data.token);

      setError('');
      const successMsg = res.data.message || "Logged in successfully!";
      toast.success(successMsg);
      setTimeout(() => navigate("/dashboard"), 1500); // redirect after toast
    } catch (err) {
      const msg = err.response?.data?.msg || err.response?.data?.message || "Login failed. Try again.";
      toast.error(msg);
    }
  };


  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-purple-900 to-gray-800 px-2 sm:px-4">
      <ToastContainer position="top-right" autoClose={2000} theme="dark" />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
      <Navbar />
      <form onSubmit={handleSubmit} className="bg-gray-900/90 p-6 sm:p-8 md:p-10 rounded-2xl shadow-2xl w-full max-w-md border border-gray-700">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-amber-400 mb-6 sm:mb-8 text-center">Login to AuthHaven</h2>
        {error && <div className="mb-4 text-red-400 font-bold text-center">{error}</div>}
        <div className="mb-4 sm:mb-6">
          <label className="block text-gray-300 font-semibold mb-2 text-sm sm:text-base">Email</label>
          <input
            type="email"
            className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-xl bg-gray-800 text-gray-200 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-amber-400 text-sm sm:text-base"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="mb-6 sm:mb-8">
          <label className="block text-gray-300 font-semibold mb-2 text-sm sm:text-base">Password</label>
          <input
            type="password"
            className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-xl bg-gray-800 text-gray-200 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-amber-400 text-sm sm:text-base"
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />
        </div>
        <button type="submit" className="w-full py-2 sm:py-3 rounded-xl bg-amber-400 hover:bg-amber-500 text-gray-900 font-bold text-base sm:text-lg shadow-lg transition duration-200">Login</button>
        <div className="mt-4 sm:mt-6 text-center">
          <span className="text-gray-400 text-sm sm:text-base">Don't have an account? </span>
          <Link to="/signup" className="text-purple-400 hover:text-amber-400 font-bold">Sign Up</Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
