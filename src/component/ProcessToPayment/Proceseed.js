import Footer from "../Footer";
import FooterNext from "../FooterNext";
import Navbar from "../Nav";
import { ProcessNav } from "./ProcessNav";

export function Processed() {
  return (
    <>
      <Navbar />
      <ProcessNav />
      <FooterNext prev="/bookingdetail5" />
      <Footer />
    </>
  );
}
