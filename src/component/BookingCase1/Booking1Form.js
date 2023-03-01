import "../BookingCase1/mainContainer.css";
export function Booking1Form() {
  return (
    <>
      <div className="center-form">
        <div className="optionContainer">
          <div className="form-group">
            <label htmlFor="fruit-select">what is the mobile brand ? </label>
            <select
              select
              class="form-select"
              aria-label="Default select example"
            >
              <option value="Iphone" selected>
                Iphone
              </option>
              <option value="samsung">samsung</option>
              <option value="redmi">redmi</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="fruit-select">what is the mobile brand ? </label>
            <select
              select
              class="form-select"
              aria-label="Default select example"
            >
              <option value="Iphone" selected>
                Iphone
              </option>
              <option value="samsung">samsung</option>
              <option value="redmi">redmi</option>
            </select>
          </div>
        </div>
        <div className="optionContainers">
          <div className="form-group">
            <label htmlFor="fruit-select">what is the mobile low? </label>
            <select
              select
              class="form-select"
              aria-label="Default select example"
            >
              <option value="Iphone" selected>
                Iphone
              </option>
              <option value="samsung">samsung</option>
              <option value="redmi">redmi</option>
            </select>
          </div>
        </div>
      </div>
    </>
  );
}
