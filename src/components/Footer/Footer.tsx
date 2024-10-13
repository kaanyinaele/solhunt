import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
    return (
        <footer className="bg-purple-950 text-white py-8">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
                    <div className='sim'>
                        <h2 className="text-2xl font-bold mb-4">Subscribe to our newsletter</h2>
                        <p className="mb-4">Get the Week in Review newsletter and all the latest trends directly to your inbox.</p>
                        <form className="flex flex-col md:flex-row gap-2">
                            <input type="email" placeholder="Your email" className="p-2 rounded bg-gray-800" />
                            <button type="submit" className="bg-blue-600 text-white p-2 rounded">Subscribe</button>
                        </form>
                        <label className="flex items-center mt-2">
                            <input type="checkbox" className="mr-2" />
                            <span className="text-sm">I have read the Privacy Policy and I understand that I can unsubscribe anytime.</span>
                        </label>
                    </div>
                    <div className='push'>
                        <h3 className="text-xl font-bold mb-4">Follow us</h3>
                        <div className="flex space-x-2 mb-4">
                            <a href="https://x.com/solhunt" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400">
                                X (Twitter)
                            </a>
                            <a href="https://t.me/solhunt" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400">
                                Telegram
                            </a>
                        </div>
                        <h3 className="text-xl font-bold mb-2">SolHunt App</h3>
                        <p className="mb-4">Coming soon to app stores</p>
                        <a href="#" className="text-white hover:text-blue-400 mr-4">iOS</a>
                        <a href="#" className="text-white hover:text-blue-400">Android</a>
                    </div>
                </div>
                <div className="right">
                    <p>&copy; 2024 SolHunt. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;