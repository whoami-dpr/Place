import { Button } from "../ui/button";

const RegisterVehicle = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center gap-8 justify-center py-14 px-4 md:py-22 font-roboto-flex bg-[#021B5A]">
      <div className="max-w-xl">
        <h3 className="text-4xl font-bold md:text-5xl leading-14 text-white">
          Registrá tu vehículo y hacé tu reserva más fácil
        </h3>

        <p className="mt-4 mb-8 text-lg font-semibold text-white">
          Place te permite guardar la información de tu vehículo para que, al
          reservar una cochera, los datos se completen automáticamente y tu
          experiencia sea más rápida y sencilla.
        </p>

        <a href="#">
          <Button className="bg-white font-bold text-black rounded-2xl text-lg p-6 hover:bg-white/80 cursor-pointer">
            Registar vehículo
          </Button>
        </a>
      </div>

      <img
        src="/images/registerVehicle.png"
        alt="Parking Image"
        className="w-[700px] rounded-3xl"
      />
    </div>
  );
};

export default RegisterVehicle;
