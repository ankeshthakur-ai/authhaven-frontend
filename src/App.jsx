import './App.css';
import Navbar from './Components/Navbar';
import Login from './Components/Login';
import Signup from './Components/Signup';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import Dashboard from './Components/Dashboard';
import Footer from './Components/Footer';

// ✅ Protected Route wrapper
const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  return token ? children : <Navigate to="/" />;
};



function LandingPage() {
  // FAQ interaction state
  const [openFAQ, setOpenFAQ] = useState(null);
  // Button click feedback
  const [clicked, setClicked] = useState(false);
  // Testimonials hover state
  const [hoveredTestimonial, setHoveredTestimonial] = useState(null);

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

  // Quick Tips section data
  const quickTips = [
    {
      tip: 'Use a strong password for your account.',
      icon: '🔒',
    },
    {
      tip: 'Never share your login credentials.',
      icon: '🙅‍♂️',
    },
    {
      tip: 'Enable two-factor authentication if available.',
      icon: '📱',
    }
  ];

  // Add more content sections
  const features = [
    { icon: '🛡️', title: 'Security First', desc: 'Industry-standard encryption and best practices.' },
    { icon: '⚡', title: 'Lightning Fast', desc: 'Optimized for speed and instant feedback.' },
    { icon: '🌐', title: 'Global Access', desc: 'Accessible from anywhere, any device.' },
    { icon: '🔗', title: 'Easy Integration', desc: 'Simple APIs for quick setup in any project.' },
    { icon: '🎨', title: 'Modern UI', desc: 'Beautiful, animated, and responsive design.' },
    { icon: '🧑‍💻', title: 'Open Source', desc: 'Fork, clone, and contribute on GitHub.' }
  ];

  const team = [
    { name: 'Ankesh Kumar Thakur', role: 'Full Stack Developer', img: 'https://avatars.githubusercontent.com/u/227470310?v=4', github: 'https://github.com/ankeshthakur-ai' }
  ];

    // Testimonials data
    const testimonials = [
      {
        name: 'Priya S.',
        text: 'AuthHaven made integrating authentication a breeze. The UI is stunning and the security is top-notch!',
        img: 'https://randomuser.me/api/portraits/women/68.jpg',
      },
      {
        name: 'Rahul M.',
        text: 'I learned so much from exploring the code. The documentation and demo are super helpful.',
        img: 'https://randomuser.me/api/portraits/men/65.jpg',
      },
      {
        name: 'Emily T.',
        text: 'The team is responsive and the project is open source. Highly recommend for learning and real use!',
        img: 'https://randomuser.me/api/portraits/women/12.jpg',
      },
    ];

    // Roadmap data
    const roadmap = [
      { phase: 'v1.0', desc: 'Initial release with email/password and Google login.' },
      { phase: 'v1.1', desc: 'Add Facebook login and improved dashboard UI.' },
      { phase: 'v2.0', desc: 'Role-based access, user profile editing, and more integrations.' },
      { phase: 'v2.1', desc: 'Mobile-first redesign and advanced analytics.' },
    ];

  return (
    <div className="min-h-screen w-full flex flex-col relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 -z-10 animate-gradient bg-gradient-to-br from-gray-900 via-purple-900 to-gray-800"></div>
      <Navbar />

      {/* Responsive main container */}
      <main className="flex flex-col items-center flex-1 px-2 sm:px-4 md:px-8 pt-28 md:pt-36 pb-16 md:pb-24 text-center space-y-20 md:space-y-32">
        <section className="max-w-6xl w-full mx-auto px-2 sm:px-4 md:px-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-amber-400 mb-8 drop-shadow-lg">
            Welcome to AuthHaven
          </h1>
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

        {/* Quick Tips Section */}
        <section className="max-w-4xl w-full mx-auto px-2 sm:px-4 md:px-8 mt-10">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-purple-400 mb-6">Quick Security Tips</h2>
          <div className="flex flex-wrap gap-6 justify-center">
            {quickTips.map((tip) => (
              <div
                key={tip.tip}
                className="flex flex-col items-center justify-center bg-gradient-to-tr from-purple-700/80 to-amber-400/80 rounded-2xl p-6 shadow-xl border-2 border-gray-700 min-w-[220px] max-w-xs hover:scale-105 transition-transform duration-200"
              >
                <span className="text-4xl mb-2">{tip.icon}</span>
                <p className="text-base font-semibold text-gray-100">{tip.tip}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="max-w-6xl w-full mx-auto px-2 sm:px-4 md:px-8 mt-10">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-amber-400 mb-6">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
            {faqs.map((faq, idx) => (
              <div
                key={faq.q}
                className={`bg-gray-800/80 rounded-2xl p-6 shadow-xl border-2 border-gray-700 cursor-pointer transition-all duration-200 ${openFAQ === `faq${idx}` ? 'ring-4 ring-amber-400 scale-105' : ''}`}
                onClick={() => setOpenFAQ(openFAQ === `faq${idx}` ? null : `faq${idx}`)}
              >
                <h3 className="text-lg font-bold text-purple-400 mb-2 flex items-center justify-between">
                  {faq.q}
                  <span className="ml-2 text-amber-400">{openFAQ === `faq${idx}` ? '-' : '+'}</span>
                </h3>
                {openFAQ === `faq${idx}` && (
                  <p className="text-base text-gray-300 mt-2">{faq.a}</p>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Features Section (expanded) */}
        <section className="max-w-6xl w-full mx-auto px-2 sm:px-4 md:px-8 mt-10">
          <h2 className="text-3xl font-extrabold text-purple-400 mb-8">Why AuthHaven?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {features.map(f => (
              <div key={f.title} className="bg-gray-800/80 rounded-2xl p-8 shadow-xl border-2 border-gray-700 flex flex-col items-center hover:scale-105 transition-transform duration-200">
                <span className="text-4xl mb-2">{f.icon}</span>
                <h3 className="text-xl font-bold text-amber-400 mb-2">{f.title}</h3>
                <p className="text-base text-gray-300">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>
        {/* Team Section */}
        <section className="max-w-6xl w-full mx-auto px-2 sm:px-4 md:px-8 mt-10">
          <h2 className="text-3xl font-extrabold text-amber-400 mb-8">Meet the Team</h2>
          <div className="flex flex-wrap gap-8 justify-center items-center">
            {team.map(member => (
              <div key={member.name} className="bg-gray-900/80 rounded-2xl p-8 shadow-xl border-2 border-purple-700 flex flex-col items-center w-64">
                <img src={member.img} alt={member.name} className="w-20 h-20 rounded-full mb-4 shadow-lg object-cover" />
                <h3 className="text-lg font-bold text-amber-400 mb-1">{member.name}</h3>
                <p className="text-gray-300 text-base mb-2">{member.role}</p>
                <a href={member.github} target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-amber-400 font-bold">GitHub</a>
              </div>
            ))}
          </div>
        </section>
        {/* How It Works Section */}
        <section className="max-w-6xl w-full mx-auto px-2 sm:px-4 md:px-8 mt-10">
          <h2 className="text-3xl font-extrabold text-purple-400 mb-8">How It Works</h2>
          <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
            {[{step:'Sign Up',desc:'Create your account with email or social login.'},{step:'Login',desc:'Access your dashboard securely.'},{step:'Explore',desc:'Enjoy features and manage your profile.'}].map((item) => (
              <div key={item.step} className="bg-gradient-to-tr from-purple-700/80 to-amber-400/80 rounded-2xl p-8 shadow-xl border-2 border-gray-700 flex-1 hover:scale-105 transition-transform duration-200">
                <span className="text-4xl font-extrabold text-white mb-4 block">{item.step[0]}</span>
                <h4 className="text-xl font-bold text-amber-400 mb-2">{item.step}</h4>
                <p className="text-lg text-gray-200">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="max-w-6xl w-full mx-auto px-2 sm:px-4 md:px-8 mt-10">
          <h2 className="text-3xl font-extrabold text-amber-400 mb-8">What Users Say</h2>
          <div className="flex flex-wrap gap-8 justify-center items-center">
            {testimonials.map(t => (
              <div key={t.name} className="bg-gray-800/80 rounded-2xl p-8 shadow-xl border-2 border-purple-700 flex flex-col items-center w-80">
                <img src={t.img} alt={t.name} className="w-16 h-16 rounded-full mb-4 shadow-lg object-cover" />
                <p className="text-base text-gray-200 mb-2 italic">"{t.text}"</p>
                <h3 className="text-lg font-bold text-amber-400">- {t.name}</h3>
              </div>
            ))}
          </div>
        </section>

        {/* Roadmap Section */}
        <section className="max-w-4xl w-full mx-auto px-2 sm:px-4 md:px-8 mt-10">
          <h2 className="text-2xl font-extrabold text-purple-400 mb-6">Project Roadmap</h2>
          <div className="flex flex-col gap-6">
            {roadmap.map(r => (
              <div key={r.phase} className="bg-gray-900/80 rounded-xl p-6 shadow border-2 border-amber-400 flex flex-col items-start">
                <span className="text-lg font-bold text-amber-400 mb-1">{r.phase}</span>
                <p className="text-base text-gray-200">{r.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        {/* <section className="max-w-4xl w-full mx-auto px-2 sm:px-4 md:px-8 mt-10 mb-20">
          <h2 className="text-2xl font-extrabold text-amber-400 mb-6">Contact & Feedback</h2>
          <form className="bg-gray-900/80 rounded-2xl p-8 shadow-xl border-2 border-purple-700 flex flex-col gap-6 items-center">
            <input type="text" placeholder="Your Name" className="w-full max-w-md px-4 py-2 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-amber-400" />
            <input type="email" placeholder="Your Email" className="w-full max-w-md px-4 py-2 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-amber-400" />
            <textarea placeholder="Your Message" rows={4} className="w-full max-w-md px-4 py-2 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-amber-400" />
            <button type="submit" className="px-6 py-3 rounded-2xl bg-amber-400 hover:bg-amber-500 text-gray-900 font-extrabold shadow-xl transition duration-200 text-lg">Send Message</button>
          </form>
        </section> */}

        {/* Additional sections (unchanged) */}
        {/* Why Choose, Skills, Testimonials, FAQ */}
        {/* ... your same sections code ... */}

      </main>
      <Footer />
    </div>
  );
}

function App() {
  // Use a key that changes when token changes to force re-render
  const [token, setToken] = useState(localStorage.getItem("token"));
  React.useEffect(() => {
    const onStorage = () => setToken(localStorage.getItem("token"));
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  return (
    <Router>
      <Routes>
        {/* If token exists → go to dashboard, else → landing */}
        <Route
          path="/"
          element={
            token
              ? <Navigate to="/dashboard" />
              : <LandingPage key={token || 'no-token'} />
          }
        />

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Protect dashboard */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;