import {
  CustomerReviews,
  Footer,
  Hero,
  PopularProducts,
  Services,
  SpecialOffer,
  Subscribe,
  SuperQuality,
} from "./sections";
import Nav from "./components/Nav";

const App = () => {
  return (
    <main className='relative'>
      <Nav />
      <section className=' padding-b '>
        <Hero />
      </section>
      <section className='py-20 max-sm:py-10 '>
        <PopularProducts />
      </section>
      <section className='padding-x py-20 max-sm:py-10'>
        <SuperQuality />
      </section>
      <section className='padding-x py-20 max-sm:py-10'>
        <Services />
      </section>
      <section className='padding-x py-20 max-sm:py-10'>
        <SpecialOffer />
      </section>
      <section className='bg-pale-blue py-20 max-sm:py-10'>
        <CustomerReviews />
      </section>
      <section className='padding-x py-20 max-sm:py-10 w-full'>
        <Subscribe />
      </section>
      <section className=' bg-black padding-x py-20 max-sm:py-10'>
        <Footer />
      </section>
    </main>
  );
};

export default App;