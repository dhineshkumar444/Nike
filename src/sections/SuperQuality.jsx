import { shoe8 } from "../assets/images";
import { Button } from "../components";

const SuperQuality = () => {
  return (
    <section className="flex flex-row justify-start max-md:flex-col my-10 gap-10 max-container">
<div className=" flex flex-1 flex-col">
<h2 className='max-sm:text-center text-left font-palanquin text-6xl max-lg:text-4xl max-sm:text-4xl max-sm:leading-[82px] font-bold'>
          We Provide You  
        <span className='text-coral-red '>  Super </span>
          <span className='text-coral-red'>Quality </span> Shoes
        </h2>
        <p className='font-montserrat max-sm:text-start text-slate-gray text-lg leading-8 mt-6 sm:max-w-lg'>
        Ensuring premium comfort and style, our meticulously crafted footwear is designed to elevate your experience, providing you with unmatched quality, innovation, and a touch of elegance.
        </p>
        <p className='info-text mt-6 mb-10 sm:max-w-lg'>
        Our dedication to detail and excellence ensures your satisfaction
        </p>
        <div>
        <Button label={"View Details"} />
        </div>
</div>
<div className="flex flex-1 justify-center items-center max-sm:w-[300px] m-auto">
  <img src={shoe8} alt="super quality shoe" height={522} width={570} className="object-contain"/>
</div>

      
    </section>
  );
};

export default SuperQuality;
