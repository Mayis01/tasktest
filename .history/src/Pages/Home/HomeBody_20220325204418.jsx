import { Link } from "react-router-dom";
import img from "../../Images/imgExample.png";
import "./HomeBody.scss";
import MainData from "../../JSON/HomeBody/homeBody.json"

export default function HomeBody() {
  return (
    <>
      <section className="CanvasForImgs">
{
    MainData.map()
}
        <div className="Heads">
          <div>
            <h1>Gallery</h1>
            <div className="BlueBorder"></div>
          </div>
          <div className="ImgsHorizon">
            <div>
              <div>
                <img src={img} width={208} height={149} />
                <p>Standart</p>
              </div>
            </div>
            <div>
              <div>
                <img src={img} width={208} height={149} />
                <p>Standart</p>
              </div>
            </div>{" "}
            <div>
              <div>
                <img src={img} width={208} height={149} />
                <p>Standart</p>
              </div>
            </div>{" "}
            <div>
              <div>
                <img src={img} width={208} height={149} />
                <p>Standart</p>
              </div>
            </div>{" "}
            <div>
              <div>
                <img src={img} width={208} height={149} />
                <p>Standart</p>
              </div>
            </div>{" "}
            <div>
              <div>
                <img src={img} width={208} height={149} />
                <p>Standart</p>
              </div>
            </div>
          </div>

          <div className="SeeAllDiv">
             <Link to ="/Rooms">see all</Link>
          </div>
        </div>
      </section>
    </>
  );
}
