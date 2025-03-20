
const WhyPlaceSection = () => {
    return (
        <div className="py-14 px-8 md:py-22 bg-black">
            <h3 className="text-center font-bold text-[26px] text-white">¿Por qué usar PlacePartner?</h3>

            <div className="grid grid-cols-1 gap-10 md:grid-cols-3 items-center justify-center text-center mt-10 text-white text-lg font-bold">

                <div >
                    <img className='mx-auto bg-contain my-6' src="/images/Vector (1).png" alt="Calendar Icon" />
                    <p>
                        Definí tus horarios, precios y disponibilidad. Vos tenés el control total de tu estacionamiento.
                    </p>
                </div>

                <div>
                    <img className='mx-auto bg-contain my-6' src="/images/Vector.png" alt="Cash Icon" />
                    <p>
                        Cobra facil y recibí pagos automáticos en tu cuenta sin complicaciones.
                    </p>

                </div>

                <div>
                    <img className='mx-auto bg-contain my-6' src="/images/mingcute_earth-line.png" alt="Earth icon" />
                    <p>
                        Más visibilidad, más reservas, publica tu estacionamiento y dejá que los conductores te encuentren en segundos.
                    </p>
                </div>

            </div>
        </div>
    )
}

export default WhyPlaceSection