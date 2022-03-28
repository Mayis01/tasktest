import "./Gallery.scss";
import img from "../../Images/HomeBackground.png";
import GalleryImages from "../../JSON/GalleryComponent/galleryComponent.json";

export default function Gallery() {
  return (
    <>
      <section className="GalleryMain">
        <div className="GalleryCanva">
          {GalleryImages.map((item) => {
            return (
              <div className="GalleryHorizon" key={item.key}>
                {item.imgs.map((images) => {
                  return (
                    <div  key={images.key}>
                      <img src={images.image} width={210} height={175} alt="" />
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
