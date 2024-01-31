import { useEffect, useRef } from 'react';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const About = () => {

    const quienesSomosRef = useRef(null);
    const misionRef = useRef(null);
    const visionRef = useRef(null);

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
                    slidesToShow: 3, // Cambia el número de slidesToShow para pantallas medianas
                    slidesToScroll: 1,
                    centerMode: false, // Desactiva el modo centrado en pantallas medianas
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: false, // Desactiva el modo centrado en pantallas más pequeñas
                },
            },
        ],
    };
    useEffect(() => {
        const handleVisibilityChange = () => {
            const sliders = [quienesSomosRef, misionRef, visionRef];
            sliders.forEach((slider) => {
                if (document.hidden) {
                    slider.current.slickPause();
                } else {
                    slider.current.slickPlay();
                }
            });
        };

        document.addEventListener('visibilitychange', handleVisibilityChange);

        return () => {
            document.removeEventListener('visibilitychange', handleVisibilityChange);
        };
    }, []);

    const imagenesQuienesSomos = [
        './src/assets/carousel/somos/1.png',
        './src/assets/carousel/somos/2.png',
        './src/assets/carousel/somos/3.png',
        './src/assets/carousel/somos/4.png',
        './src/assets/carousel/somos/5.png',
    ];
    const imagenesMision = [
        './src/assets/carousel/mision/1.png',
        './src/assets/carousel/mision/2.png',
        './src/assets/carousel/mision/3.png',
        './src/assets/carousel/mision/4.png',
        './src/assets/carousel/mision/5.png',
    ];
    const imagenesVision = [
        './src/assets/carousel/vision/1.png',
        './src/assets/carousel/vision/2.png',
        './src/assets/carousel/vision/3.png',
        './src/assets/carousel/vision/4.png',
        './src/assets/carousel/vision/5.png',
    ];


    return (
        <div id='about' className='md:px-14 px-4 pb-10'>
            {/* QUIENES SOMOS */}
            <div className="md:px-14 px-4 py-4 max-w-screen-2xl mx-auto flex flex-col md:flex-row items-center">
                <div className="text-center md:w-1/2 mx-auto my-5">
                    <h2 className='text-3xl md:text-4xl lg:text-5xl text-brandPrimary font-bold mb-2 uppercase'>
                        ¿Quienes Somos?
                    </h2>

                    <p className='md:w-3/4 text-sm text-neutralGrey mx-auto'>
                        Somos una empresa dedicada al rubro
                        de Servicios de Saneamiento Ambiental,
                        Mantenimiento, Seguridad Privada y
                        Servicios Generales, debidamente
                        acreditada y autorizada con años de
                        experiencia y con una cartera de
                        clientes conformada por empresas de
                        distintos sectores del mercado, los
                        cuales han permanecido hasta la fecha
                        en nuestras filas, nosotros sabemos y
                        entendemos las necesidades de
                        nuestros clientes para ofrecerles
                        servicios totalmente personalizados.
                    </p>
                </div>

                <div className="grid items-center gap-4 max-w-screen-lg mx-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-4 max-w-screen-md mx-auto">
                        <Slider {...settings} ref={quienesSomosRef} className="flex w-full md:mx-2 md:max-w-screen-md">
                            {imagenesQuienesSomos.map((imagen, index) => (
                                <div key={index} className="flex-shrink-0 flex items-center justify-center">
                                    <img
                                        className="w-full h-auto max-w-full rounded-lg cursor-pointer object-cover p-2 md:max-h-60"
                                        src={imagen}
                                        alt={`Thumbnail ${index + 1}`}
                                        style={{
                                            borderRadius: '20px',
                                            width: '100%',
                                            height: '150px',
                                            objectFit: 'cover',
                                            maxHeight: 'sm:max-h-30 md:max-h-50 lg:max-h-60',
                                            maxWidth: '100%', // Añade esta propiedad para asegurarte de que la imagen no sobrepase su contenedor
                                        }}
                                    />
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>

            </div>

            {/* MISION */}

            <div className="md:px-14 px-4 py-4 max-w-screen-2xl mx-auto flex flex-col items-center md:flex-row-reverse">
                <div className="text-center md:w-1/2 mx-auto my-5">
                    <h2 className='text-3xl md:text-4xl lg:text-5xl text-brandPrimary font-bold mb-2 uppercase'>
                        Misión
                    </h2>
                    <p className='md:w-3/4 text-sm text-neutralGrey mx-auto'>
                        Brindar nuestros servicios de forma
                        integral optimizando las necesidades de
                        nuestros clientes, cumpliendo los
                        estándares requeridos y la más alta
                        calidad, con personal altamente
                        calificado permitiendo su tranquilidad,
                        satisfacción y confianza.
                    </p>
                </div>
                <div className="grid items-center md:w-1/2 gap-4 max-w-screen-lg mx-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-4 max-w-screen-md mx-auto">
                        <Slider {...settings} ref={misionRef} className="flex w-full md:mx-2 md:max-w-screen-md">
                            {imagenesMision.map((imagen, index) => (
                                <div key={index} className="flex-shrink-0 flex items-center justify-center">
                                    <img
                                        className="w-full h-auto max-w-full rounded-lg cursor-pointer object-cover p-2"
                                        src={imagen}
                                        alt={`Thumbnail ${index + 1}`}
                                        style={{
                                            borderRadius: '20px',
                                            width: '100%',
                                            height: '150px',
                                            objectFit: 'cover',
                                            maxHeight: 'sm:max-h-30 md:max-h-50 lg:max-h-60',
                                            maxWidth: '100%',
                                        }}
                                    />
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>

            {/* VISIÓN */}
            <div className="md:px-14 px-4 py-4 max-w-screen-2xl mx-auto flex flex-col md:flex-row items-center">
                <div className="text-center md:w-1/2 mx-auto my-5">
                    <h2 className='text-3xl md:text-4xl lg:text-5xl text-brandPrimary font-bold mb-2 uppercase'>
                        Visión
                    </h2>

                    <p className='md:w-3/4 text-sm text-neutralGrey mx-auto'>
                        Ser una empresa líder en nuestro rubro, brindando un servicio personalizado y trabajando de manera conjunta.
                    </p>
                </div>

                <div className="grid items-center gap-4 max-w-screen-lg mx-auto">

                    <div className=" grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-4 max-w-screen-md mx-auto">
                        <Slider {...settings} ref={visionRef} className="flex w-full md:mx-2 md:max-w-screen-md">
                            {imagenesVision.map((imagen, index) => (
                                <div key={index} className="flex-shrink-0 flex items-center justify-center ">
                                    <img
                                        className="w-full h-auto max-w-full cursor-pointer object-cover p-2 "
                                        src={imagen}
                                        alt={`Thumbnail ${index + 1}`}
                                        style={{
                                            borderRadius: '20px',
                                            width: '100%',
                                            height: '150px',
                                            objectFit: 'cover',
                                            maxHeight: 'sm:max-h-30 md:max-h-50 lg:max-h-60',
                                            maxWidth: '100%', // Añade esta propiedad para asegurarte de que la imagen no sobrepase su contenedor
                                        }} // Ajusta el valor de maxHeight según tus necesidades
                                    />
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>

            </div>

        </div>
    );
}
