import "./Home.scss";
import { useEffect, useState } from "react";
import HomeHeaderData from "../../JSON/HomeHeader/homeHeader.json";
import { Carousel } from "react-bootstrap";
import HomeBackgroud from "../../Images/HomeBackground.png";

export default function Home() {
  
  useEffect(() => {
    DateYear = (new Date().getFullYear());
    DateMonth = (new Date().getUTCMonth());
    DateDay = (new Date().getDay());
  }, [DateYear, DateMonth, DateDay]);

  console.log(DateYear);

  return (
    <>
      <section className="HomeSection">
        <div>
          <Carousel>
            {HomeHeaderData.map((item) => {
              return (
                <Carousel.Item interval={5000} key={item.key}>
                  <div className="HeaderBG">
                    <div className="boxH1">
                      <h1>{item.h1}</h1>
                      <h2>{item.h2}</h2>
                    </div>
                  </div>
                </Carousel.Item>
              );
            })}
          </Carousel>

          <div className="formStyle">
            <div>
              <h3> Check In</h3>
              <p>{DateDay + "." + DateMonth + "." + DateYear}</p>
            </div>

            <div>
              <h3> Check In</h3>
              <p>21.02.2022</p>
            </div>

            <div>
              <h3> Check In</h3>
              <p>21.02.2022</p>
            </div>

            <div>
              <h3> Check In</h3>
              <p>21.02.2022</p>
            </div>

            <div>
              <h3> Check In</h3>
              <p>21.02.2022</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
