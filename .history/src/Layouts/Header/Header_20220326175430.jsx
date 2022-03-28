import style from "./Header.module.scss";
import logo from "../../Images/logo.png";
import headerVector from "../../Images/headerVector.png";
import Menu from "../../JSON/Menu/menu.json";
import { Link } from "react-router-dom";
import {
  Container,
  Nav,
  Navbar,
  NavbarBrand,
  OffcanvasBody,
  OffcanvasHeader,
  OffcanvasTitle,
} from "react-bootstrap";

export default function Header() {
  return (
    <>
      <header className={style.MainHeader}>
        <div className={style.MenuLogo}>
          <div>
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
            <div>
              <img src={headerVector} alt="" />
            </div>
            <div>
              <p>Cart</p>
            </div>
          </Link>
        </div>
      </header>
      <Navbar className={style.navbar} expand={false}>
        <Container fluid>
          <Navbar.Toggle
            aria-controls="offcanvasNavbar"
            className={style.wrapperResponseMenuLogo}
            aria-label="navbar"
          />
          <Navbar.Offcanvas
            className={style.canvasstyle}
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="top"
          >
            <OffcanvasHeader closeButton>
              <OffcanvasTitle id="offcanvasNavbarLabel">
                <NavbarBrand>
                  {" "}
                  <img
                    src={logo}
                    width={180}
                    height={180}
                    className={style.ResponseLogo}
                    alt=""
                  />{" "}
                </NavbarBrand>
              </OffcanvasTitle>
            </OffcanvasHeader>
            <OffcanvasBody>
              <Nav
                className={`justify-content-end flex-grow-1 pe-3 ${style.ResponseMenu} `}
              >
                <ul>
                  {Menu.map((menuItem) => {
                    return (
                      <li key={menuItem.key}>
                        <Link to={"/" + menuItem.link}>
                          {menuItem.menuItem}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </Nav>
            </OffcanvasBody>
          </Navbar.Offcanvas>

          <div>
            <img src={logo} alt="" />
          </div>

          <div>
            
          </div>
        </Container>
      </Navbar>
    </>
  );
}
