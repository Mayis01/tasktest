import "./Gallery.scss";
import img from "../../Images/HomeBackground.png"

export default function Gallery() {
  return (
    <>
      <section>
          <div className="GalleryCanva">
            <div className="GalleryHorizon">
                    <div>
                        <img src={img} alt="" />
                    </div>
            </div>
          </div>
      </section>
    </>
  );
}
