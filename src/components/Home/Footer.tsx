import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-[#021B5A] text-gray-300 text-center py-10 md:px-20">
    <div className="md:grid md:grid-cols-2 md:text-start md:max-w-[800px] md:mx-auto">
      <nav className="grid grid-cols-1 gap-10">
        <div className="flex flex-col mb-5 ">
          <Link className="font-black text-white text-2xl pb-3" to={"/"}>
            Place
          </Link>
          <Link className="text-sm" to={"/"}>
            Contactar con el centro de ayuda
          </Link>
        </div>
        <div className="flex flex-col gap-18 md:flex-row">
          <div className="flex flex-col gap-4">
            <Link className="font-black text-white text-2xl pb-3" to={"/"}>
              Adamant
            </Link>
            <Link className="text-sm" to={"/"}>
              ¿Quienes Somos?
            </Link>
            <Link className="text-sm" to={"/"}>
              Lo que ofrecemos
            </Link>
            <Link className="text-sm" to={"/"}>
              Inversionistas
            </Link>
          </div>
          <div className="flex flex-col gap-4">
            <Link className="font-black text-white text-2xl pb-3" to={"/"}>
              Productos
            </Link>
            <Link className="text-sm" to={"/"}>
              Estaciona
            </Link>
            <Link className="text-sm" to={"/"}>
              Registra tu estacionamiento
            </Link>
            <Link className="text-sm" to={"/"}>
              Tarjetas de Regalo
            </Link>
          </div>
        </div>
        <div className="flex justify-center items-center md:justify-normal my-8 gap-4">
          <Link className="text-[10px] font-black underline" to={"/"}>
            Terminos del servicio
          </Link>
          <Link className="text-[10px] font-black underline" to={"/"}>
            Politicas de privacidad
          </Link>
          <Link className="text-[10px] font-black underline" to={"/"}>
            Contacto
          </Link>
        </div>
      </nav>
      <section className="flex flex-col items-center gap-5 mt-10 md:mt-0">
        <h3 className="text-2xl md:text-4xl text-center font-bold text-white mb-5">
          ¡Contacta con Nosotros!
        </h3>
        <div className="grid grid-cols-1 gap-5">
            <img className="w-38 h-12 object-contain" src="/images/app-store.svg" alt="Apple Store" />
            <img className="w-38 h-12 object-contain" src="/images/google-play.svg" alt="Google Play Store" />
        </div>
      </section>
    </div>
    </footer>
  );
};

export default Footer;
