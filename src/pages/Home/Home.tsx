import RegisterParking from "@/components/Home/RegisterParking";
import RegisterVehicle from "@/components/Home/RegisterVehicle";
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

      <section>
        <RegisterVehicle />
      </section>
    </>
  );
};

export default Home;
