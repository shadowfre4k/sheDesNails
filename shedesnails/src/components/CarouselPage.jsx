import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import sheDes1 from "../assets/sheDesPics/sheDes1.jpg";
import sheDes2 from "../assets/sheDesPics/sheDes2.jpg";
import sheDes3 from "../assets/sheDesPics/sheDes3.jpg";
import sheDes4 from "../assets/sheDesPics/sheDes4.jpg";
import sheDes5 from "../assets/sheDesPics/sheDes5.jpg";
import "./CarouselPage.css";
function CarouselPage() {
  return (
    <div>
      <div className="carouselContainer">
        <Splide className="carousel">
          <SplideSlide>
            <img src={sheDes1} alt="Image 1" />
          </SplideSlide>
          <SplideSlide>
            <img src={sheDes2} alt="Image 1" />
          </SplideSlide>
          <SplideSlide>
            <img src={sheDes3} alt="Image 1" />
          </SplideSlide>
          <SplideSlide>
            <img src={sheDes4} alt="Image 1" />
          </SplideSlide>
          <SplideSlide>
            <img src={sheDes5} alt="Image 1" />
          </SplideSlide>
        </Splide>
      </div>
      <div className="buttons">
        <button>button 1</button>
        <button>button 2</button>
      </div>
    </div>
  );
}

export default CarouselPage;
