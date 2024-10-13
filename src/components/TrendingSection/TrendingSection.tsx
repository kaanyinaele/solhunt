import React from "react";  
import './TrendingSection.css';  

const TrendingSection: React.FC = () => {  
    const categories = ['Quests', 'Airdrops', 'Games', 'Explore', 'Chains', 'DeFi', 'NFTs', ];  

    return (  
        <section className=" py-7 bg-purple-300 relative overflow-hidden ">  
            <div className="container mx-auto">  
                <h2 className="text">Trending</h2>  
                <div className="moving-categories ">  
                    {categories.map((category, index) => (  
                        <a  
                            key={index}  
                            href={`/rankings/${category.toLowerCase()}`}  
                            className="bg-purple-700 text-white px-4 py-2 rounded-full hover:bg-purple-600 mr-4 font-bold "  
                        >  
                            {category}  
                        </a>  
                    ))}  
                </div>  
            </div>  
        </section>  
    );  
};  

export default TrendingSection;