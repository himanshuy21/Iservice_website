export function ProcessDes() {
  return (
    <>
      <div className="MainContainerBookingDes">
        <div className="BookinContainer">
          <div className="firstStatus">
            <button className="fsbtn" style={{ width: "40%" }}>
              Pending Payment:
              <b>3100-/</b>
            </button>
          </div>
          <div className="secondstatus">
            <div className="seconds1">
              <p className="clientDetail">Booking Details</p>
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
            <div className="deviceDcon">
              <div className="detailsOfdev">
                <p className="names">Booking Reference</p>
                <p>BABC123</p>
              </div>
            </div>
            <div className="deviceDcon">
              <div className="detailsOfdev">
                <p className="names">Booking Date</p>
                <p>25th February 2023</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
