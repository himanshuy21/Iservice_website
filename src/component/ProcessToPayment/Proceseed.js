import Footer from "../Footer";
import FooterNext from "../FooterNext";
import Navbar from "../Nav";
import { PaymentFooter } from "./PaymentProcessFooter";
import { ProcessDes } from "./Prcesseddes";
import { ProcessNav } from "./ProcessNav";

export function Processed() {
  return (
    <>
      <Navbar />
      <ProcessNav />
      <ProcessDes />
      <PaymentFooter />
      <FooterNext prev="/bookingdetail5" next="/success" />
      <Footer />
    </>
  );
}
