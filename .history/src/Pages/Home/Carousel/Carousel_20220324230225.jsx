import {
  MDBView,
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBContainer,
  MDBCarouselCaption,
  MDBMask,
} from "mdbreact";

const CarouselPage = ({ Length, Data }) => {
  //  "black-light" 1

  // overlay="black-strong" 2
  // overlay="black-slight" 3
  return (
    <MDBContainer>
      <MDBCarousel
        activeItem={1}
        length={Length}
        showControls={true}
        showIndicators={true}
        className="z-depth-1"
      >
        {Data.map((item) => {
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
  );
};

export default CarouselPage;
