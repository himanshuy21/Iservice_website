export function PaymentBtn() {
  return (
    <>
      <div className="d-flex" style={{ background: "#ededed" }}>
        <div className="container  mt-2 mb-2 d-flex justify-content-center align-items-center">
          <div className="btn-container">
            <div className="Detail">
              <div className="names">Total Amount</div>
              <p className="bookingdes">3,100</p>
            </div>

            <button type="button" className="btn btn-dark">
              Clear Dues
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
