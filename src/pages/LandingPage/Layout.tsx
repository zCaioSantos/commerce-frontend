import { Header } from '../../components/LandingPage/Header';
import { TopHeader } from '../../components/LandingPage/TopHeader';
import { Banner } from '../../components/LandingPage/Banner';
import { Footer } from '../../components/LandingPage/Footer';
import { Carousel } from '../../components/LandingPage/Carousel';
import { LayoutProps } from './types';

export function Layout({ data }: LayoutProps) {
 return (
  <div>
   <TopHeader />
   <Header />
   <Banner />
   <Carousel data={data} />
   <Footer />
  </div>
 );
}
