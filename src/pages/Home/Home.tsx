import Hero from "@/components/Home/Hero";
import SectionReservation from "@/components/Home/SectionReservation";
import SectionPlace from "@/components/Home/SectionPlace";
import YourReservation from "@/components/Home/YourReservation";
import RegisterParking from "@/components/Home/RegisterParking";
import RegisterVehicle from "@/components/Home/RegisterVehicle";
import InfoSection from "@/components/Home/InfoSection";
import Footer from "@/components/Home/Footer";

const Home = () => {
  return (
    <>
      <section>
        <Hero />
      </section>
      <section>
        <SectionReservation />
      </section>
      <section>
        <SectionPlace />
      </section>
      <section>
        <YourReservation />
      </section>
      <section>
        <RegisterParking />
      </section>
      <section>
        <RegisterVehicle />
      </section>
      <section>
        <InfoSection />
      </section>
      <section>
        <Footer />
      </section>
    </>
  );
};

export default Home;
