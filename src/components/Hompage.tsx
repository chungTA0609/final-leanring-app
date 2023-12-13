import { Carousel } from "react-bootstrap";
import ExampleCarouselImage1 from "../assets/images/bg-material.png";
import ExampleCarouselImage2 from "../assets/images/bg-auth-dark.jpg";
import ExampleCarouselImage3 from "../assets/images/bg-auth.jpg";
import LogoImage from "../assets/images/logo-light.png";

import Topbar from "./Topbar";
import { Link } from "react-router-dom";
const Homepage = () => {
  return (
    <>
      <Topbar />
      <div className="logo-box">
        <Link to="/" className="logo logo-dark text-center">
          <span className="logo-sm">
            <img src={LogoImage} height="24" />
            <span className="logo-lg-text-light">Minton</span>
          </span>
          <span className="logo-lg">
            <img src={LogoImage} height="20" />
            <span className="logo-lg-text-light">M</span>
          </span>
        </Link>

        <Link to="/" className="logo logo-light text-center">
          <span className="logo-sm">
            <img src={LogoImage} height="24" />
          </span>
          <span className="logo-lg">
            <img src={LogoImage} height="20" />
          </span>
        </Link>
      </div>
      <Carousel data-bs-theme="dark">
        <Carousel.Item interval={1000}>
          <img
            height={"500px"}
            className="d-block w-100"
            src={ExampleCarouselImage1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h5>First slide label</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img
            height={"500px"}
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
            height={"500px"}
            className="d-block w-100"
            src={ExampleCarouselImage3}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h5>Third slide label</h5>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};
export default Homepage;
