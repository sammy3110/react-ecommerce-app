import "./App.css";
import { Layout } from "./components/styled-components/Layout";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import PopularProducts from "./components/PopularProducts";
import AboutUs from "./components/AboutUs";
import ProductDetails from "./components/ProductDetails";

function App() {
  return (
    <div className="app-container">
      <Layout>
        <Navbar/>
        <Hero/>
        <PopularProducts/>
        <AboutUs/>
        <ProductDetails/>
      </Layout>
    </div>
  );
}

export default App;
