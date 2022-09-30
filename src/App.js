import Navbar from "./components/Navbar";

import Hero from "./views/Hero";
import Works from "./views/Works";
import Categories from "./views/Categories";
import Recommendation from "./views/Recommendation";

import Footer from "./views/Footer";

function App() {
  return (
    <div className="w-screen bg-[#FDF9F5] text-center flex flex-col items-center px-16">
      <Navbar />
      <Hero />
      <Works />
      <Categories />

      <Recommendation />
      <Footer />
    </div>
  );
}

export default App;
