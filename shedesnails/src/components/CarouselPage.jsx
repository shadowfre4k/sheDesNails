import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Test from "../assets/react.svg";
import "./CarouselPage.css";
function CarouselPage() {
  return (
    <div>
      <Splide className="carousel">
        <SplideSlide>
          <img src={Test} alt="Image 1" />
        </SplideSlide>
        <SplideSlide>
          <img src={Test} alt="Image 1" />
        </SplideSlide>
        <SplideSlide>
          <img src={Test} alt="Image 1" />
        </SplideSlide>
      </Splide>
      <div className="buttons">
        <button>button 1</button>
        <button>button 2</button>
      </div>
    </div>
  );
}

export default CarouselPage;
