const SectionReservation = () => {
  return (
    <section className='sm:grid sm:grid-cols-2 sm:items-center sm:gap-30 bg-[#021B5A] h-[800px] text-white -z-1 top-18 left-0 right-0 py-20 px-10'>
        <div>
            <h1 className='text-4xl font-medium text-center'>
                Reserva tu espacio, sin complicaciones
            </h1>
            <div className='flex justify-center gap-2 pt-6'>
                <button className='bg-[#002FA7] sm:p-5 p-3 font-medium rounded-sm w-32 md:w-40 text-sm cursor-pointer'>
                    Por Hora/Diario
                </button>
                <button className='bg-white sm:p-5 p-3 font-medium rounded-sm text-black w-32 md:w-40 text-sm cursor-pointer'>
                    Mensual
                </button>
            </div>

            <div className='flex mx-auto items-center gap-3 bg-white w-full max-w-90 mt-10 rounded-2xl py-3 px-3'>
                <img className='w-5 h-5' src="/images/ubication.svg" alt="" />   
                <input 
                    className='text-black flex-1 text-[17px] outline-none' 
                    type="text" 
                    placeholder='Donde necesita estacionar?...'
                />
            </div>
            <div className='flex mx-auto relative items-center gap-3 bg-white w-full max-w-90 mt-2 rounded-2xl py-3 px-3'>
                <img className='w-5 h-5' src="/images/calendar.svg" alt="" /> 
                <label className="text-gray-500 absolute top-1 left-11 text-[12px]" htmlFor="date-reservation">
                    Ingrese fechas de estacionamiento
                </label>  
                <input 
                    id="date-reservation"
                    className='text-black flex-1 w-full text-[17px] outline-none pt-2' 
                    type="date" 
                    placeholder=''
                />
            </div>
        </div>

        <img className='w-[350px] sm:w-[500px] sm:mt-0 rounded-4xl mx-auto mt-20' src="/images/map.jpeg" alt="map" />
    </section>
  )
}

export default SectionReservation
