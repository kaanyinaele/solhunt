import React from 'react';
import './Header.css';

const Header: React.FC = () => {
    return (
        <header className="bg-purple-900 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex items-center">
                    <img src="/path-to-logo.svg" alt="SolHunt Logo" className="h-8 w-auto mr-2" />
                    <span className="text-xl font-bold">SolHunt</span>
                </div>
                <nav>
                    <ul className="flex space-x-4">
                        <li><a href="#" className="hover:text-green-400">Explore Web3</a></li>
                        <li><a href="#" className="hover:text-green-400">Rankings</a></li>
                        <li><a href="#" className="hover:text-green-400">Rewards</a></li>
                        <li><a href="#" className="hover:text-green-400">Portfolio</a></li>
                    </ul>
                </nav>
                <div className="flex items-center space-x-4">
                    <span className="bg-purple-700 px-2 py-1 rounded">$0.005</span>
                    <button className="bg-purple-700 hover:bg-purple-600 px-4 py-2 rounded">Connect →</button>
                </div>
            </div>
        </header>
    );
};

export default Header;