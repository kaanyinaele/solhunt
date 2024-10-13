import React from 'react';
import { NavLink } from 'react-router-dom';
import './Intro.css';

const Intro: React.FC = () => {
    return (
        <section className="bg-purple-900 text-white py-16">
            <div className="container mx-auto text-center">
                <h1 className="text-5xl font-bold mb-4">Solana's Largest Product Store</h1>
                <p className="text-xl mb-8">Discover, Track & Trade Everything DeFi, NFT and Gaming</p>
                <div className="flex justify-center space-x-4">
                    <NavLink
                        to="/products"
                        className={({ isActive }) =>
                            isActive ? "bg-green-600 text-white px-6 py-3 rounded-full" : "bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full"
                        }
                    >
                        Explore Products
                    </NavLink>
                    <NavLink
                        to="/new-product"
                        className={({ isActive }) =>
                            isActive ? "bg-purple-600 text-white px-6 py-3 rounded-full" : "bg-purple-700 hover:bg-purple-600 text-white px-6 py-3 rounded-full"
                        }
                    >
                        Submit a Product
                    </NavLink>
                </div>
            </div>
        </section>
    );
};

export default Intro;