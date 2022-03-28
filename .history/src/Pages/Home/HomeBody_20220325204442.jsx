import { Link } from "react-router-dom";
import img from "../../Images/imgExample.png";
import "./HomeBody.scss";
import MainData from "../../JSON/HomeBody/homeBody.json"

export default function HomeBody() {
  return (
    <>
      <section className="CanvasForImgs">
{
    MainData.map(tables =>{
        return
    })
}
        
      </section>
    </>
  );
}
