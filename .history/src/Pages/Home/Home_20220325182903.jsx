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

  const Minus = () => {
    if (count === 0) {
      return;
    }
    return setCount((count) => count - 1);
  };

  const Minus1 = () => {
    if (count1 === 0) {
      return;
    }
    return setCount1((count1) => count1 - 1);
  };

  const Minus2 = () => {
    if (count2 === 0) {
      return;
    }
    return setCount2((count2) => count2 - 1);
  };

  const Plus = () => {
    if (count === 10) {
      return;
    }
    return setCount((count) => count + 1);
  };

  const Plus1 = () => {
    if (count1 === 10) {
      return;
    }
    return setCount1((count1) => count1 + 1);
  };

  const Plus2 = () => {
    if (count2 === 10) {
      return;
    }
    return setCount2((count2) => count2 + 1);
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
            <form action="">


              
            </form>
           
          </div>
        </div>
      </section>
    </>
  );
}
