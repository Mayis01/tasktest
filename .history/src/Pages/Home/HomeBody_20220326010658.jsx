import { Link } from "react-router-dom";
import { Modal } from "antd";
import "./HomeBody.scss";
import MainData from "../../JSON/HomeBody/homeBody.json";
import { useState } from "react";

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
                        <img
                          onClick={() => {
                            imgClick(
                              `image.image}`
                            );
                          }}
                          src={`http://localhost:5000/uploads/${image.image}`}
                          width={208}
                          height={149}
                        />
                        <p>{image.p}</p>
                      </div>
                    </div>
                  );
                })}{" "}
                <Modal
                  title="Basic Modal"
                  visible={visible}
                  onOk={() => setVisible(false)}
                  onCancel={() => setVisible(false)}
                >
                  <img src={selectedImgSrc} />
                </Modal>
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
