import { Header } from '../../components/LandingPage/Header';
import { TopHeader } from '../../components/LandingPage/TopHeader';
import { Banner } from '../../components/LandingPage/Banner';
import { Footer } from '../../components/LandingPage/Footer';
import { Carousel } from '../../components/LandingPage/Carousel';




export function Layout() {
 return (
  <div>
   <TopHeader />
   <Header />
   <Banner />
   <Carousel />
   <Footer />
  </div>
 );
}
