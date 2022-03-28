import { Link } from "react-router-dom";
import "./ServicesMenu.scss";


export  function ServicesMenu({Data}) {
  return (
    <>
      <section className="BreakfastMain">
        <div className="BreakfastWrapper">
          <div className="HeaderBfst">
           <div></div>
           <br />
            <ul className="d-flex justify-content-between Menu">
              {Data.map((item) => {
                return (
                  <Link to={"/" + item.Link} key={item.key}>
                    {" "}
                    <li>{item.Description}</li>
                  </Link>
                );
              })}
            </ul>
<br />
           <div></div>
          </div>
        </div>
      </section>
    </>
  );
}
