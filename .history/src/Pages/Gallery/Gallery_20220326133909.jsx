import "./Gallery.scss";
import img from "../../Images/HomeBackground.png";
import GalleryImages from "../../JSON/GalleryComponent/galleryComponent.json"

export default function Gallery() {
  return (
    <>
      <section className="GalleryMain">
        <div className="GalleryCanva">
          <div className="GalleryHorizon">
            <div>
              <img src={img} width={232} height={175} alt="" />
            </div>

            <div>
              <img src={img} width={232} height={175} alt="" />
            </div>

            <div>
              <img src={img} width={232} height={175} alt="" />
            </div>

            <div>
              <img src={img} width={232} height={175} alt="" />
            </div>

            <div>
              <img src={img} width={232} height={175} alt="" />
            </div>
          </div>

          <div className="GalleryHorizon">
            <div>
              <img src={img} width={232} height={175} alt="" />
            </div>

            <div>
              <img src={img} width={232} height={175} alt="" />
            </div>

            <div>
              <img src={img} width={232} height={175} alt="" />
            </div>

            <div>
              <img src={img} width={232} height={175} alt="" />
            </div>

            <div>
              <img src={img} width={232} height={175} alt="" />
            </div>
          </div>

          <div className="GalleryHorizon">
            <div>
              <img src={img} width={232} height={175} alt="" />
            </div>

            <div>
              <img src={img} width={232} height={175} alt="" />
            </div>

            <div>
              <img src={img} width={232} height={175} alt="" />
            </div>

            <div>
              <img src={img} width={232} height={175} alt="" />
            </div>

            <div>
              <img src={img} width={232} height={175} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
