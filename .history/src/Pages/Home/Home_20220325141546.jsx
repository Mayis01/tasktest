import "./Home.scss";
import HomeHeaderData from "../../JSON/HomeHeader/homeHeader.json";
import { Carousel } from "react-bootstrap";
import HomeBackgroud from "../../Images/HomeBackground.png";

export default function Home() {
  return (
    <>
      <section className="HomeSection">
        <Carousel>
          <Carousel.Item interval={5000}>
          <div>
            <div className="boxH1">
              <h1>Stay with us feel like home asd </h1>
            </div>
            <div className="boxH2">
              <h2>
                Leo malesuada porta ultricies vel fusce. Faucibus nulla vitae
                faucibus netus tristique integer ultrices.
              </h2>
            </div>
          </div>
          </Carousel.Item>

          <Carousel.Item interval={5000}>
          <div>
            <div className="boxH1">
              <h1>Stay with us feel like homeasdas</h1>
            </div>
            <div className="boxH2">
              <h2>
                Leo malesuada porta ultricies vel fusce. Faucibus nulla vitae
                faucibus netus tristique integer ultrices.
              </h2>
            </div>
          </div>
          </Carousel.Item >

          <Carousel.Item interval={5000}>
            <Carousel.Caption>
              
            </Carousel.Caption>
          <div>
            <div className="boxH1">
              <h1>Stay with us feel like home asd </h1>
            </div>
            <div className="boxH2">
              <h2>
                Leo malesuada porta ultricies vel fusce. Faucibus nulla vitae
                faucibus netus tristique integer ultrices.
              </h2>
            </div>
          </div>
          </Carousel.Item>

          <Carousel.Item interval={5000}>
          <div>
            <div className="boxH1">
              <h1>Stay with us feel like home ads dasd </h1>
            </div>
            <div className="boxH2">
              <h2>
                Leo malesuada porta ultricies vel fusce. Faucibus nulla vitae
                faucibus netus tristique integer ultrices.
              </h2>
            </div>
          </div>
          </Carousel.Item>
        
        </Carousel>
      </section>
    </>
  );
}
