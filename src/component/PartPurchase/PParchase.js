import Footer from "../Footer";
import FooterNext from "../FooterNext";
import Navbar from "../Nav";
import { PartPurNav } from "./PartPurNav";
import ProductInfoCard from "./ProductInfoCard";
import { toast, ToastContainer } from "react-toastify";

export function PartPurchase() {
  const SubmitDetail = () => {
    toast.success("Detail Submitted", { autoClose: 1000 });
  };

  return (
    <div>
      <ToastContainer />;
      <Navbar />
      <PartPurNav />
      <section>
        <div className="container py-5">
          <div className="row d-flex justify-content-center my-4">
            <div className="col-md-8">
              {/* <div className="card-header py-3">
            <h5 className="mb-0">Cart - 2 items</h5>
          </div> */}

              <div className="row my-3">
                <ProductInfoCard />
              </div>
            </div>
            <div className="col-md-4 my-3">
              <div className="card mb-4 cart-summary">
                <div className="py-3">
                  <h5 className="mb-0 mx-3 servicesHeading">
                    {" "}
                    Delivery Details
                  </h5>
                </div>
                <div className="card-body">
                  <label for="inputPassword5" class="form-label">
                    Where are you located?
                  </label>
                  <input
                    type="name"
                    id="typeNamwX-2"
                    className="form-control form-control-lg"
                  />
                  <label for="inputPassword5" class="form-label my-3">
                    Phone Number
                  </label>
                  <input
                    type="name"
                    id="typeNamwX-2"
                    className="form-control form-control-lg"
                  />
                </div>
                <p className="fs-6 p-3 text-danger">
                  P.S. Orders can take 2-5 business days to be successfully
                  delivered to you. If it exceeds 5 business days, kindly send
                  an email to info@iserviceindia.in
                </p>
                <button className="btn btn-dark m-4" onClick={SubmitDetail}>
                  Submit Details
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FooterNext prev="/success" next="/cartmain" />
      <Footer />
    </div>
  );
}
