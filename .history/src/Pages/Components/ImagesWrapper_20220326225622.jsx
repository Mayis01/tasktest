import "./imagesWrapper.scss";
import img from "../../Images/HomeBackground.png";


export default function ImagesWrapper({ {
  return (
    <>
      <section className="GalleryMain">
        <div className="GalleryCanva">
          {Data.map((item) => {
            return (
              <div className="GalleryHorizon" key={item.key}>
                {item.imgs.map((images) => {
                  return (
                    <div  key={images.key}>
                      <img src={images.image} alt="" />
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
