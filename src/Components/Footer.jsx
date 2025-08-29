import React from 'react'



const Footer = () => {
    return (
        <footer className="w-full bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 border-t border-gray-800 mt-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12 flex flex-col items-center">
                <div className="flex flex-col sm:flex-row sm:justify-between w-full items-center gap-6 sm:gap-8 mb-6 sm:mb-8">
                    <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
                        <span className="text-xl sm:text-2xl font-extrabold text-amber-400 mb-2 tracking-wide">AuthHaven</span>
                        <p className="text-sm sm:text-base text-gray-400">Secure Authentication System &mdash; Full Stack Demo</p>
                    </div>
                    <div className="flex gap-4 sm:gap-6 mt-4 sm:mt-0">
                        <a href="https://github.com/ankeshthakur-ai" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-purple-400 hover:text-amber-400 font-bold text-base sm:text-lg transition-colors duration-200">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="inline-block"><path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.157-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.529 2.341 1.088 2.91.833.091-.646.35-1.088.636-1.339-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.254-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.747-1.025 2.747-1.025.546 1.378.202 2.396.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.847-2.337 4.695-4.566 4.944.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.749 0 .268.18.579.688.481C19.138 20.184 22 16.438 22 12.021 22 6.484 17.523 2 12 2z"></path></svg>
                            GitHub
                        </a>
                    </div>
                </div>

                <div className="text-center w-full border-t border-gray-800 pt-4 sm:pt-6">
                    <p className="text-xs sm:text-md text-gray-500">&copy; {new Date().getFullYear()} AuthHaven. Made with <span className="text-amber-400">&#10084;</span> by Ankesh Kumar Thakur.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer
