import "./AllCards.scss";
import { ServicesMenu } from "../ServicesMenu/ServicesMenu";
import BreakFastData from "../../../JSON/ServicesMenu/ServicesMenu.json";
import Modal from "../Modal/Modal";
import { useState } from "react";
import "../Modal/Modal.scss";
import img from "../../../Images/modal.jpg";

export function AllCards({ MenuData }) {
  const [modal, setModal] = useState(false);
  return (
    <>
      <section className="Wrapper">
        <ServicesMenu Data={BreakFastData} />

        {MenuData.map((Canva) => {
          return (
            <div className="Section" key={Canva.Description}>
              <div className="Description">
                <h1>{Canva.Description}</h1>
                <div></div>
              </div>

              <div className="Canva">
                {Canva.MainItems.map((menuItms) => {
                  return (
                    <>
                      <div className="Horizon" key={menuItms.key}>
                        {menuItms.HorizonItems.map((tems) => {
                          return (
                            <>
                              <div className="Card" key={tems.key}>
                                <div>
                                  <img src={tems.ItemImage} alt="" />
                                </div>
                                <h1>{tems.h1}</h1>
                                <p>{tems.p}</p>
                                <h3>{`$${tems.h3}`}</h3>
                                <button
                                  onClick={() => setModal((modal) => !modal)}
                                >
                                  Add To Cart
                                </button>
                              </div>
                            </>
                          );
                        })}
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
          );
        })}

        <Modal
          isOpened={modal}
          onModalClose={() => setModal((modal) => !modal)}
        >
          <div className="ModalCard">
            <form action="">
              {MenuData.map((values) => {
                return (
                  <>
                    {" "}
                    <div
                      className="ModalCardImgAndPrice"
                      key={values.Description}
                    >
                      {valuesHorizonItms.map((it) => {
                        return (
                          <>
                            {" "}
                            <div>
                              <img src={it.i} alt="" />
                            </div>
                            <div className="PriceDescription">
                              <h1>24.00$</h1>
                              <h2>Gravida nibh</h2>
                            </div>
                          </>
                        );
                      })}
                    </div>
                  </>
                );
              })}

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
                  <input type="checkbox" /> Sem id
                </p>

                <h4>16$</h4>
              </div>

              <div className="CheckAccsesouares">
                <p>
                  {" "}
                  <input type="checkbox" /> Sed id
                </p>

                <h4>8$</h4>
              </div>

              <div className="CheckAccsesouares">
                <p>
                  {" "}
                  <input type="checkbox" /> Eu molestie
                </p>

                <h4>Free</h4>
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

              <button className="Bton" type="Submit">
                <div className="d-flex justify-content-between">
                  <p>Add To Cart</p>
                  <p>34.00$</p>
                </div>
              </button>
            </form>{" "}
          </div>
        </Modal>
      </section>
    </>
  );
}
