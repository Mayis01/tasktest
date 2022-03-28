import "./Header.scss";
import logo from "../../Images/logo.png";
import headerVector from "../../Images/headerVector.png";
import Menu from "../../JSON/Menu/menu.json";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <header className="MainHeader">
        <div className="MenuLogo">
          <div >
            <Link to={"/"}>
              <img src={logo} alt="LO GO" />
            </Link>
          </div>
          <div>
            <ul>
              {Menu.map((item) => {
                return (
                  <Link to={"/" + item.link}>
                    <li key={item.key}>{item.menuItem}</li>
                  </Link>
                );
              })}
            </ul>
          </div>
        </div>
        <div>
          <Link to={"*"}>
            <div >
              <img src={headerVector} style={{padding}} alt="" />
            </div>
            <div>
              <p>Cart</p>
            </div>
          </Link>
        </div>
      </header>
    </>
  );
}
