import "./Footer.scss";
import insta from "../../Images/instaIcon.png";
import fb from "../../Images/fbIcon.png";
import tw from "../../Images/twitterIcon.png";

export default function Footer() {
  return (
    <>
      <footer className="Footer">
        <div>
          <div>
            <div>
            <a href=""><img src={fb} /></a>  
            </div>
            <div>
            <a href=""><img src={tw} /></a>  
            </div>
            <div>
            <a href=""><img src={fb} /></a>  
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
