import { Carousel } from "react-bootstrap";
import Section from "./Section";
import ExampleCarouselImage1 from "../assets/images/bg-material.png";
import ExampleCarouselImage2 from "../assets/images/bg-auth-dark.jpg";
import ExampleCarouselImage3 from "../assets/images/bg-pattern.png";

const IndividualIntervalsExample = () => {
  return (
    <>
      <div className="row mb-2">
        <div className="col-12">
          <Carousel data-bs-theme="dark">
            <Carousel.Item interval={1000}>
              <img
                className="d-block w-100"
                src={ExampleCarouselImage1}
                alt="First slide"
              />
              <Carousel.Caption>
                <h5>First slide label</h5>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={1000}>
              <img
                className="d-block w-100"
                src={ExampleCarouselImage2}
                alt="Second slide"
              />
              <Carousel.Caption>
                <h5>Second slide label</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={1000}>
              <img
                className="d-block w-100"
                src={ExampleCarouselImage3}
                alt="Third slide"
              />
              <Carousel.Caption>
                <h5>Third slide label</h5>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
      <Section />
    </>
  );
};

export default IndividualIntervalsExample;
