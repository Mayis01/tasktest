import "./Header.scss";
import logo from "../../Images/logo.png";
import headerVector from "../../Images/headerVector.png";
import Menu from "../../JSON/Menu/menu.json";
import { Link } from "react-router-dom";
import { Container, Navbar } from "react-bootstrap";

export default function Header() {
  return (
    <>
      <header className="MainHeader">
        <div className="MenuLogo">
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
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel">
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
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav
                className={`justify-content-end flex-grow-1 pe-3 ${style.ResponseMenu} `}
              >
                <ul>
                  {Menu.map((menuItem) => {
                    return (
                      <li key={menuItem.key}>
                        <Link to={"/" + menuItem.link}>
                          <button>{menuItem.Description}</button>{" "}
                        </Link>
                      </li>
                    );
                  })}

                  {contacts.map((item) => {
                    return (
                      <li key={item.key} className={style.liofadress}>
                        <a href={item.hreflink} target="_blank" rel="nofollow">
                          <img
                            aria-hidden={true}
                            src={item.img}
                            width={40}
                            height={40}
                            alt=""
                          />
                          <p>{item.text}</p>
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}
