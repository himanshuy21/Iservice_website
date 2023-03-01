import Footer from "../Footer";
import FooterNext from "../FooterNext";
import Navbar from "../Nav";
import { BookingNav } from "./BookingNav";
import { ServiceDetail } from "./BookingwService";
import TrackDetials from "./TrackDetail";

export function BookingTrack() {
  return (
    <>
      <Navbar />
      <BookingNav />
      <ServiceDetail />
      <TrackDetials />
      <FooterNext prev="/serviceeng" next="/bookingdetail3" />
      <Footer />
    </>
  );
}
