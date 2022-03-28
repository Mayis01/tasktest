import "./Footer.scss";
import insta from "../../Images/instaIcon.png";
import fb from "../../Images/fbIcon.png";
import tw from "../../Images/twitterIcon.png";
import footerMenu from "../../JSON/FooterMenu/footerMenu.json";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <footer className="Footer">
        <div>
          <div>
            <div className="Icons">
              <div>
                <a href="#" target="_blank">
                  <img src={fb} />
                </a>
              </div>
              <div>
                <a href="#" target="_blank">
                  <img src={tw} />
                </a>
              </div>
              <div>
                <a href="#" target="_blank">
                  <img src={insta} />
                </a>
              </div>
            </div>

            <div className="footerMenu">
              <ul>
                {footerMenu.map((items) => {
                  return (
                    <Link to="/%">
                      {" "}
                      <li key={items.key}>{items.h1}</li>{" "}
                    </Link>
                  );
                })}
              </ul>
            </div>

            <div className="footerBorder"></div>

            <div className="CopyRight">
              <p>© 2022 All Rights Reserved , Created by Mayis Martirosyan</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
