import { Button } from "../ui/button";

const YourReservation = () => {
  return (
    <div className="bg-bgCyan flex flex-col lg:flex-row items-center gap-8 justify-center py-14 px-4 md:py-22 font-roboto-flex">
      <div className="max-w-xl">
        <h3 className="text-4xl font-bold md:text-5xl leading-14">
          Agenda tu reserva y no te preocupes por quedarte sin lugar
        </h3>
        <p className="mt-8 text-lg font-semibold">
          Con Place podés registrar tu reserva en cualquier estacionamiento
          privado y no tenés que preocuparte por quedarte sin lugar al momento
          de llegar.
        </p>

        <div className="flex gap-4 mt-6 items-center font-semibold">
          <a href="#">
            <Button className="bg-black font-bold text-white rounded-2xl text-lg p-6 hover:bg-black/80 cursor-pointer">
              Comenzar
            </Button>
          </a>
          <p className="text-md md:text-lg">
            ¿Ya tenés una cuenta?{" "}
            <a className="hover:font-bold" href="#">
              Inicia Sesión
            </a>
          </p>
        </div>
      </div>

      <img
        className="w-[500px]"
        src="/images/image 4 copy copy 1.png"
        alt="Car Image"
      />
    </div>
  );
};

export default YourReservation;
