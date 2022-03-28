import "./Home.scss";
import HomeHeaderData from "../../JSON/HomeHeader/homeHeader.json";
import { Carousel } from "react-bootstrap";
import HomeBackgroud from "../../Images/HomeBackground.png";

export default function Home() {
  return (
    <>
      <section className="HomeSection">
        {" "}
        <Carousel fade>
          <Carousel.Item>
            <div>
              <div className="boxH1">
                <h1>Stay with us feel like home</h1>
              </div>
              <div className="boxH2">
                <h2>
                  Leo malesuada porta ultricies vel fusce. Faucibus nulla vitae
                  faucibus netus tristique integer ultrices.
                </h2>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
          <div>
            <Carous
              <div className="boxH1">
                <h1>Stay with us feel liksdaf asdf e home</h1>
              </div>
              <div className="boxH2">
                <h2>
                  Leo malesuada porta ultricies vel fusce. Faucibus nulla vitae
                  faucibus netus tristique integsadf asdf saer ultrices.
                </h2>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
          <div>
              <div className="boxH1">
                <h1>Stay with us feel like home dsffsdfsf </h1>
              </div>
              <div className="boxH2">
                <h2>
                  Leo malesuada porta ultricies vel fusce. Faucibus nulla vitae
                  faucibus netus tristique integer ultric dsf asdf adfes.
                </h2>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </section>
    </>
  );
}
