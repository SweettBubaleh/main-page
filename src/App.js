import Arrivals from "./components/arrivals/Arrivals";
import Banner from "./components/banner/Banner";
import Brands from "./components/brands/Brands";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Promo from "./components/promo/Promo";
import Subscribe from "./components/subscribe/Subscribe";
import Voucher from "./components/voucher/Voucher";
import Young from "./components/young/Young";

function App() {
  return (
    <div className="App">
      <Header />
      <Promo />
      <Brands />
      <Arrivals />
      <Banner />
      <Young />
      <Voucher />
      <Subscribe />
      <Footer />
    </div>
  );
}

export default App;
