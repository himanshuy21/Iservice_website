import Footer from "../Footer";
import FooterNext from "../FooterNext";
import Navbar from "../Nav";
import { BookingNav } from "./BookingNav";
import { ServiceDetail } from "./BookingwService";

export function BookingDetail2() {
  return (
    <>
      <Navbar />
      <BookingNav />
      <ServiceDetail />
      <FooterNext prev="/BookingDetail1" next="/serviceeng" />
      <Footer />
    </>
  );
}
