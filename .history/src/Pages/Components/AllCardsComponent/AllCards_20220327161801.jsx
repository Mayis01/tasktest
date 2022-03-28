import "./AllCards.scss";
import Itm from "../../../Images/Itm.png";
import { ServicesMenu } from "../ServicesMenu/ServicesMenu";
import BreakFastData from "../../../JSON/ServicesMenu/ServicesMenu.json";
import ServicesMenuItems from "../../../JSON/ServicesMenuItems/menuItems.json";
import Item from "antd/lib/list/Item";

export function AllCards() {
  return (
    <>
      <section className="Wrapper">
        <ServicesMenu Data={BreakFastData} />
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
                    {menuItms.HorizonItems.map((Items) => {
                      return (
                        <>
                          <div className="Card">
                            <div>
                              <img src={Itm} alt="" />
                            </div>
                            <h1>{Items.h1}</h1>
                            <p>
                            {Items.}
                            </p>
                            <h3>$60.00</h3>
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
      </section>
    </>
  );
}
