import React from 'react';
import './HunterTokenSection.css';

const HunterTokenSection: React.FC = () => {
    return (
        <section className="hunter-token-section relative overflow-hidden">
            <div className="section-divider"></div>
            <div className="hunter-tokens-container">
                <img src="/HunterTokens.webp" alt="Hunter Tokens" className="hunter-tokens" />
            </div>
            <div className="container mx-auto text-center relative z-10 py-24">
                <h2 className="text-5xl font-bold mb-4 text-white">Hunting for a decentralized future</h2>
                <p className="text-xl mb-8 text-white">
                    with $HUNTER - the scaling token for SolHunt
                </p>
                <a
                    href="/hunter/tokenomics"
                    className="bg-white text-indigo-600 font-bold py-3 px-6 rounded-full inline-block hover:bg-indigo-100 transition duration-300"
                >
                    Learn more
                </a>
            </div>
        </section>
    );
};

export default HunterTokenSection;