import "./App.css";
import Login from "./component/login";
import SignUp from "./component/Signup";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BookingCase1 from "./component/Bookingcase1";
import { BookingDetail } from "./component/BookingDetail/BookingDetail";
import { BookingserviceEngg } from "./component/BookingDetail/BookingSengg";
import OrderBanner from "./component/OrderConfirmation/OrderBanner";
import { BookingTrack } from "./component/BookingDetail/BookingTrack";
import CartMain from "./component/Cart/Cartmain";
import { BookingDetail2 } from "./component/BookingDetail/BookingDetail2";
import { BookingDetail3 } from "./component/BookingCase1/BookingDetail3";
import { BookingDetail4 } from "./component/BookingCase1/BookingDetail4";
import { BookingDetail5 } from "./component/BookingCase1/BookingDetail5";
import { Processed } from "./component/ProcessToPayment/Proceseed";
import { SucessPayment } from "./component/SuccessFulPayment/Sucess";
import { PartPurchase } from "./component/PartPurchase/PParchase";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login />}></Route>
          <Route exact path="/signup" element={<SignUp />}></Route>
          <Route exact path="/case1" element={<BookingCase1 />}></Route>
          {/* <Route exact path="/problem" element={<ProblemPage />}></Route>
          <Route exact path="/need" element={<NeedService />}></Route>
          <Route exact path="/location" element={<Location />}></Route> */}
          <Route
            exact
            path="/BookingDetail1"
            element={<BookingDetail />}
          ></Route>
          <Route
            exact
            path="/serviceeng"
            element={<BookingserviceEngg />}
          ></Route>
          <Route exact path="/thanku" element={<OrderBanner />}></Route>
          <Route exact path="/trackBooking" element={<BookingTrack />}></Route>
          <Route exact path="/cartmain" element={<CartMain />}></Route>
          <Route
            exact
            path="/bookingdetail2"
            element={<BookingDetail2 />}
          ></Route>
          <Route
            exact
            path="/bookingdetail3"
            element={<BookingDetail3 />}
          ></Route>
          <Route
            exact
            path="/bookingdetail4"
            element={<BookingDetail4 />}
          ></Route>
          <Route
            exact
            path="/bookingdetail5"
            element={<BookingDetail5 />}
          ></Route>
          <Route exact path="/proceedtopay" element={<Processed />}></Route>
          <Route exact path="/success" element={<SucessPayment />}></Route>
          <Route exact path="/partpurchase" element={<PartPurchase />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
