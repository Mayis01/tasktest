import { Link } from "react-router-dom";
import "./HomeBody.scss";
import MainData from "../../JSON/HomeBody/homeBody.json";

export default function HomeBody() {
  const [visible, setVisible] = useState(false);
  const [selectedImgSrc, setSelectedImgSrc] = useState("");

  const imgClick = (imgSrc) => {
    setSelectedImgSrc(imgSrc);
    setVisible(true);
  };
  return (
    <>
      <section className="CanvasForImgs">
        {MainData.map((tables) => {
          return (
            <div className="Heads">
              <div>
                <h1>{tables.Head}</h1>
                <div className="BlueBorder"></div>
              </div>
              <div className="ImgsHorizon">
                {tables.Images.map((image) => {
                  return (
                    <div>
                      <div>
                        <img  onClick={() => {
                imgClick(`http://localhost:5000/uploads/${image.image}`);
              }}
              src={`http://localhost:5000/uploads/${image.image}`} src={} width={208} height={149} />
                        <p>{image.p}</p>
                      </div>
                    </div>
                  );
                })}{" "}
              </div>

              <div className="SeeAllDiv">
                <Link to={"/" + tables.link}>see all</Link>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
}
