import img from "../../Images/imgExample.png";
import "./HomeBody.scss";

export default function HomeBody() {
  return (
    <>
      <section className="CanvasForImgs">
        <div>
          <h1>Gallery</h1>
          <div className="BlueBorder"></div>
        </div>
        <div className="ImgsHorizon">
          <div>
            <div>
              <img src={img} width={208} height={149} />
            </div>
            
          </div>
          <div>
            <div>
             <img src={img} width={208} height={149} />
            </div>
          </div>{" "}
          <div>
            <div>
             <img src={img} width={208} height={149} />
            </div>
          </div>{" "}
          <div>
            <div>
             <img src={img} width={208} height={149} />
            </div>
          </div>{" "}
          <div>
            <div>
             <img src={img} width={208} height={149} />
            </div>
          </div>{" "}
          <div>
            <div>
             <img src={img} width={208} height={149} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
