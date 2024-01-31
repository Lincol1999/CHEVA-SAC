import { useEffect, useState } from "react"

import { Link } from "react-scroll";
import { FaXmark, FaBars } from "react-icons/fa6";

import logo from '../assets/logo.png'
import { useRef } from "react";

export const Navbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(true);
    const [scrollDirection, setScrollDirection] = useState("none");
    const prevScrollY = useRef(0);
    // set toggle menu
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY >= prevScrollY.current) {
                setScrollDirection("down");
            } else if (currentScrollY < prevScrollY.current) {
                setScrollDirection("up");
            }

            prevScrollY.current = currentScrollY;

            if (currentScrollY > 100 && scrollDirection === "down") {
                setIsSticky(false);
            } else {
                setIsSticky(true);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [scrollDirection]);

    // NaviItems array 
    const navItems = [
        { link: 'Inicio', path: "home" },
        { link: 'Acerca', path: "about" },
        { link: 'Servicios', path: "service" },
        { link: 'Clientes', path: "clientes" },
        { link: 'Certificaciones', path: "Certificaciones" },
    ];

    return (
        <header className="w-full md:bg-transparent fixed top-0 left-0 right-0">
            {/* <nav className={`py-4 lg:px-14 px-4 ${isSticky ? "sticky top-0 left-0 right-0 border-b bg-white duration-300" : ""}`}> */}

            <nav
                className={`py-4 lg:px-14 px-4 ${isSticky ? 'sticky top-0 left-0 right-0 border-b bg-brandPrimary duration-300' : 'hidden'
                    }`}
            >
                <div className="flex justify-between items-center text-base gap-8">
                    <a href="" className="text-2xl font-bold flex items-center space-x-3">
                        <img src={logo} alt="Logo" className="w-10 inline-block items-center" />
                        <span className="text-white">
                            CHEVA SAC
                        </span>
                    </a>

                    {/* Nav Items for large devices */}
                    <ul className="md:flex space-x-12 hidden">
                        {
                            navItems.map(({ link, path }) =>
                                <Link key={path} to={path} spy={true} smooth={true} offset={-100}
                                    className="block text-base text-white hover:text-gray-500 first:font-medium cursor-pointer"
                                >
                                    {link}
                                </Link>
                            )
                        }
                    </ul>

                    {/* btn for large devices*/}
                    <div className="space-x-12 hidden lg:flex items-center">
                        <button className="bg-yellow-400 text-white py-2 px-4 transition-all duration-300 rounded hover:bg-yellow-600">
                            <a href="tel: +51 915 371 214">
                                Contactenos
                            </a>
                        </button>
                    </div>

                    {/* Menú btn for only mobile devices */}
                    <div className="md:hidden">
                        <button
                            onClick={toggleMenu}
                            className="text-white focus:outline-none focus:text-white">
                            {
                                isMenuOpen ? (<FaXmark className="h-6 w-6" />) : (<FaBars className="h-6 w-6" />)
                            }
                        </button>
                    </div>

                </div>

                {/* Nav Items for mobile devices */}
                <div className={`space-y-4 px-4 mt-16 py-7 bg-brandPrimary ${isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"}`}>
                    {
                        navItems.map(({ link, path }) =>
                            <Link key={path} to={path} spy={true} smooth={window.innerWidth >= 768} offset={-100}
                                className="block text-base text-white hover:text-gray-500 first:font-medium cursor-pointer"
                            >
                                {link}
                            </Link>
                        )
                    }
                </div>
            </nav>
        </header>
    )
}
