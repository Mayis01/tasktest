import "./imagesWrapper.scss";

export function ImagesWrapper({Data,WithLink}) {

 
  return (
    <>
      <section className="Main">
        <div className="Canva">
          {
            Data.map((item) => {
              return (
                <div className="Horizon" key={item.key}>
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
