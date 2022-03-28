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
              <Modal className="Mod"  visible={visible}>
              import { Modal, Button } from 'antd';

class App extends React.Component {
  state = { visible: false };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
      <>
        <Button type="primary" onClick={this.showModal}>
          Open Modal with customized button props
        </Button>
        <Modal
          title="Basic Modal"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          okButtonProps={{ disabled: true }}
          cancelButtonProps={{ disabled: true }}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
      </>
    );
  }
}

ReactDOM.render(<App />, mountNode);
                  <img src={selectedImgSrc} />
               
              </Modal>
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
