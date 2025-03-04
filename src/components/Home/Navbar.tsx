import { AlignJustify } from 'lucide-react'
import { Link } from "react-router"

const Navbar = () => {

    return (
        <>
            <div className='font-roboto-flex overflow-x-hidden'>
                <div className="flex justify-between items-center px-6 pt-4">
                {/* Navegation Desktop */}
                    <div className='sm:flex items-center gap-5'>
                        <h2 className="text-2xl font-bold">Place</h2>
                        <nav className='hidden sm:flex gap-5 items-center pt-1'>
                            <Link className='text-sm' to={'/'}>Reservar</Link>
                            <Link className='text-sm' to={'/'}>Ofrecer</Link>
                            <Link className='text-sm' to={'/'}>Quienes somos</Link>
                        </nav>
                    </div>
                    
                    <div className='flex gap-5 sm:items-center'>
                        <div className='bg-[#002FA7] border-[#002FA7] flex flex-row-reverse items-center rounded-2xl outline-none text-[9px] sm:text-[12px] sm:font-bold text-white px-2 sm:py-2'>
                            <select className='bg-inherit outline-none' name="" id="">
                                <option selected value="">ESP</option>
                                <option value="">ENG</option>
                            </select>
                            <img className='w-2 h-2 sm:h-4 sm:w-4' src="/images/world.svg" alt="" />                        
                        </div>
                        
                        <Link className='hidden sm:block text-sm' to={'/'}>Ayuda</Link>
                        <Link className='hidden sm:block bg-[#002FA7] text-white px-3 py-[5px] rounded-lg text-sm' to={'/'}>Iniciar Sesion</Link>
                        <Link className='hidden sm:block font-bold text-sm' to={'/'}>Registrarse</Link>
                        
                        {/* Hamburguer Mobile Icon*/}
                        <label className='sm:hidden' htmlFor="check">
                            <AlignJustify className='cursor-pointer sm:hidden' color='gray' size={30}/>
                        </label>
                    </div>
                </div>
                {/* Navegation Mobile */}
                <div className='mt-5'>
                    <input
                        className='peer hidden' 
                        id="check" 
                        type="checkbox" 
                        name="" 
                    />
                    <nav className='absolute right-0 left-0 py-5 opacity-0 peer-checked:opacity-100 flex flex-col gap-3 items-center justify-center bg-[#021B5A] text-lg text-white font-light duration-300'>    
                        <Link className='text-sm' to={'/'}>Reservar</Link>
                        <Link className='text-sm' to={'/'}>Ofrecer</Link>
                        <Link className='text-sm' to={'/'}>Quienes somos</Link>
                        <Link className='text-sm' to={'/'}>Ayuda</Link>
                        <Link className='bg-white mt-6 text-sm text-black p-2 text-center block w-56 font-medium rounded-full' to={'/'}>Iniciar Sesión</Link>
                        <Link className='bg-[#002FA7] text-sm text-white p-2 text-center block w-56  font-medium rounded-full' to={'/'}>Registrarse</Link>
                    </nav>
                </div>
            </div>
        </>
    )
}

export default Navbar