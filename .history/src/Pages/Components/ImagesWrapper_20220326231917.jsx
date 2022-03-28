import "./imagesWrapper.scss";

export function ImagesWrapper({ Data, WithLink }) {
  return (
    <>
      <section className="Main">
        <div className="Canva">
          {Data.map((item) => {
            return (
              <div className="Horizon" key={item.key}>
                {WithLink == true ?
                 returb item.imgs.map((images) => {
                    return (
                      <Link to={"/" + images.link} key={images.key}>
                        <div >
                          <img src={images.image} alt="" />
                        </div>
                      </Link>
                    );
                  }) : return 1}
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
