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
                    <h1>{item.h1}</h1>
                    <h2>{item.h2}</h2>
                  </div>
                </div>
              </Carousel.Item>
            );
          })}
        </Carousel>
      </section>
    </>
  );
}
