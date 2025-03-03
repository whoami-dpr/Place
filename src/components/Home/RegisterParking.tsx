
const RegisterParking = () => {
    return (
        <div className="flex flex-col lg:flex-row items-center gap-8 justify-center p-9 md:p-6 font-roboto-flex">
            <img src="/images/image 5.png" alt="Parking Image" />

            <div className="max-w-xl">
                <h3 className="text-4xl font-bold md:text-5xl leading-14">Registra tu estacionamiento y genera ganancias</h3>
                <p className="mt-8 text-lg font-semibold">Descubre la versión Partner y gestiona tu disponibilidad</p>

                <div className="flex gap-4 mt-6 items-center font-semibold">
                    <a className="bg-black text-white rounded-full text-lg py-1 px-6 hover:bg-black/85" href="#">Comenzar</a>
                    <p className="text-md md:text-lg" >¿Ya tenés una cuenta? <a className="hover:font-bold" href="#">Inicia Sesión</a></p>
                </div>
            </div>
        </div>
    )
}

export default RegisterParking