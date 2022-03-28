import "./imagesWrapper.scss";

export default function ImagesWrapper({ Data }) {
  return (
    <>
      <section className="GalleryMain">
        <div className="GalleryCanva">
          {
            Data.map((item) => {
              return (
                <div className="GalleryHorizon" key={item.key}>
                  {item.imgs.map((images) => {
                    return (
                      <div key={images.key}>
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
