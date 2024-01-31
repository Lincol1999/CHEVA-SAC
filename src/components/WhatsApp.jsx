import React from 'react'
import { FaWhatsapp } from 'react-icons/fa6'

export const WhatsApp = () => {
    return (
        <div className="fixed bottom-12 right-4 md:bottom-8 md:right-8 lg:bottom-12 lg:right-12 xl:bottom-16 xl:right-16 z-50 " >
            <a href="https://wa.me/51940705545" target='_blank'

            >
                <FaWhatsapp className="cursor-pointer animate-bounce  rounded-2xl" size={50} sm:size={30} md:size={35} lg:size={45} xl:size={55} color='#25D366' />
            </a>
        </div>
    )
}
