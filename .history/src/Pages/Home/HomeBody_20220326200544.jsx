import { Link } from "react-router-dom";

import "./HomeBody.scss";
import MainData from "../../JSON/HomeBody/homeBody.json";


export default function HomeBody() {
  
  return (
    <>
   
        <div className="CanvasForImgs">
        {MainData.map((tables) => {
          return (
            <div className="Heads">
              <div className="DescritionImages">
                <h1>{tables.Head}</h1>
                <div className="BlueBorder"></div>
              </div>
              <div className="ImgsHorizon">
                {tables.Images.map((image) => {
                  return (
                    <div>
                      <div>
                        <img
                          onClick={() => {
                            imgClick(image.image);
                          }}
                          src={image.image}
                          width={208}
                          height={149}
                        />
                        <p>{image.p}</p>
                      </div>
                    </div>
                  );
                })}{" "}
              </div>{" "}
            
              <div className="SeeAllDiv">
                <Link to={"/" + tables.link}>see all</Link>
              </div>
            </div>
         )
        })}
      </div>
   
      
    </>
  );
}
