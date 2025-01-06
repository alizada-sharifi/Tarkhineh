import Banner from "../Components/Banner";
import Branches from "../Components/branches/Branches";
import Footer from "../Components/footer/Footer";
import Header from "../Components/Header/Header";
import HomeMeunu from "../Components/HomeMenu";
import Introduction from "../Components/Introduction";

function Home() {
  return (
    <>
      <Header />
      <Banner />
      <HomeMeunu />
      <Introduction />
      <Branches />
      <Footer />
    </>
  );
}
export default Home;
