import "./Home.scss";
import { useEffect, useState } from "react";
import HomeHeaderData from "../../JSON/HomeHeader/homeHeader.json";
import { Carousel } from "react-bootstrap";

export default function Home() {
  const [DateYear, setDateYear] = useState("");
  const [DateMonth, setDateMonth] = useState("");
  const [DateDay, setDateDay] = useState("");
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  useEffect(() => {
    setDateYear(new Date().getFullYear());
    setDateMonth(new Date().getUTCMonth());
    setDateDay(new Date().getDay());
  }, [DateYear, DateMonth, DateDay]);

  class controlPanel {
    constructor(count, count1, count2){
      
    }
    this.count = count;
    this.count1 = count2;
    this.count1 = count2;

    Minus() {
      if (count === 0) {
        return;
      }
      return setCount((count) => count - 1);
    }

    Minus1() {
      if (count1 === 0) {
        return;
      }
      return setCount1((count1) => count1 - 1);
    }

    Minus2() {
      if (count2 === 0) {
        return;
      }
      return setCount2((count2) => count2 - 1);
    }

    Plus() {
      if (count === 10) {
        return;
      }
      return setCount((count) => count + 1);
    }

    Plus1() {
      if (count1 === 10) {
        return;
      }
      return setCount1((count1) => count1 + 1);
    }

    Plus2() {
      if (count2 === 10) {
        return;
      }
      return setCount2((count2) => count2 + 1);
    }
  }
  // const Minus = () => {
  //   if (count === 0) {
  //     return;
  //   }
  //   return setCount((count) => count - 1);
  // };

  // const Minus1 = () => {
  //   if (count1 === 0) {
  //     return;
  //   }
  //   return setCount1((count1) => count1 - 1);
  // };

  // const Minus2 = () => {
  //   if (count2 === 0) {
  //     return;
  //   }
  //   return setCount2((count2) => count2 - 1);
  // };

  // const Plus = () => {
  //   if (count === 10) {
  //     return;
  //   }
  //   return setCount((count) => count + 1);
  // };

  // const Plus1 = () => {
  //   if (count1 === 10) {
  //     return;
  //   }
  //   return setCount1((count1) => count1 + 1);
  // };

  // const Plus2 = () => {
  //   if (count2 === 10) {
  //     return;
  //   }
  //   return setCount2((count2) => count2 + 1);
  // };

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
                <button onClick={controlPanel.Minus} type="button">
                  -
                </button>
                <p>{count}</p>
                <button onClick={controlPanel.Plus} type="button">
                  +
                </button>
              </div>
            </div>

            <div>
              <h3> Adults</h3>
              <div>
                <button onClick={controlPanel.Minus1} type="button">
                  -
                </button>
                <p>{count1}</p>
                <button onClick={controlPanel.Plus1} type="button">
                  +
                </button>
              </div>
            </div>

            <div>
              <h3>Children</h3>
              <div>
                <button onClick={controlPanel.Minus2} type="button">
                  -
                </button>
                <p>{count2}</p>
                <button onClick={controlPanel.Plus2} type="button">
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
