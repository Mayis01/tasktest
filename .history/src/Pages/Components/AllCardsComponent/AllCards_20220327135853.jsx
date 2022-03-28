import "./AllCards.scss";
import Itm from "../../../Images/Itm.png"

export function AllCards() {
  return (
    <>
      <section className="Wrapper">
          <div className="Section">

                <div className="Description">
                        <h1>Pizza</h1>
                        <div></div>
                </div>

                <div className="Canva">
                    
                    <div  className="Horizon">
                    
                        <div className="Card">
                                <div>
                                    <img src={Itm} alt="" />
                                </div>
                                <h1>Facilisi ac</h1>
                                <p>Platea nunc cum amet  odio lectus. Cras ut sem aliquet in.</p>
                                <h3>$60.00</h3>
                        </div>

                    </div>

                </div>
          </div>
      </section>
    </>
  );
}
