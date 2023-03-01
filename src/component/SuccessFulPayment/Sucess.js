import Footer from "../Footer";
import FooterNext from "../FooterNext";
import Navbar from "../Nav";
import { SuccessDes } from "./Successdes";
import { SuccessFooter } from "./SuccessFooter";
import { SuccessNav } from "./SuccessNav";

export function SucessPayment() {
  return (
    <>
      <Navbar />
      <SuccessNav />
      <SuccessDes />
      <SuccessFooter />
      <FooterNext prev="/proceedtopay" />
      <Footer />
    </>
  );
}
