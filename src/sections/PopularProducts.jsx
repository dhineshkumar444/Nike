

import { PopularProductCard } from "../components";
import { products } from "../constants";

const PopularProducts = () => {
  return (
   <section id="products" className="max-container max-sm:mt-12">
<div className="flex flex-col justify-start gap-5">
<h2 className="text-6xl font-palanquin font-bold max-sm:text-center text-start"> Our <span className="text-coral-red">Popular</span> Products</h2>
<p className="lg:max-w-lg mt-2 font-montserrat  text-slate-gray ">Experience top-notch quality and style with our sought-after selections. Discover a world of comfort, design, and value</p>
</div>
<di className='mt-6 grid lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 grid-cols-1 sm:gap-4 gap-14 max-sm:place-items-center'>
  {products.map((product) => (
     <PopularProductCard key={product} {...product} />
  ))}
</di>

   </section>
  );
};

export default PopularProducts;
