import "./Footer.scss"
import insta from "../../Images/instaIcon.png";
import fb from "../../Images/fbIcon.png";
import tw from "../../Images/twitterIcon.png";

export default function Footer() {
  return (
    <>
      <footer className="Footer">
        <div>
          <div>
            <div><img src={fb} /></div>
            <div><img src={insta} /></div>
            <div><img src={tw} alt="" /></div>
          </div>
        </div>
      </footer>
    </>
  );
}
