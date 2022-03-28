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
              <div>
                <h2>
                  Leo malesuada porta ultricies vel fusce. Faucibus nulla vitae
                  faucibus netus tristique integer ultrices.
                </h2>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
          <div>
              <div>
                <h1>Stay with us feel like home</h1>
              </div>
              <div>
                <h2>
                  Leo malesuada porta ultricies vel fusce. Faucibus nulla vitae
                  faucibus netus tristique integer ultrices. uuuuuuuuuuuuu
                </h2>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
          <div>
              <div>
                <h1>Stay with us feel like home</h1>
              </div>
              <div>
                <h2>
                  Leo malesuada porta ultricies vel fusce. Faucibus nulla vitae
                  faucibus netus tristique integer ultrices. xxxxxxxxxxxxxxxxxx
                </h2>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </section>
    </>
  );
}
