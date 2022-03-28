import img from "../../Images/imgExample.png"


export default function HomeBody() {
  return (
    <>
      <section className="CanvasForImgs">
        <div>
            <h1>Gallery</h1>
        </div>
        <div>
            <div>
                <img src={img} alt="" />
            </div>
        </div>
                
      </section>
    </>
  );
}
