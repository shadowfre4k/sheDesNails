// import { useState } from "react";
import Navbar from "./components/Navbar";
import CarouselPage from "./components/CarouselPage";
import Bio from "./components/Bio";
import Details from "./components/Details";
import "./App.css";
function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Navbar />
        <Bio />
        <CarouselPage />
        <Details />
      </div>
    </>
  );
}

export default App;
