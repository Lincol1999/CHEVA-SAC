import { FaPhone, FaEnvelope, FaLocationDot } from "react-icons/fa6";
import { BsFacebook } from 'react-icons/bs';
import logo from '../assets/logo.png'

export const Footer = () => {
    return (
        <footer className="bg-brandPrimary mx-auto">
            <div className="w-full px-10 pt-10">

                <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
                    <div className="mb-6 md:mb-0 w-2/3">
                        <a href="#" className="flex items-center">
                            <img src={logo} className="h-6 md:h-8 me-3" alt="Cheva Logo" />
                            {/* <span className="self-center text-lg text-blue-800 sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold whitespace-nowrap dark:text-white"> CHEVA SAC</span> */}
                            <span className="self-center text-lg text-white sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold whitespace-nowrap dark:text-white"> CHEVA SAC</span>
                        </a>
                    </div>

                    {/* <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6 mx-auto"> */}
                    <div className="grid grid-cols-2 gap-8 sm:mt-2 sm:grid-cols-3 sm:gap-4 mx-auto sm:mr-0 md:mr-0 md:ml-auto lg:ml-auto xl:ml-auto">
                        {/* DIRECCIÓN */}
                        <div className="inline-block" >
                            <div className="flex items-center sm:flex-row">
                                {/* <h2 className="m-2 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-bold text-[#263238] uppercase dark:text-white mx-0">Dirección</h2> */}
                                <h2 className="m-2 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-bold text-white uppercase dark:text-white mx-0">Dirección</h2>
                                <div className="text-2xl lg:text-4xl ml-2">

                                    <FaLocationDot
                                        className="lg:text-2xl" // Establece el tamaño más pequeño en dispositivos grandes
                                        size={22} // Esto es solo para referencia, la mayoría de las librerías de iconos no aceptan esta propiedad
                                        color="#FFFFFF"
                                    />
                                </div>
                            </div>
                            <ul className="text-gray-400 dark:text-gray-400 font-medium mt-2 sm:mt-0">
                                <li className="mb-2 sm:mb-4">
                                    <a target='_blank' href="https://www.google.com/maps/place/Ca.+Francisco+Bolognesi+140,+Chancay+15131/@-11.5660718,-77.2675745,21z/data=!4m6!3m5!1s0x910688dc2115f419:0x7ae3da1f94f3c03d!8m2!3d-11.5660643!4d-77.2675891!16s%2Fg%2F11hchw1c3j?entry=ttu" className="hover:underline text-xs sm:text-sm md:text-base lg:text-lg ">Calle Bolognesi N° 140 Peralvillo - Chancay</a>
                                </li>
                            </ul>
                        </div>

                        {/* TELEFONO */}
                        <div >
                            <div className="flex items-center sm:flex-row">
                                {/* <h2 className="m-2 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-bold text-[#263238] uppercase dark:text-white mx-0">Teléfono</h2> */}
                                <h2 className="m-2 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-bold text-white uppercase dark:text-white mx-0">Teléfono</h2>
                                <div className="text-2xl lg:text-4xl ml-2">
                                    <FaPhone
                                        className="lg:text-2xl" // Establece el tamaño más pequeño en dispositivos grandes
                                        size={22} // Esto es solo para referencia, la mayoría de las librerías de iconos no aceptan esta propiedad
                                        color="#FFFFFF"
                                    />
                                </div>
                            </div>
                            <ul className="text-gray-400 dark:text-gray-400 font-medium">
                                <li className="mb-4 sm:mb-2">
                                    <a href="tel:+51 947 660 790" className="hover:underline text-xs sm:text-sm md:text-base lg:text-lg">947 660 790</a>
                                </li>
                                <li className="mb-4 sm:mb-2">
                                    <a href="tel:+51 915 371 214" className="hover:underline text-xs sm:text-sm md:text-base lg:text-lg">915 371 214</a>
                                </li>
                                <li className="mb-4 sm:mb-2">
                                    <a href="tel:+51 948 468 643" className="hover:underline text-xs sm:text-sm md:text-base lg:text-lg">948 468 643</a>
                                </li>
                            </ul>
                        </div>

                        {/* CORREO */}
                        {/* <h2 className="m-2 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-bold text-[#263238] uppercase dark:text-white mx-0">Correos</h2> */}
                        <div className="max-w-sm overflow-hidden">
                            <div className="flex items-center sm:flex-row">
                                <h2 className="m-2 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-bold text-white uppercase dark:text-white mx-0">Correos</h2>
                                <div className="text-2xl lg:text-4xl ml-2">
                                    <FaEnvelope
                                        // className='w-auto h-auto ml-2 sm:ml-4'
                                        className="lg:text-2xl" // Establece el tamaño más pequeño en dispositivos grandes
                                        size={22} // Esto es solo para referencia, la mayoría de las librerías de iconos no aceptan esta propiedad
                                        color="#FFFFFF"
                                    />
                                </div>
                            </div>
                            <ul className="text-gray-400 dark:text-gray-400 font-medium">
                                <li className="mb-4 sm:mb-2">
                                    <a href="mailto:gerencia.general@chevasacperu.com" className="hover:underline text-xs sm:text-sm md:text-base lg:text-lg overflow-hidden">
                                        {/* Limita el ancho del texto y muestra puntos suspensivos (...) si se desborda */}
                                        <span className="max-w-full inline-block truncate">gerencia.general@chevasacperu.com</span>
                                    </a>
                                </li>
                                <li className="mb-4 sm:mb-2">
                                    <a href="mailto:asistentes.recursoshumanos@chevasacperu.com" className="hover:underline text-xs sm:text-sm md:text-base lg:text-lg overflow-hidden">
                                        <span className="max-w-full inline-block truncate">asistente.recursoshumanos@chevasacperu.com</span>
                                    </a>
                                </li>
                                <li className="mb-4 sm:mb-2">
                                    <a href="mailto:gerencia.comercial@chevasacperu.com" className="hover:underline text-xs sm:text-sm md:text-base lg:text-lg overflow-hidden">
                                        <span className="max-w-full inline-block truncate">gerencia.comercial@chevasacperu.com</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
                <hr className="border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <div className="flex flex-col-reverse sm:flex-row items-center justify-between pb-3">
                    <div className="text-center sm:text-left ">
                        <span className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-500 dark:text-gray-400">© {new Date().getFullYear()} CHEVA SAC. Todos los derechos reservados.</span>
                    </div>
                    <div className="flex flex-col items-center justify-center mt-4 sm:mt-0">
                        <a href="https://www.facebook.com/profile.php?id=100067477814586&mibextid=LQQJ4d" target='_blank' className="text-gray-500 hover:text-gray-900">
                            <BsFacebook color="#0866FF" size={'25'} />
                            {/* <span className="sr-only ">Facebook page</span> */}
                        </a>
                    </div>
                </div>
            </div>
        </footer >
    );
};
