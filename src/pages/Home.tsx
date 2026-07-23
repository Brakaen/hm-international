import Hero from '../components/home/Hero';
import WhyChooseUs from '../components/home/WhyChooseUs';
import Services from '../components/home/Services';
import Countries from '../components/home/Countries';
import Testimonials from '../components/home/Testimonials';
import ApplyForm from '../components/common/ApplyForm';
import CTA from '../components/home/CTA';

export default function Home() {
  return (
    <>
      <Hero />
      <WhyChooseUs />
      <Services />
      <Countries />
      <Testimonials />
      <ApplyForm />
      <CTA />
    </>
  );
}
