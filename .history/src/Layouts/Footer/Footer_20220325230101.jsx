import "./Footer.scss"
import Insta from "../../Images/instaIcon.png";
import facebook from "../../Images/fbIcon.png";
import twitter from "../../Images/twitterIcon.png";

export default function Footer() {
  return (
    <>
      <footer className="Footer">
        <div>
          <div>
            <div><img src={facebook} alt="" /></div>
            <div><img src={Insta} alt="" /></div>
            <div><img src={facebook} alt="" /></div>
          </div>
        </div>
      </footer>
    </>
  );
}
