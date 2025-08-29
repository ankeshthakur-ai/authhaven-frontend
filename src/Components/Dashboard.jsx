
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          setError('No authentication token found. Please log in.');
          setLoading(false);
          navigate('/');
          return;
        }
        const res = await axios.get('https://authhaven-backend-production.up.railway.app/api/auth/me', {
          headers: {'x-auth-token': token},
        });
        setUser(res.data.user);
      } catch (err) {
        setError(err.response?.data?.message || 'Failed to fetch user info.');
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-800 flex flex-col">
      {/* Dashboard Navbar */}
      <nav className="w-full h-20 flex items-center justify-between px-8 bg-gray-900/90 backdrop-blur-lg border-b border-gray-800 shadow-2xl z-10 sticky top-0">
        <span className="text-2xl font-extrabold text-amber-400 tracking-wide drop-shadow-[0_2px_8px_rgba(251,191,36,0.5)]">AuthHaven</span>
        <button
          onClick={handleLogout}
          className="bg-amber-400 hover:bg-amber-500 text-gray-900 font-bold py-2 px-6 rounded-full shadow-lg hover:scale-105 active:scale-95 transition duration-200"
        >
          Logout
        </button>
      </nav>

      {/* Dashboard Content */}
      <main className="flex-1 flex items-center justify-center">
        <div className="bg-gradient-to-br from-gray-900/80 via-purple-900/70 to-gray-800/80 p-10 rounded-3xl shadow-[0_16px_48px_0_rgba(31,38,135,0.45)] border border-gray-700 mx-4 mt-12 mb-8 w-full max-w-md relative transition-transform duration-500 hover:scale-[1.05] hover:rotate-[-2deg] hover:[transform:perspective(900px)_rotateY(8deg)]" style={{perspective: '900px'}}>
          <div className="absolute inset-0 rounded-3xl pointer-events-none" style={{boxShadow: '0 8px 48px 0 rgba(251,191,36,0.18), 0 3px 16px 0 rgba(168,85,247,0.18)'}}></div>
          {loading ? (
            <div className="text-amber-400 text-xl font-bold text-center animate-pulse">Loading...</div>
          ) : error ? (
            <div className="text-red-400 text-xl font-bold text-center animate-shake">{error}</div>
          ) : (
            <>
              <div className="flex flex-col items-center mb-8">
                <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-purple-500 to-amber-400 flex items-center justify-center text-white text-5xl font-bold shadow-[0_8px_32px_rgba(168,85,247,0.25)] mb-4 transform transition-transform duration-500 hover:scale-110 hover:rotate-12 hover:[transform:perspective(900px)_rotateY(-12deg)]">
                  {user?.name ? user.name[0].toUpperCase() : 'U'}
                </div>
                <h2 className="text-3xl font-extrabold text-amber-400 mb-2 text-center drop-shadow-[0_2px_12px_rgba(251,191,36,0.7)]">
                  Welcome, {user?.name || 'User'}!
                </h2>
              </div>
              <div className="space-y-8">
                <div className="bg-gray-800/80 rounded-xl p-8 shadow-[0_8px_32px_rgba(31,38,135,0.25)] border border-gray-700 flex flex-col items-center transform transition-transform duration-500 hover:scale-105 hover:rotate-2 hover:[transform:perspective(900px)_rotateY(8deg)]">
                  <span className="text-gray-400 text-sm mb-1">Email</span>
                  <span className="text-lg font-bold text-amber-400">{user?.email}</span>
                </div>
                {/* <div className="bg-gray-800/80 rounded-lg p-4 shadow border border-gray-700 flex flex-col items-center">
                  <span className="t--ext-gray-400 text-sm mb-1">Password</span>
                  <span className="text-lg font-bold text-amber-400">{user?.password || '********'}</span>
                </div> */}
              </div>
            </>
          )}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
