function InfoSection() {
  return (
    <div className="flex flex-col items-center gap-8 justify-center  py-14 px-8 md:py-22 font-roboto-flex">
      <div className="max-w-6xl gap-16 flex flex-col items-center">
        <h3 className="text-5xl text-balance font-bold text-center">
          Registrar tu estacionamiento es completamente GRATIS
        </h3>
        <p className="text-balance font-semibold text-base text-center">
          Nuestra plataforma conecta a conductores con estacionamientos
          disponibles en su área. Cuando un usuario reserva y paga un espacio de
          estacionamiento a través de la app, cobramos una pequeña comisión
          sobre la transacción. Esto nos permite ofrecer un servicio eficiente,
          seguro y transparente para los conductores, mientras ayudamos a los
          dueños de estacionamientos a maximizar sus ingresos.
        </p>

        <div className="flex flex-col items-center gap-3">
          <h5 className="text-center text-4xl font-bold">PLACE</h5>
          <p className="font-semibold">
            Menos vueltas, más libertad. Industria Argentina
          </p>
          <img
            src="/images/argentina-flag.png"
            alt="Argentina flag"
            className="w-[100px]"
          />
        </div>
      </div>
    </div>
  );
}

export default InfoSection;
