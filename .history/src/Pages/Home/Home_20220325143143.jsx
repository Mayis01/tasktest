import "./Home.scss";
import HomeHeaderData from "../../JSON/HomeHeader/homeHeader.json";
import { Carousel } from "react-bootstrap";
import HomeBackgroud from "../../Images/HomeBackground.png";

export default function Home() {
  return (
    <>
      <section className="HomeSection">
        <Carousel>
          {HomeHeaderData.map((item) => {
            return (
              <Carousel.Item interval={5000}>
                <div>
                  <div className="boxH1">
                    <h1>Stay with us feel like home </h1>
                    <h2>
                      Leo malesuada porta ultricies vel fusce. Faucibus nulla
                      vitae faucibus netus tristique integer ultrices.
                    </h2>
                  </div>
                </div>
              </Carousel.Item>
            );
          })}

          <Carousel.Item interval={5000}>
            <div>
              <div className="boxH1">
                <h1>Stay with us feel like home X2</h1>
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
                <h1>Stay with us feel like home X3 </h1>
                <h2>
                  Leo malesuada porta ultricies vel fusce. Faucibus nulla vitae
                  faucibus netus tristique integer ultrices.
                </h2>
              </div>
              <div className="boxH2"></div>
            </div>
          </Carousel.Item>

          <Carousel.Item interval={5000}>
            <div>
              <div className="boxH1">
                <h1>Stay with us feel like home X4 </h1>
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
                <h1>Stay with us feel like home X5 </h1>
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
