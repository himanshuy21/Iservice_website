import { BookingNav } from "../BookingDetail/BookingNav";
import Footer from "../Footer";
import FooterNext from "../FooterNext";
import Navbar from "../Nav";
import { Fullorder } from "./Bills/FullOrder";
import { PaymentBtn } from "./Bills/PaymentBtn";

export function BookingDetail3() {
  return (
    <>
      <Navbar />
      <BookingNav />
      <Fullorder />
      <PaymentBtn />
      <FooterNext prev="/trackBooking" next="/bookingdetail4" />
      <Footer />
    </>
  );
}
