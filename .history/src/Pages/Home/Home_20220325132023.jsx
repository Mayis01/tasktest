import "./Home.scss";
import HomeHeaderData from "../../JSON/HomeHeader/homeHeader.json";
import { Carousel } from "react-bootstrap";
import HomeBackgroud from "../../Images/HomeBackground.png"


export default function Home() {
  return (

    <>




<Carousel fade>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={HomeBackgroud}
      alt="First slide"
    />
    <Carousel.Caption className="position-absolute">
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={HomeBackgroud}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={HomeBackgroud}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>











      <section className="HomeSection">
        



        






        <div>
          <div>
            <h1>Stay with us feel like home</h1>
          </div>
          <div>
            <h2>
              Leo malesuada porta ultricies vel fusce. Faucibus nulla vitae
              faucibus netus tristique integer ultrices.
            </h2>
          </div>
        </div>
      </section>
    </>
  );
}
