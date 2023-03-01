import { ServiceEdetail } from "./ServiceEnggDetail";

export function ServiceDetail() {
  return (
    <>
      <div className="MainContainerBookingDes">
        <div className="BookinContainer">
          <div className="firstStatus">
            <button className="fsbtn">
              Status:
              <b>In-progress</b>
            </button>
          </div>
          <div className="secondstatus">
            <div className="seconds1">
              <span className="clientDetail">Client Details</span>
              <div className="imageContainer">
                <div className="images"></div>
                <div className="customerDetail">
                  <span className="names">John deo</span>
                  <div className="phoneNumber">
                    <div>+91-898989-7585</div>
                    <i className="fa-solid fa-phone"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="seconds2"></div>
          </div>
          <div className="secondstatus">
            <div className="seconds1">
              <p className="clientDetail">Device Details</p>
            </div>
            <div className="deviceDcon">
              <div className="detailsOfdev">
                <p className="names">Category</p>
                <p>Mobile</p>
              </div>
            </div>
            <div className="deviceDcon">
              <div className="detailsOfdev">
                <p className="names">Brand</p>
                <p>Apple</p>
              </div>
            </div>
            <div className="deviceDcon">
              <div className="detailsOfdev">
                <p className="names">Model</p>
                <p>iPhone 13 pro</p>
              </div>
            </div>
            <div className="deviceDcon">
              <div className="detailsOfdev">
                <p className="names">IMEI/Serial number :</p>
                <p>0123673920003</p>
              </div>
            </div>
            <div className="deviceDcon">
              <div className="detailsOfdev">
                <p className="names">Problem</p>
                <p>Battery, speaker, mouthpiece</p>
              </div>
            </div>
          </div>
          <ServiceEdetail />
        </div>
      </div>
    </>
  );
}
