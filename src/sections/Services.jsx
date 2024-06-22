import ServiceCard from "../components/ServiceCard";
import { services } from "../constants";

const Services = () => {
  return (
    <section className='grid lg:grid-cols-3 md:grid-cols-2 gap-10'>
    {services.map((service) => (
      <ServiceCard key={service.label} {...service} />
    ))}
  </section>
  );
};

export default Services;
