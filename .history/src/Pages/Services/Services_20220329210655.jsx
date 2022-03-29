import { ImagesWrapper } from "../Components/ImagesWrapper";
import ServiseData from "../../JSON/ServicesComponent/ServicesComponent.json";

export default function Services() {
  return (
    <>
      <section>
        {/* Click to fist image to see modal*/}
        <ImagesWrapper Data={ServiseData} WithLink={true} widthImages={238} />
      </section>
    </>
  );
}
