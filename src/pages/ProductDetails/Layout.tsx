import { Carousel } from "../../components/LandingPage/Carousel";
import { Footer } from "../../components/LandingPage/Footer";
import { Header } from "../../components/LandingPage/Header";
import { TopHeader } from "../../components/LandingPage/TopHeader";
import { Detalis } from "../../components/ProductDetails/Details";
import { MiniCarrousel } from "../../components/ProductDetails/MiniCarrousel";
import { Org } from "./styles";

export function Layout() {
 return (
  <div>
   <TopHeader/>
   <Header />
   <Org>
    <MiniCarrousel/>
    <Detalis/>
   </Org>
   <h2>Outros produtos</h2>
   <Carousel/>
   <Footer/>
  </div>
 );
}
