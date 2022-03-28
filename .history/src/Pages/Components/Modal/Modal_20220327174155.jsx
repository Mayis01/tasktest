import "./Modal.scss";
import img from "../../../Images/modal.jpg";

export default function Modal(props) {
  return (
    <>
      <div
        className={`modalWrapper ${props.isOpened ? "open" : "close"}`}
        style={{ ...props.style }}
      >
        <div className="modalBody">
          <div className="modalClose" onClick={props.onModalClose}>
            X
          </div>
          <div className="ModalCard">
            <div className="ModalCardImgAndPrice">
              <div>
                <img src={img} alt="" />
              </div>
              <div className="">
                  <h1>24.00$</h1>
                  <h2>Gravida nibh</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
