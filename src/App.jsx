

import './App.css';
import Navbar from './Components/Navbar';
import Login from './Components/Login';
import Signup from './Components/Signup';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Dashboard from './Components/Dashboard';
import Footer from './Components/Footer';


function LandingPage() {
  // ...existing code for landing page...
  // FAQ interaction state
  const [openFAQ, setOpenFAQ] = useState(null);
  // Button click feedback
  const [clicked, setClicked] = useState(false);
  // Testimonials hover state
  const [hoveredTestimonial, setHoveredTestimonial] = useState(null);



  // Place this in your main JS file that runs on the "/" route
  window.onload = function () {
    const token = localStorage.getItem('token');
    if (token) {
      window.location.href = '/dashboard';
    }
  };


  const faqs = [
    {
      q: 'Is AuthHaven free to use?',
      a: 'Yes! AuthHaven is an open-source demo project to showcase full stack authentication skills.'
    },
    {
      q: 'Can I use AuthHaven in my own projects?',
      a: 'Absolutely! You can fork, clone, and adapt AuthHaven for your own authentication needs.'
    },
    {
      q: 'What technologies are used?',
      a: 'React, Tailwind CSS, Node.js, Express, MongoDB, JWT, OAuth, and more.'
    },
    {
      q: 'How secure is AuthHaven?',
      a: 'AuthHaven follows industry best practices for authentication and data protection.'
    }
  ];
  return (
    <div className="min-h-screen w-full flex flex-col relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 -z-10 animate-gradient bg-gradient-to-br from-gray-900 via-purple-900 to-gray-800"></div>
      <Navbar />
      {/* Responsive main container */}
      <main className="flex flex-col items-center flex-1 px-2 sm:px-4 md:px-8 pt-28 md:pt-36 pb-16 md:pb-24 text-center space-y-20 md:space-y-32">
        <section className="max-w-6xl w-full mx-auto px-2 sm:px-4 md:px-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-amber-400 mb-8 drop-shadow-lg">Welcome to AuthHaven</h1>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-200 mb-8 md:mb-12 font-semibold">
            The ultimate secure authentication system.<br />
            Create your account and login with multiple options.<br />
            Showcasing full stack skills: modern UI, robust backend, and seamless user experience.
          </p>
          <div className="flex flex-col md:flex-row gap-6 md:gap-8 justify-center mb-10 md:mb-16 w-full items-center">

            <Link to="/signup" className="w-full md:w-auto">
              <button
                className={`w-full md:w-auto px-6 sm:px-10 py-4 sm:py-5 rounded-2xl cursor-pointer bg-amber-400 hover:bg-amber-500 text-gray-900 font-extrabold shadow-xl transition duration-200 text-xl sm:text-2xl flex items-center justify-center ${clicked ? 'scale-95 ring-4 ring-amber-400' : ''}`}
                onClick={() => { setClicked(true); setTimeout(() => setClicked(false), 300); }}
              >
                Get Started
              </button>
            </Link>
            <button
              className="w-full md:w-auto px-6 sm:px-10 py-4 sm:py-5 rounded-2xl bg-gray-800 cursor-pointer hover:bg-purple-700 text-white font-extrabold shadow-xl transition duration-200 text-xl sm:text-2xl flex items-center justify-center border-2 border-gray-700 mt-4 md:mt-0"
              onClick={() => window.scrollTo({ top: 1000, behavior: 'smooth' })}
            >
              Learn More
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-10 mt-8 md:mt-12 w-full">
            {[
              {
                title: 'Multi-Provider Login',
                desc: 'Sign in with Google, Facebook, Email, and more. Flexible and secure authentication for everyone.'
              },
              {
                title: 'Cutting-Edge Security',
                desc: 'Your data is protected with industry best practices, encryption, and modern security standards.'
              },
              {
                title: 'Full Stack Demo',
                desc: 'Built with React, Node.js, and more. Explore the code and see full stack skills in action.'
              }
            ].map((card, idx) => (
              <div
                key={card.title}
                className={`bg-gray-800/80 rounded-2xl p-6 sm:p-8 md:p-10 shadow-xl border-2 border-gray-700 transition-transform duration-200 ${hoveredTestimonial === idx ? 'scale-105 ring-4 ring-purple-400' : ''}`}
                onMouseEnter={() => setHoveredTestimonial(idx)}
                onMouseLeave={() => setHoveredTestimonial(null)}
              >
                <h2 className="text-2xl sm:text-3xl font-extrabold text-amber-400 mb-2 sm:mb-4">{card.title}</h2>
                <p className="text-base sm:text-lg md:text-xl text-gray-300">{card.desc}</p>
              </div>
            ))}
          </div>
        </section>
        {/* Additional Content Section */}
        <section className="max-w-6xl w-full mx-auto px-2 sm:px-4 md:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-purple-400 mb-6 md:mb-8">Why Choose AuthHaven?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-10">
            <div className="bg-gray-900/80 rounded-2xl p-6 sm:p-8 md:p-10 shadow-xl border-2 border-purple-700">
              <h3 className="text-2xl font-bold text-amber-400 mb-4">Easy Integration</h3>
              <p className="text-lg text-gray-300">Integrate AuthHaven into any project with simple APIs and clear documentation.</p>
            </div>
            <div className="bg-gray-900/80 rounded-2xl p-6 sm:p-8 md:p-10 shadow-xl border-2 border-purple-700">
              <h3 className="text-2xl font-bold text-amber-400 mb-4">Responsive Design</h3>
              <p className="text-lg text-gray-300">Enjoy a seamless experience on any device, with a fully responsive and accessible interface.</p>
            </div>
          </div>
        </section>
        {/* Skills Section */}
        <section className="max-w-6xl w-full mx-auto px-2 sm:px-4 md:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-amber-400 mb-6 md:mb-8">Full Stack Skills Demonstrated</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-10 text-left">
            <li className="bg-gray-800/80 rounded-2xl p-4 sm:p-6 md:p-8 shadow-xl border-2 border-gray-700 text-base sm:text-lg md:text-xl text-gray-200 font-semibold">Frontend: React, Tailwind CSS, Vite</li>
            <li className="bg-gray-800/80 rounded-2xl p-4 sm:p-6 md:p-8 shadow-xl border-2 border-gray-700 text-base sm:text-lg md:text-xl text-gray-200 font-semibold">Backend: Node.js, Express, JWT, OAuth</li>
            <li className="bg-gray-800/80 rounded-2xl p-4 sm:p-6 md:p-8 shadow-xl border-2 border-gray-700 text-base sm:text-lg md:text-xl text-gray-200 font-semibold">Database: MongoDB, Mongoose</li>
          </ul>
        </section>
        {/* Testimonials Section */}
        <section className="max-w-6xl w-full mx-auto px-2 sm:px-4 md:px-8 mt-10 md:mt-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-purple-400 mb-6 md:mb-8">What Users Say</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-10">
            <div className="bg-gray-900/80 rounded-2xl p-4 sm:p-6 md:p-8 shadow-xl border-2 border-purple-700">
              <p className="text-lg text-gray-200 italic mb-4">"AuthHaven made integrating authentication so easy and secure! Highly recommended for any project."</p>
              <span className="text-amber-400 font-bold">- Alex, Developer</span>
            </div>
            <div className="bg-gray-900/80 rounded-2xl p-4 sm:p-6 md:p-8 shadow-xl border-2 border-purple-700">
              <p className="text-lg text-gray-200 italic mb-4">"The multi-provider login options are a game changer. My users love the flexibility!"</p>
              <span className="text-amber-400 font-bold">- Priya, </span>
            </div>
            <div className="bg-gray-900/80 rounded-2xl p-4 sm:p-6 md:p-8 shadow-xl border-2 border-purple-700">
              <p className="text-lg text-gray-200 italic mb-4">"Beautiful UI, robust backend, and top-notch security. AuthHaven is the full package."</p>
              <span className="text-amber-400 font-bold">- Sam, Full Stack Engineer</span>
            </div>
          </div>
        </section>
        {/* FAQ Section */}
        <section className="max-w-6xl w-full mx-auto px-2 sm:px-4 md:px-8 mt-10 md:mt-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-amber-400 mb-6 md:mb-8">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-10 text-left">
            {faqs.map((faq, idx) => (
              <div
                key={faq.q}
                className={`bg-gray-800/80 rounded-2xl p-4 sm:p-6 md:p-8 shadow-xl border-2 border-gray-700 cursor-pointer transition-all duration-200 ${openFAQ === idx ? 'ring-4 ring-amber-400' : ''}`}
                onClick={() => setOpenFAQ(openFAQ === idx ? null : idx)}
              >
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-purple-400 mb-2 sm:mb-4 flex items-center justify-between">
                  {faq.q}
                  <span className="ml-2 text-amber-400">{openFAQ === idx ? '-' : '+'}</span>
                </h3>
                {openFAQ === idx && (
                  <p className="text-base sm:text-lg text-gray-300 mt-2">{faq.a}</p>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Footer Section */}

      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App
