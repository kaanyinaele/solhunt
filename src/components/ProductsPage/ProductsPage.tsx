import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

interface Product {
    id: number;
    name: string;
    description: string;
    // TODO: Add other relevant fields
}

const ProductsPage: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        // TODO: build the backend to provide the list of products.
        const dummyProducts: Product[] = [
            { id: 1, name: "DeFi Protocol", description: "A decentralized finance protocol" },
            { id: 2, name: "NFT Marketplace", description: "A platform for trading NFTs" },
            { id: 3, name: "Blockchain Game", description: "An exciting blockchain-based game" },
        ];
        setProducts(dummyProducts);
    }, []);

    return (
        <div className="container mx-auto px-4 py-8 font-itallic">
            <h1 className="text-3xl font-bold mb-6">Explore Products</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product) => (
                    <div key={product.id} className="bg-purple-300 rounded-lg shadow-md p-6">
                        <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
                        <p className="text-gray-600 mb-4">{product.description}</p>
                        <Link to={`/products/${product.id}`} className="text-white-500 hover:underline">
                            Learn more
                        </Link>
                    </div>
                ))}
            </div>
            <div className="mt-8 text-center">
                <Link to="/new-product" className="bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700">
                    Submit a New Product
                </Link>
            </div>
        </div>
    );
};

export default ProductsPage;