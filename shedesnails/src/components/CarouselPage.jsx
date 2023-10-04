import "./CarouselPage.css";
import Carousel from "react-bootstrap/Carousel";
import Test from "../assets/react.svg";

const CarouselPage = () => {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img
            className=" resize d-flex justify-content-center align-items-center"
            src={Test}
            alt="First image"
          />
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default CarouselPage;
