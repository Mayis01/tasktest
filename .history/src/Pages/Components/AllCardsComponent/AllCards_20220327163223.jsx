import "./AllCards.scss";

import { ServicesMenu } from "../ServicesMenu/ServicesMenu";
import BreakFastData from "../../../JSON/ServicesMenu/ServicesMenu.json";
import ServicesMenuItems from "../../../JSON/ServicesMenuItems/menuItems.json";

export function AllCards() {
  return (
    <>
      <section className="Wrapper">
        <ServicesMenu Data={BreakFastData} />

        {ServicesMenuItems.map((Canva) => {
          return (
            <div className="Section">
              <div className="Description">
                <h1>Pizza</h1>
                <div></div>
              </div>

              <div className="Canva">
                {ServicesMenuItems.map((menuItms) => {
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
                                <button>Add To Cart</button>
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
      </section>
    </>
  );
}
