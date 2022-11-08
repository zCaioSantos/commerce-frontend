import { Header } from "../../components/LandingPage/Header";
import { TopHeader } from "../../components/LandingPage/TopHeader";
import { Detalis } from "../../components/ProductDetails/Details";

export function Layout() {
 return (
  <div>
   <TopHeader/>
   <Header />
   <Detalis/>
  </div>
 );
}
