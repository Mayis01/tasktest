import "./Home.scss";
import HomeHeaderData from "../../JSON/HomeHeader/homeHeader.json";


export default function Home() {
  return (
    <>
      <section className="HomeSection">
        <MDBContainer>
          <MDBCarousel
            activeItem={1}
            length={3}
            showControls={true}
            showIndicators={true}
            className="z-depth-1"
          >
            {HomeHeaderData.map((item) => {
              return (
                <MDBCarouselInner>
                  <MDBCarouselItem itemId={item.id}>
                    <MDBView>
                      <img
                        className="d-block w-100"
                        src={item.backfroundImg}
                        alt="First slide"
                      />
                      <MDBMask overlay={item.Overlay} />
                    </MDBView>
                    <MDBCarouselCaption>
                      <h1 className="h1-responsive ">{item.h1}</h1>
                      <p>{item.h2}</p>
                    </MDBCarouselCaption>
                  </MDBCarouselItem>
                </MDBCarouselInner>
              );
            })}
          </MDBCarousel>
        </MDBContainer>

        <div>
          <div>
            <h1>Stay with us feel like home</h1>
          </div>
          <div>
            <h2>
              Leo malesuada porta ultricies vel fusce. Faucibus nulla vitae
              faucibus netus tristique integer ultrices.
            </h2>
          </div>
        </div>
      </section>
    </>
  );
}
