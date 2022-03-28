import ServicesBreakFastData from "../../../JSON/ServicesMenu/ServicesMenu.json"

export default function Breakfast() {
  return (
    <>
      <section className="BreakfastMain">
          <div className="BreakfastWrapper">
              <div className="HeaderBfst">

                  <hr />
                  <ul className="d-flex justify-content-between">
                    {
                        ServicesBreakFastData.map()
                    }
                  </ul>

                  <hr />
              </div>
          </div>
      </section>
    </>
  );
}
