import Hero from "@/components/Home/Hero";
import InfoSection from "@/components/Home/InfoSection";
import RegisterParking from "@/components/Home/RegisterParking";
import RegisterVehicle from "@/components/Home/RegisterVehicle";
import SectionPlace from "@/components/Home/SectionPlace";
import SectionReservation from "@/components/Home/SectionReservation";
import YourReservation from "@/components/Home/YourReservation";

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
    </>
  );
};

export default Home;
