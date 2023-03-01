import Footer from "../Footer";
import FooterNext from "../FooterNext";
import Navbar from "../Nav";
import { PartPurNav } from "./PartPurNav";

export function PartPurchase() {
  return (
    <>
      <Navbar />
      <PartPurNav />
      <FooterNext prev="/success" next="/cartmain" />
      <Footer />
    </>
  );
}
