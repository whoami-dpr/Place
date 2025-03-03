import RegisterParking from "@/components/Home/RegisterParking";
import YourReservation from "@/components/Home/YourReservation";

const Home = () => {
  return (
    <>
      <section>
        <YourReservation />
      </section>

      <section>
        <RegisterParking />
      </section>
    </>
  );
};

export default Home;
