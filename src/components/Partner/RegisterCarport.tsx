import { Button } from "../ui/button";

const RegisterCarport = () => {
    return (
        <div className="bg-[#1E1E1E] -z-1 top-18 left-0 right-0 py-20 px-10 md:h-[800px] h-full font-roboto-flex">

            <h2 className="text-5xl md:text-6xl text-white text-center font-bold md:max-w-2xl mx-auto mt-20">¡Registra tu cochera y maximiza tus ganancias!</h2>

            <div className="flex flex-col lg:flex-row items-center gap-8 justify-center mt-20">

                <img className="w-[450px]" src="/images/image 7.png" alt="Hero Image" />

                <div className="max-w-xl">
                    <h3 className="text-2xl font-bold md:text-[39px] text-white">
                        Miles de conductores buscan dónde estacionar. Ofrece tu lugar
                    </h3>

                    <div className="flex gap-4 mt-12 items-center font-semibold text-white">
                        <a href="#">
                            <Button className="bg-black font-bold rounded-2xl text-lg p-6 hover:bg-black/80 cursor-pointer">
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
            </div>
        </div>
    )
}

export default RegisterCarport;