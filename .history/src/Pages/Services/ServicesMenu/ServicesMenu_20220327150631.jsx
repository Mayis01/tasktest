import { Link } from "react-router-dom";
import "./Breakfast.scss";
import ServicesBreakFastData from "../../../JSON/ServicesMenu/ServicesMenu.json";

export default function ServicesMenu() {
  return (
    <>
      <section className="BreakfastMain">
        <div className="BreakfastWrapper">
          <div className="HeaderBfst">
            <hr />
            <ul className="d-flex justify-content-between Menu">
              {ServicesBreakFastData.map((item) => {
                return (
                  <Link to={"/" + item.Link} key={item.key}>
                    {" "}
                    <li>{item.Description}</li>
                  </Link>
                );
              })}
            </ul>

            <hr />
          </div>
        </div>
      </section>
    </>
  );
}
