
import { useEffect, useRef, useState } from 'react';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const Clientes = () => {

    const imagenesPequenas = [
        './src/assets/clientes/BOSQUES DE CALANGO.png',
        './src/assets/clientes/BUONAVISTA.png',
        './src/assets/clientes/CHECSAC.png',
        './src/assets/clientes/CONCAR.png',
        './src/assets/clientes/CONSORCIO DEL NORTE.png',
        './src/assets/clientes/COSCO SHIPPING.png',
        './src/assets/clientes/CREC10.png',
        './src/assets/clientes/FAMESA.png',
        './src/assets/clientes/HCHANCAY.png',
        './src/assets/clientes/NORVIAL.png',
        './src/assets/clientes/PELAYO.png',
        './src/assets/clientes/SMART NETWORK.png',
        './src/assets/clientes/MANPERAN.png',
        './src/assets/clientes/TRANSMARINA.png',
    ];

    const sliderRef = useRef(null);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        autoplay: true, // Habilita el autoplay
        autoplaySpeed: 2000, // Establece el intervalo de cambio en milisegundos (en este caso, 3000 ms o 3 segundos)
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    useEffect(() => {
        // Desactiva el autoplay cuando el carrusel está fuera de la vista
        const slider = sliderRef.current;
        const handleVisibilityChange = () => {
            if (document.hidden) {
                slider.slickPause();
            } else {
                slider.slickPlay();
            }
        };

        document.addEventListener('visibilitychange', handleVisibilityChange);

        return () => {
            document.removeEventListener('visibilitychange', handleVisibilityChange);
        };
    }, []);

    return (
        <div className="md:px-14 px-8 pt-10 max-w-screen-2xl mx-auto" id='clientes'>
            <div className="text-center w-full mx-auto my-5">
                <h2 className='text-3xl md:text-4xl lg:text-5xl text-brandPrimary font-extrabold mb-2 uppercase'>
                    Nuestros Clientes
                </h2>

                <p className='text-sm md:text-base text-neutralGrey mb-8 mx-auto'>
                    Poseemos una organización empresarial eficiente, que nos permite cumplir a
                    cabalidad las metas propuestas, contando para ello con profesionales de alto nivel por su
                    capacidad y experiencia.
                </p>
            </div>

            {/* CORRECTO */}
            <div className="grid items-center gap-4 max-w-screen-lg mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-4 max-w-screen-md mx-auto w-full">
                    <Slider {...settings} ref={sliderRef} className="flex w-full">
                        {imagenesPequenas.map((imagenPequena, index) => (
                            <div key={index} className="flex-shrink-0 flex items-center justify-center">
                                <img
                                    className="w-full h-auto rounded-lg cursor-pointer object-cover p-2"
                                    src={imagenPequena}
                                    alt={`Thumbnail ${index + 1}`}
                                    style={{
                                        objectFit: 'contain', // Puedes ajustar esto a 'cover' o 'fill' según tus necesidades
                                        objectPosition: 'center center', // Ajusta esto según sea necesario
                                        height: '200px',
                                        width: '250px',
                                    }}
                                />
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div >
    );
}
