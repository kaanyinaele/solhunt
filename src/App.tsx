import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Intro from './components/Intro/Intro';
import TrendingSection from './components/TrendingSection/TrendingSection';
import ProductBubbles from './components/ProductBubbles/ProductBubbles';
import ExploreSection from "./components/ExploreSection/ExploreSection";
import HunterTokenSection from "./components/HunterTokenSection/HunterTokenSection";
import Footer from "./components/Footer/Footer";
import ProductSubmissionForm from './components/ProductSubmissionForm/ProductSubmissionForm';
import ProductsPage from './components/ProductsPage/ProductsPage';

const HomePage = () => (
    <>
        <Intro />
        <div className="container mx-auto">
            <div className="flex">
                <div className="w-3/4">
                    <TrendingSection />
                </div>
                <div className="w-1/4">
                    <ProductBubbles />
                </div>
            </div>
        </div>
        <ExploreSection />
        <HunterTokenSection />
    </>
);

function App() {
    return (
        <Router>
            <div className="App">
                <Header />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/products" element={<ProductsPage />} />
                    <Route path="/new-product" element={<ProductSubmissionForm />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;