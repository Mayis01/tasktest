import "./Header.scss";
import logo from "../../Images/logo.png";
import headerVector from "../../Images/headerVector.png";
import Menu from "../../JSON/Menu/menu.json";
import { Link } from "react-router-dom";
import { Container, Nav, Navbar, NavbarBrand } from "react-bootstrap";
import { Offcanvas } from "bootstrap";

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
      <Navbar className="NavBar" expand={false}>
        <Container fluid>
          <Navbar.Toggle aria-controls="offcanvasNavbar" aria-label="navbar" />
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel">
                <NavbarBrand>
                  {" "}
                  <img src={logo} width={180} height={180} alt="" />{" "}
                </NavbarBrand>
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className={`justify-content-end flex-grow-1 pe-3  `}>
                <ul>
                  {Menu.map((tem) => {
                    return (
                      <li key={tem.key}>
                        <Link to={"/" + tem.link}>
                          <button>{tem.menuItem}</button>
                        </Link>
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
