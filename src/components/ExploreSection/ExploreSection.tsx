import React, { useState } from 'react';
import './ExploreSection.css';

interface Project {
    id: number;
    name: string;
    icon: string;
    chain: string;
    balance: string;
    uaw: string;
    uawChange: string;
    volume: string;
    volumeChange: string;
    graph: string;
}

const ExploreSection: React.FC = () => {
    const [activeFilter, setActiveFilter] = useState('Top dApps');

    const filters = ['Top dApps', 'Top NFT Collections', 'Top DeFi Projects', 'Top Tokens'];

    const projects: Project[] = [
        {
            id: 1,
            name: 'Magic Eden',
            icon: '/path-to-magic-eden-icon.svg',
            chain: 'Solana',
            balance: '$124.56M',
            uaw: '892.3K',
            uawChange: '+5.23%',
            volume: '$45.78M',
            volumeChange: '+12.34%',
            graph: '/path-to-graph-image.svg',
        },
        {
            id: 2,
            name: 'Meme Fi',
            icon: '/path-to-meme-fi-icon.svg',
            chain: 'Solana',
            balance: '$78.56M',
            uaw: '892.3K',
            uawChange: '+3.25%',
            volume: '$35.98M',
            volumeChange: '+4.34%',
            graph: '/path-to-graph-image.svg',
        },
        {
            id: 3,
            name: 'Soul',
            icon: '/path-to-soul-icon.svg',
            chain: 'Solana',
            balance: '$38.86M',
            uaw: '89.3k',
            uawChange: '+4.25%',
            volume: '$95.02M',
            volumeChange: '+4.14%',
            graph: '/path-to-graph-image.svg',
        },
        {
            id: 4,
            name: 'Hamster',
            icon: '/path-to-meme-fi-icon.svg',
            chain: 'Solana',
            balance: '$18.56M',
            uaw: '351.3K',
            uawChange: '+1.25%',
            volume: '$33.24M',
            volumeChange: '+5.34%',
            graph: '/path-to-graph-image.svg',
        },
        {
            id: 5,
            name: 'Rum',
            icon: '/path-to-rum-icon.svg',
            chain: 'Solana',
            balance: '$71.56M',
            uaw: '897.3K',
            uawChange: '+5.25%',
            volume: '$15.98M',
            volumeChange: '+4.74%',
            graph: '/path-to-graph-image.svg',
        },
        {
            id: 6,
            name: 'Atlantis',
            icon: '/path-to-Atlaantis-icon.svg',
            chain: 'Etherum',
            balance: '$28.53M',
            uaw: '75.3K',
            uawChange: '+1.25%',
            volume: '$75.31M',
            volumeChange: '+4.30%',
            graph: '/path-to-graph-image.svg',
        },
        {
            id: 7,
            name: 'Rat',
            icon: '/path-to-rat-icon.svg',
            chain: 'Solana',
            balance: '$71.56M',
            uaw: '898.3K',
            uawChange: '+7.25%',
            volume: '$24.98M',
            volumeChange: '+3.54%',
            graph: '/path-to-graph-image.svg',
        },
        {
            id: 8,
            name: 'Dogs',
            icon: '/path-to-dogs-icon.svg',
            chain: 'Ton',
            balance: '$18.52M',
            uaw: '392.3K',
            uawChange: '+9.25%',
            volume: '$79.20M',
            volumeChange: '+5.31%',
            graph: '/path-to-graph-image.svg',
        },
        {
            id: 9,
            name: 'Bitcoin',
            icon: '/path-to-Bitcoin-icon.svg',
            chain: 'Bitcoin',
            balance: '$78.51M',
            uaw: '82.3K',
            uawChange: '+4.35%',
            volume: '$85.98M',
            volumeChange: '+3.34%',
            graph: '/path-to-graph-image.svg',
        },
        {
            id: 10,
            name: 'Matic',
            icon: '/path-to-matic-icon.svg',
            chain: 'Solana',
            balance: '$72.56M',
            uaw: '657.3K',
            uawChange: '+1.25%',
            volume: '$35.8M',
            volumeChange: '+3.34%',
            graph: '/path-to-graph-image.svg',
        }, 
        // TODO: make it easy to add more project data here from a backend source.
    ];

    return (
        <section className="bg-purple-900 text-white py-20">
            <div className="container mx-auto">
                <h2 className="text-4xl font-bold mb-4">Far more to explore</h2>
                <p className="mb-8">
                    Peerless, actionable, Solana-focused data and coverage on the widest selection of dapps, NFT collections, DeFi
                    projects and more. View top collections, trending dapps, trader volume and maybe, just maybe, uncover the
                    next blockchain unicorn.
                </p>

                <div className="grid grid-cols-3 gap-4 mb-8">
                    <div className="bg-purple-800 p-4 rounded">
                        <h3 className="text-3xl font-bold">1,897</h3>
                        <p>dApps</p>
                    </div>
                    <div className="bg-purple-800 p-4 rounded">
                        <h3 className="text-3xl font-bold">5,912</h3>
                        <p>NFT Collections</p>
                    </div>
                    <div className="bg-purple-800 p-4 rounded">
                        <h3 className="text-3xl font-bold">5</h3>
                        <p>Chain</p>
                    </div>
                </div>

                <div className="mb-4">
                    {filters.map((filter) => (
                        <button
                            key={filter}
                            className={`mr-4 px-4 py-2 rounded ${
                                activeFilter === filter ? 'bg-purple-600 text-white' : 'bg-purple-800 text-gray-300'
                            }`}
                            onClick={() => setActiveFilter(filter)}
                        >
                            {filter}
                        </button>
                    ))}
                </div>

                <table className="w-full mb-8">
                    <thead>
                    <tr className="text-left bg-purple-800">
                        <th className="p-2">#</th>
                        <th className="p-2">Name</th>
                        <th className="p-2">Balance</th>
                        <th className="p-2">UAW</th>
                        <th className="p-2">% UAW</th>
                        <th className="p-2">Volume</th>
                        <th className="p-2">% Volume</th>
                        <th className="p-2">24h UAW</th>
                    </tr>
                    </thead>
                    <tbody>
                    {projects.map((project) => (
                        <tr key={project.id} className="border-b border-purple-800">
                            <td className="p-2">{project.id}</td>
                            <td className="p-2 flex items-center">
                                <img src={project.icon} alt={project.name} className="w-6 h-6 mr-2" />
                                {project.name}
                                <span className="ml-2 text-xs bg-purple-700 px-1 rounded">{project.chain}</span>
                            </td>
                            <td className="p-2">{project.balance}</td>
                            <td className="p-2">{project.uaw}</td>
                            <td className="p-2">{project.uawChange}</td>
                            <td className="p-2">{project.volume}</td>
                            <td className="p-2">{project.volumeChange}</td>
                            <td className="p-2">
                                <img src={project.graph} alt="24h UAW graph" className="w-20 h-8" />
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>

                <div className="text-center">
                    <a
                        href="/rankings"
                        className="bg-purple-600 hover:bg-purple-500 text-white font-bold py-2 px-4 rounded inline-block"
                    >
                        Explore 1,897 Solana Products
                    </a>
                </div>
            </div>
        </section>
    );
};

export default ExploreSection;