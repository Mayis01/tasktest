import "./Footer.scss";
import insta from "../../Images/instaIcon.png";
import fb from "../../Images/fbIcon.png";
import tw from "../../Images/twitterIcon.png";
import "../../JSON/FooterMenu/"

export default function Footer() {
  return (
    <>
      <footer className="Footer">
        <div>
          <div>
            <div>
            <a href="#" target="_blank"><img src={fb} /></a>  
            </div>
            <div>
            <a href="#" target="_blank"><img src={tw} /></a>  
            </div>
            <div>
            <a href="#" target="_blank"><img src={insta} /></a>  
            </div>
          </div>
          
          <div>

          </div>
        </div>
      </footer>
    </>
  );
}
