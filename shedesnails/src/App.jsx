// import { useState } from "react";
import Navbar from "./components/Navbar";
import CarouselPage from "./components/CarouselPage";
import "./App.css";
function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Navbar />
        <CarouselPage />
      </div>
    </>
  );
}

export default App;
