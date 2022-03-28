import "./Home.scss";
import { useEffect, useState } from "react";
import HomeHeaderData from "../../JSON/HomeHeader/homeHeader.json";
import { Carousel } from "react-bootstrap";
import HomeBackgroud from "../../Images/HomeBackground.png";

export default function Home() {
  const [DateYear, setDateYear] = useState("");
  const [DateMonth, setDateMonth] = useState("");
  const [DateDay, setDateDay] = useState("");
  const [count, setCount] = useState(0);

  useEffect(() => {
    setDateYear(new Date().getFullYear());
    setDateMonth(new Date().getUTCMonth());
    setDateDay(new Date().getDay());
  }, [DateYear, DateMonth, DateDay]);

  const Minus = () => {
    if (count === 0) {
      return;
    }

    return setCount((count) => count--);
  };

  const Plus = () => {
    if (count === 10) {
      return;
    }

    return setCount((count) => count++);
  };

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
              <h3>Check Out</h3>
              <input type="date" />
            </div>

            <div>
              <h3> Rooms</h3>
              <div>
                <button onClick={} type="button">-</button>
                <p>{count}</p>
                <button type="button">+</button>
              </div>
            </div>

            <div>
              <h3> Adults</h3>
              <p>21.02.2022</p>
            </div>

            <div>
              <h3>Children</h3>
              <p>21.02.2022</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
