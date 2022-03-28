import ServicesBreakFastData from "../../../JSON/ServicesMenu/ServicesMenu.json";

export default function Breakfast() {
  return (
    <>
      <section className="BreakfastMain">
        <div className="BreakfastWrapper">
          <div className="HeaderBfst">
            <hr />
            <ul className="d-flex justify-content-between">
              {ServicesBreakFastData.map((item) => {
                return (
                  <Link to={"/" + }>
                    {" "}
                    <li></li>
                  </Link>
                );
              })}
            </ul>

            <hr />
          </div>
        </div>
      </section>
    </>
  );
}
