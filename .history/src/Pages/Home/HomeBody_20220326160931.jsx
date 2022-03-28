import { Link } from "react-router-dom";
import { Modal } from "antd";
import "./HomeBody.scss";
import MainData from "../../JSON/HomeBody/homeBody.json";
import { useState } from "react";
import { ModalBody } from "react-bootstrap";

export default function HomeBody() {
  const [visible, setVisible] = useState(false);
  const [selectedImgSrc, setSelectedImgSrc] = useState("");

  const imgClick = (imgSrc) => {
    setSelectedImgSrc(imgSrc);
    setVisible(true);
  };

  const onCancel =() =>{
      setVisible(false)
  }
  return (
    <>
      <div className="CanvasForImgs">
        {MainData.map((tables) => {
          return (
            <div className="Heads">
              <div>
                <h1>{tables.Head}</h1>
                <div className="BlueBorder"></div>
              </div>
              <div className="ImgsHorizon d-lg-flex justify-content-between">
                {tables.Images.map((image) => {
                  return (
                    <div>
                      <div>
                        <img
                          onClick={() => {
                            imgClick(image.image);
                          }}
                          src={image.image}
                         
                        />
                        <p>{image.p}</p>
                      </div>
                    </div>
                  );
                })}{" "}
              </div>{" "}
              <Modal className="Mod" onCancel={onCancel}  visible={visible}>
            
                  <img src={selectedImgSrc} />
               
              </Modal>
              <div className="SeeAllDiv">
                <Link to={"/" + tables.link}>see all</Link>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
