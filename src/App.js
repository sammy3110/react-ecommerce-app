import "./App.css";
import { Layout } from "./components/styled-components/Layout";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import PopularProducts from "./components/PopularProducts";

function App() {
  return (
    <div className="app-container">
      <Layout>
        <Navbar/>
        <Hero/>
        <PopularProducts/>
      </Layout>
    </div>
  );
}

export default App;
