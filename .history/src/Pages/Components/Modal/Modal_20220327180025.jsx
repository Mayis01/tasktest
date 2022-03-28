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
              <div className="PriceDescription">
                <h1>24.00$</h1>
                <h2>Gravida nibh</h2>
              </div>
            </div>

            <p>
              Aliquam pharetra quis tellus tortor, semper ipsum elementum
              sollicitudin. Nec non sit vitae ultrices sit vitae ipsum diam
              pharetra.
            </p>

            <hr />
            <div className="CheckAccsesouares ">
              <p>
                {" "}
                <input type="checkbox" /> Risus, tortor
              </p>

              <h4>10$</h4>
            </div>

            <div className="CheckAccsesouares">
              <p>
                {" "}
                <input type="checkbox" /> Risus, tortor
              </p>

              <h4>10$</h4>
            </div>

            <div className="CheckAccsesouares">
              <p>
                {" "}
                <input type="checkbox"  /> Risus, tortor
              </p>

              <h4>10$</h4>
            </div>

            <div className="CheckAccsesouares">
              <p>
                {" "}
                <input type="checkbox" /> Risus, tortor
              </p>

              <h4>10$</h4>
            </div>

            <hr />

            <div className="Count">
              <p>quantity</p>
              <div>
                <button type="button">+</button>
                <p>1</p>
                <button type="button">+</button>
              </div>
            </div>

            <hr />

            <button type="Submit">p</button>
          </div>
        </div>
      </div>
    </>
  );
}
