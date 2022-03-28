import { ImagesWrapper } from "../Components/ImagesWrapper";
import ServiseData from "../../JSON/ServicesComponent/ServicesComponent.json"


export default function Services() {
  return (
    <>
      <section>
        
          <ImagesWrapper Data={ServiseData} WithLink={true} widthImages={230} />
      </section>
    </>
  );
}
