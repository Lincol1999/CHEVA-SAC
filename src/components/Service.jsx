import { useRef, useState } from "react";

export const Service = () => {

    const [showMore, setShowMore] = useState(false);
    const serviceSectionRef = useRef();

    const handleToggleMore = () => {
        // Guarda el estado actual de showMore antes de cambiarlo
        const currentShowMore = showMore;

        setShowMore(!showMore);

        // Si showMore cambió de true a false, realiza el desplazamiento
        if (currentShowMore && serviceSectionRef.current) {
            serviceSectionRef.current.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
    };

    // Estado para manejar la expansión de cada tarjeta
    const [showFullText, setShowFullText] = useState({
        card1: false,
        card2: false,
        card4: false,
        card5: false,
        card6: false,
        card7: false,
        card8: false,
    });

    // Función para cambiar el estado de una tarjeta específica
    const handleToggleText = (card) => {
        setShowFullText((prevState) => ({
            ...prevState,
            [card]: !prevState[card],
        }));
    };

    return (
        <div className="md:px-14 px-4 py-4 max-w-screen-2xl mx-auto" id="service" ref={serviceSectionRef}>
            <div
                className="text-center mt-0">
                <h1 className="text-3xl md:text-4xl lg:text-5xl text-brandPrimary font-extrabold mb-2 uppercase">Nuestros Servicios</h1>
                <p className="text-neutralDGrey">Hemos estado trabajando con más de 500 clientes.</p>
            </div>

            {/* SANEAMIENTO AMBIENTAL */}
            <div className="mt-10 md:w-1/2 mx-auto text-center flex justify-center">
                <h2 className="text-2xl text-black font-bold mb-3">
                    Saneamiento ambiental
                </h2>
            </div>

            {/* CARD 1 */}
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mx-auto gap-12 justify-center p-2'>

                <div className="mt-5 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:border-gray-400
                    cursor-pointer hover:-translate-y-5 hover:border-b-4 hover:border-gray-400 transition-all duration-300 mx-auto"
                >
                    <a >
                        <img className="rounded-t-lg w-full h-auto" src="src/assets/carousel/saneamiento/1.png" alt="" />
                    </a>
                    <div className="p-5 ">
                        <a >
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Limpieza general, especializada e industrial
                            </h5>
                        </a>
                        <p className={`mb-3 font-normal text-gray-700 dark:text-gray-600 ${showFullText.card1 ? 'max-h-full' : 'max-h-20 overflow-hidden'}`}>Nuestro personal cuenta con experiencia en limpieza en diferentes áreas como: campamentos, condominios, oficinas, hospitales, pesqueras, vías públicas, entre otros. Brindando un servicios de calidad a nuestros clientes.</p>
                        <button
                            onClick={() => handleToggleText('card1')}
                            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg  bg-blue-800 hover:bg-brandPrimary"
                        >
                            {showFullText.card1 ? 'Ver menos' : 'Ver más'}
                            <svg className={`rtl:rotate-180 w-3.5 h-3.5 ms-2 transition-transform transform ${showFullText.card1 ? 'rotate-180' : ''}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                        </button>
                    </div>
                </div>

                <div className="mt-5 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:border-gray-400
                    cursor-pointer hover:-translate-y-5 hover:border-b-4 hover:border-gray-400 transition-all duration-300 mx-auto"
                >
                    <a >
                        <img className="rounded-t-lg w-full h-auto" src="src/assets/carousel/saneamiento/2.png" alt="" />
                    </a>
                    <div className="p-4">
                        <a >
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Desinfección</h5>
                        </a>
                        <p className={`mb-3 font-normal text-gray-700 dark:text-gray-600 ${showFullText.card2 ? 'max-h-full' : 'max-h-20 overflow-hidden'}`}>Contamos con personal capacitado para la desinfección de todo tipo de ambientes, contando con las medidas de seguridad requeridas.</p>
                        <button
                            onClick={() => handleToggleText('card2')}
                            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg  bg-blue-800 hover:bg-brandPrimary"
                        >
                            {showFullText.card2 ? 'Ver menos' : 'Ver más'}
                            <svg className={`rtl:rotate-180 w-3.5 h-3.5 ms-2 transition-transform transform ${showFullText.card2 ? 'rotate-180' : ''}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                        </button>
                    </div>
                </div>

                <div className="mt-5 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:border-gray-400
                    cursor-pointer hover:-translate-y-5 hover:border-b-4 hover:border-gray-400 transition-all duration-300 mx-auto"
                >
                    <a >
                        <img className="rounded-t-lg w-full h-auto" src="src/assets/carousel/saneamiento/3.png" alt="" />
                    </a>
                    <div className="p-5 ">
                        <a >
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Desratización</h5>
                        </a>
                        <p className={`mb-3 font-normal text-gray-700 dark:text-gray-600`}>Brindamos el servicio de control y eliminación de plagas de hogares, negocios y cualquier otro tipo de instalación.</p>

                    </div>
                </div>

            </div>

            {/* Mostrar el botón "Ver más" solo si no se están mostrando más contenidos */}
            {!showMore && (
                <div className="text-center mt-5">
                    <button
                        onClick={handleToggleMore}
                        className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white  rounded-lg  bg-blue-800 hover:bg-brandPrimary"
                    >
                        Ver más
                        <svg
                            className={`rtl:rotate-180 w-3.5 h-3.5 ms-2 transition-transform transform ${showMore ? 'rotate-180' : ''
                                }`}
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 14 10"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M1 5h12m0 0L9 1m4 4L9 9"
                            />
                        </svg>
                    </button>
                </div>
            )}

            {/* Condición para mostrar más contenido */}
            {showMore && (
                <>
                    {/* SEGURIDAD Y VIGILANCIA */}
                    <div className="mt-20 md:w-1/2 mx-auto text-center">
                        <h2 className="text-2xl text-black font-bold mb-3 flex justify-center">
                            Seguridad y vigilancia
                        </h2>
                    </div>

                    {/* CARD 2 */}
                    <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:w-11/12 mx-auto gap-12 justify-center p-2'>

                        <div className="mt-5 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:border-gray-400
                    cursor-pointer hover:-translate-y-5 hover:border-b-4 hover:border-gray-400 transition-all duration-300 mx-auto"
                        >
                            <a >
                                <img className="rounded-t-lg w-full h-auto" src="src/assets/carousel/seguridad/1.png" alt="" style={{ height: '400px' }} />
                            </a>
                            <div className="p-5 ">
                                <a >
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Seguridad privada
                                    </h5>
                                </a>
                                <p className={`mb-3 font-normal text-gray-700 dark:text-gray-600 ${showFullText.card4 ? 'max-h-full' : 'max-h-20 overflow-hidden'}`}>Contamos con personal
                                    capacitado y entrenado en
                                    velar por la seguridad de
                                    nuestros clientes,
                                    brindando una respuesta
                                    rápida en diversas
                                    situaciones que se
                                    presente.</p>
                                <button
                                    onClick={() => handleToggleText('card4')}
                                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg  bg-blue-800 hover:bg-brandPrimary"
                                >
                                    {showFullText.card4 ? 'Ver menos' : 'Ver más'}
                                    <svg className={`rtl:rotate-180 w-3.5 h-3.5 ms-2 transition-transform transform ${showFullText.card4 ? 'rotate-180' : ''}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        <div className="mt-5 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:border-gray-400
                    cursor-pointer hover:-translate-y-5 hover:border-b-4 hover:border-gray-400 transition-all duration-300 mx-auto"
                        >
                            <a >
                                <img className="rounded-t-lg w-full h-auto" src="src/assets/carousel/seguridad/3.png" alt="" style={{ height: '400px' }} />
                            </a>
                            <div className="p-4">
                                <a >
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">Seguridad en eventos</h5>
                                </a>
                                <div className={`mb-3 font-normal text-gray-700 dark:text-gray-600 ${showFullText.card5 ? 'max-h-full' : 'max-h-20 overflow-hidden'}`}>Staff de personal capacitado
                                    para que pueda disfrutar de su
                                    evento brindando tranquilidad y
                                    seguridad a sus invitados:
                                    <p>
                                        - Control de acceso al evento.</p>
                                    <p>
                                        - Chequeos vehiculares.
                                    </p>
                                    <p>
                                        - Vigilancia en estacionamientos
                                        y control de espacios asignados.
                                    </p>
                                    <p>
                                        - Verificación de identidad de
                                        invitados.
                                    </p>

                                </div>
                                <button
                                    onClick={() => handleToggleText('card5')}
                                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg  bg-blue-800 hover:bg-brandPrimary"
                                >
                                    {showFullText.card5 ? 'Ver menos' : 'Ver más'}
                                    <svg className={`rtl:rotate-180 w-3.5 h-3.5 ms-2 transition-transform transform ${showFullText.card5 ? 'rotate-180' : ''}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        <div className="mt-5 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:border-gray-400
                    cursor-pointer hover:-translate-y-5 hover:border-b-4 hover:border-gray-400 transition-all duration-300 mx-auto"
                        >
                            <a >
                                <img className="rounded-t-lg w-full h-auto" src="src/assets/carousel/seguridad/5.png" alt="" style={{ height: '400px' }} />
                            </a>
                            <div className="p-5 ">
                                <a >
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Seguridad electrónica</h5>
                                </a>
                                <div className={`mb-3 font-normal text-gray-700 dark:text-gray-600 ${showFullText.card6 ? 'max-h-full' : 'max-h-20 overflow-hidden'}`}>Contamos con personal calificado
                                    para cubrir los puestos en el
                                    Centro de Control de Comando de
                                    la seguridad electrónica y
                                    realizamos también:
                                    <p>
                                        - Instalación y mantenimiento de
                                        cámaras.
                                    </p>
                                    <p>
                                        - Instalación de alarmas.
                                    </p>

                                    <p>
                                        - Instalación de control de acceso.
                                    </p>
                                </div>
                                <button
                                    onClick={() => handleToggleText('card6')}
                                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg  bg-blue-800 hover:bg-brandPrimary"
                                >
                                    {showFullText.card6 ? 'Ver menos' : 'Ver más'}
                                    <svg className={`rtl:rotate-180 w-3.5 h-3.5 ms-2 transition-transform transform ${showFullText.card6 ? 'rotate-180' : ''}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                    </div>

                    {/* MANTENIMIENTO */}
                    <div className="mt-20 md:w-1/2 mx-auto text-center">
                        <h2 className="text-2xl text-black font-bold mb-3 flex justify-center">
                            Mantenimiento
                        </h2>
                    </div>

                    {/* CARD 3 */}
                    <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:w-11/12 mx-auto gap-12 justify-center p-2'>

                        <div className="mt-5 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:border-gray-400
                    cursor-pointer hover:-translate-y-5 hover:border-b-4 hover:border-gray-400 transition-all duration-300 mx-auto"
                        >
                            <a >
                                <img className="rounded-t-lg w-full h-auto" src="src/assets/carousel/mantenimiento/1.png" alt="" />
                            </a>
                            <div className="p-5 ">
                                <a >
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">Obras civiles,
                                        construcción de
                                        infraestructura
                                    </h5>
                                </a>
                                <p className={`mb-3 font-normal text-gray-700 dark:text-gray-600 ${showFullText.card7 ? 'max-h-full' : 'max-h-20 overflow-hidden'}`}>Atendemos los
                                    requerimientos y
                                    direccionamos las ideas y
                                    objetivos de nuestros
                                    clientes para elaborar un
                                    proyecto que satisfaga sus
                                    necesidades.</p>
                                <button
                                    onClick={() => handleToggleText('card7')}
                                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg  bg-blue-800 hover:bg-brandPrimary"
                                >
                                    {showFullText.card7 ? 'Ver menos' : 'Ver más'}
                                    <svg className={`rtl:rotate-180 w-3.5 h-3.5 ms-2 transition-transform transform ${showFullText.card7 ? 'rotate-180' : ''}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        <div className="mt-5 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:border-gray-400
                    cursor-pointer hover:-translate-y-5 hover:border-b-4 hover:border-gray-400 transition-all duration-300 mx-auto"
                        >
                            <a >
                                <img className="rounded-t-lg w-full h-auto" src="src/assets/carousel/mantenimiento/2.png" alt="" style={{ height: '300px' }} />
                            </a>
                            <div className="p-4">
                                <a >
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">Mantenimiento
                                        preventivo y
                                        correctivo
                                    </h5>
                                </a>
                                <p className={`mb-3 font-normal text-gray-700 dark:text-gray-600 ${showFullText.card8 ? 'max-h-full' : 'max-h-20 overflow-hidden'}`}>
                                    Desarrollamos mantenimientos de grupos electrógenos, aire acondicionado, mecanizado y mantenimiento general.
                                </p>
                                <button
                                    onClick={() => handleToggleText('card8')}
                                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg  bg-blue-800 hover:bg-brandPrimary"
                                >
                                    {showFullText.card8 ? 'Ver menos' : 'Ver más'}
                                    <svg className={`rtl:rotate-180 w-3.5 h-3.5 ms-2 transition-transform transform ${showFullText.card8 ? 'rotate-180' : ''}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        <div className="mt-5 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:border-gray-400
                    cursor-pointer hover:-translate-y-5 hover:border-b-4 hover:border-gray-400 transition-all duration-300 mx-auto"
                        >
                            <a >
                                <img className="rounded-t-lg w-full h-auto" src="src/assets/carousel/mantenimiento/3.png" alt="" style={{ height: '300px' }} />
                            </a>
                            <div className="p-5 ">
                                <a >
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Pintado</h5>
                                </a>
                                <p className={`mb-3 font-normal text-gray-700 dark:text-gray-600`}>
                                    Desarrollamos el servicio
                                    de pintado de fachadas
                                    con personal capacitado y
                                    con las medidas de
                                    seguridad necesarias.

                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Mostrar el botón "Ver menos" */}
                    <div className="text-center mt-5">
                        <button
                            onClick={handleToggleMore}
                            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg  bg-blue-800 hover:bg-brandPrimary"
                        >

                            Ver menos
                            <svg
                                className={`rtl:rotate-180 w-3.5 h-3.5 ms-2 transition-transform transform ${showMore ? 'rotate-180' : ''
                                    }`}
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 14 10"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M1 5h12m0 0L9 1m4 4L9 9"
                                />
                            </svg>
                        </button>
                    </div>
                </>
            )}
        </div>
    );
}
