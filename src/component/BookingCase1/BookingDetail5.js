import { BookingNav } from "../BookingDetail/BookingNav";
import Footer from "../Footer";
import FooterNext from "../FooterNext";
import Navbar from "../Nav";
import { Fullorder } from "./Bills/FullOrder";

export function BookingDetail5() {
  return (
    <>
      <Navbar />
      <BookingNav />
      <Fullorder />
      <div className="d-flex" style={{ background: "#ededed" }}>
        <div className="container  mt-2 mb-2 d-flex justify-content-center align-items-center">
          <div className="btn-container">
            <div className="Detail">
              <div className="names">
                Total Amount Paid
                <b> : 3,100</b>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterNext prev="/bookingdetail4" next="/proceedtopay" />
      <Footer />
    </>
  );
}
