import { useState, useEffect } from 'react';

import image1 from '../assets/carousel/norvial/1.png';
import image2 from '../assets/carousel/norvial/2.png';
import image3 from '../assets/carousel/norvial/3.png';

export const Home = () => {

    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            id: 1,
            title: 'Control',
            description: 'Para garantizar el servicio de forma eficiente y completa.',
            imageUrl: image1,
        },
        {
            id: 2,
            title: 'Apoyo',
            description: 'Inmediato ante cualquier eventualidad que se presente.',
            imageUrl: image2,
        },
        {
            id: 2,
            title: 'Cumplimos',
            description: 'nuestros proyectos de manera eficiente.',
            imageUrl: image3,
        },
    ];

    const handleNextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    };

    const handlePrevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
    };

    // Configura un intervalo para cambiar automáticamente las diapositivas cada 5 segundos
    useEffect(() => {
        const intervalId = setInterval(() => {
            handleNextSlide();
        }, 3000);

        // Limpia el intervalo al desmontar el componente
        return () => clearInterval(intervalId);
    }, [currentSlide]);

    const mobileHeight = '300px';
    const desktopHeight = '500px';

    return (
        // ORIGINAL
        // <div className="relative bg-[#ECECEC] mt-20 w-full mx-auto overflow-hidden" id='home'>
        //     <div className="flex flex-col md:flex-row">
        //         {/* Sección de Texto */}
        //         <div className="md:w-1/3 flex flex-col text-center justify-center text-white p-4 transition-opacity ease-in-out duration-500">
        //             <h2 className="text-4xl font-bold text-brandPrimary uppercase ">{slides[currentSlide].title}</h2>
        //             <p className="text-lg text-gray-700 sm:text-sm">{slides[currentSlide].description}</p>
        //         </div>

        //         {/* Sección de Imagen */}
        //         <div className='md:w-2/3 bg-cover bg-center flex items-center'>
        //             {/* Imagen para pantallas grandes */}
        //             <img
        //                 src={slides[currentSlide].imageUrl}
        //                 alt={slides[currentSlide].description}
        //                 className='hidden md:block md:rounded-lg mx-auto w-full md:h-[500px] md:w-[900px] object-cover'
        //                 style={{
        //                     borderRadius: "30px",
        //                     padding: "20px"
        //                 }}
        //             />
        //             {/* Imagen para dispositivos móviles */}
        //             <img
        //                 src={slides[currentSlide].imageUrl}
        //                 alt={slides[currentSlide].description}
        //                 className='block md:hidden md:rounded-lg mx-auto w-full h-[300px] object-cover'
        //                 style={{
        //                     borderRadius: "30px",
        //                     padding: "20px"
        //                 }}
        //             />
        //         </div>
        //     </div>

        //     {/* Flechas */}
        //     <div className="absolute inset-0 flex items-center justify-between p-4">
        //         <button onClick={handlePrevSlide} className="text-gray-600">
        //             {/* Flecha transparente hacia la izquierda */}
        //             <svg
        //                 xmlns="http://www.w3.org/2000/svg"
        //                 fill="none"
        //                 viewBox="0 0 24 24"
        //                 stroke="currentColor"
        //                 className="h-8 w-8"
        //             >
        //                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        //             </svg>
        //         </button>
        //         <button onClick={handleNextSlide} className="text-gray-600">
        //             {/* Flecha transparente hacia la derecha */}
        //             <svg
        //                 xmlns="http://www.w3.org/2000/svg"
        //                 fill="none"
        //                 viewBox="0 0 24 24"
        //                 stroke="currentColor"
        //                 className="h-8 w-8"
        //             >
        //                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        //             </svg>
        //         </button>
        //     </div>
        // </div>

        // OPCION
        <div className="relative bg-[#ECECEC] mt-20 w-full mx-auto overflow-hidden h-[500px]">
            <div className="flex flex-col md:flex-row h-full">
                {/* Sección de Texto */}
                <div className="md:w-1/3 flex flex-col text-center justify-center text-white p-4 transition-opacity ease-in-out duration-500">
                    <h2 className="text-4xl font-bold text-brandPrimary uppercase ">
                        {slides[currentSlide].title}
                    </h2>
                    <p className="text-lg text-gray-700 sm:text-sm">
                        {slides[currentSlide].description}
                    </p>
                </div>

                {/* Sección de Imagen */}
                <div className='md:w-2/3 bg-cover bg-center flex items-center overflow-hidden'>
                    {/* Imagen para pantallas grandes */}
                    <img
                        src={slides[currentSlide].imageUrl}
                        alt={slides[currentSlide].description}
                        className='hidden md:block md:rounded-lg mx-auto w-full md:h-[500px] md:w-[1000px] object-cover'
                        style={{
                            borderRadius: "30px",
                            padding: "20px"
                        }}
                    />
                    {/* Imagen para dispositivos móviles */}
                    <img
                        src={slides[currentSlide].imageUrl}
                        alt={slides[currentSlide].description}
                        className='block md:hidden md:rounded-lg mx-auto w-full object-cover'
                        style={{
                            height: '300px',
                            borderRadius: "30px",
                            padding: "20px"
                        }}
                    />
                </div>
            </div>

            {/* Flechas */}
            <div className="absolute inset-0 flex items-center justify-between p-4">
                <button onClick={handlePrevSlide} className="text-gray-600">
                    {/* Flecha transparente hacia la izquierda */}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="h-8 w-8"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
                <button onClick={handleNextSlide} className="text-gray-600">
                    {/* Flecha transparente hacia la derecha */}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="h-8 w-8"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>
        </div>
    );
}

        // 1. D6D6D6 
        // 2. B9C0C6 
        // 3. ECECEC

        // OPCION 1
        