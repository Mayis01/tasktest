import "./Footer.scss"
import Insta from "../../Images/insta";
import fb from "../../Images/fbIcon.png";
import tw from "../../Images/twitterIcon.png";

export default function Footer() {
  return (
    <>
      <footer className="Footer">
        <div>
          <div>
            <div><img src={fb} alt="" /></div>
            <div><img src={Insta} alt="" /></div>
            <div><img src={tw} alt="" /></div>
          </div>
        </div>
      </footer>
    </>
  );
}
