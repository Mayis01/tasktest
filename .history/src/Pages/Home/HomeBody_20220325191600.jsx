import img from "../../Images/imgExample.png";
import "./HomeBody.scss"


export default function HomeBody() {
  return (
    <>
      <section className="CanvasForImgs">
        <div>
            <h1>Gallery</h1>
            <div></div>
        </div>
        <div>
            <div>
                <img src={img} />
            </div>
        </div>
                
      </section>
    </>
  );
}
