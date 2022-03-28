import "./AllCards.scss";
import { ServicesMenu } from "../ServicesMenu/ServicesMenu";
import BreakFastData from "../../../JSON/ServicesMenu/ServicesMenu.json";
import Modal from "../Modal/Modal";
import { useState } from "react";

export function AllCards({ MenuData }) {
    const [modal,setModal] = useState()
  return (
    <>
      <section className="Wrapper">
        <ServicesMenu Data={BreakFastData} />

        {MenuData.map((Canva) => {
          return (
            <div className="Section">
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
                                <button onClick={}>Add To Cart</button>
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

        <Modal isOpened={modal()}>

        </Modal>
      </section>
    </>
  );
}
