import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Test from "../assets/react.svg";
import "./CarouselPage.css";
function CarouselPage() {
  return (
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
  );
}

export default CarouselPage;
