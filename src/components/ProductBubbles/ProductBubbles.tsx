import React, { useState } from 'react';
import './ProductBubbles.css';

interface Product {
    id: string;
    name: string;
    icon: string;
    description: string;
}

const ProductBubbles: React.FC = () => {
    const [hoveredProduct, setHoveredProduct] = useState<Product | null>(null);

    const products: Product[] = [
        { id: 'phantom', name: 'Phantom', icon: '/Phantom-Logo-Purple.svg', description: 'A crypto wallet reimagined for DeFi & NFTs' },
        { id: 'jupiter', name: 'Jupiter', icon: '/Jupiter-logo-bright.svg', description: 'A DEX aggregator for Solana' },
        // TODO: Add more products here.
    ];

    return (
        <div className="relative">
            <div className="flex flex-wrap justify-center">
                {products.map((product) => (
                    <div
                        key={product.id}
                        className="m-2 cursor-pointer"
                        onMouseEnter={() => setHoveredProduct(product)}
                        onMouseLeave={() => setHoveredProduct(null)}
                    >
                        <img src={product.icon} alt={product.name} className="w-20 h-15 rounded-full" />
                    </div>
                ))}
            </div>
            {hoveredProduct && (
                <div className="absolute bg-white shadow-lg rounded p-4 max-w-xs">
                    <h3 className="text-lg font-bold">{hoveredProduct.name}</h3>
                    <p>{hoveredProduct.description}</p>
                    <a href={`/product/${hoveredProduct.id}`} className="text-purple-600 hover:underline">
                        Learn more
                    </a>
                </div>
            )}
        </div>
    );
};

export default ProductBubbles;