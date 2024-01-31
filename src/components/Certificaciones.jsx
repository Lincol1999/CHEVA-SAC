
export const Certificaciones = () => {

    return (

        <div className="px-4 py-10 max-w-screen-2xl mx-auto" id="Certificaciones">
            <div className="text-center my-5">
                <h2 className="text-3xl md:text-4xl lg:text-5xl text-brandPrimary font-bold mb-2 uppercase">Nuestras autorizaciones y certificaciones</h2>
                <p className="text-neutralDGrey text-sm md:text-base">Contamos con certificaciones a nivel Nacional e Internacional</p>

                {/* Company Logo */}
                <div className="my-12 flex flex-wrap justify-center items-center gap-8">
                    <div className="max-w-full">
                        <img className="max-w-full h-auto" src=".src/assets/certificados/LOGO-ARS-9001.png" alt="" />
                    </div>
                    <div className="max-w-full">
                        <img className="max-w-full h-auto" src="./src/assets/certificados/LOGO-IAF.png" alt="" />
                    </div>
                    <div className="max-w-full">
                        <img className="max-w-full h-auto" src="./src/assets/certificados/LOGO-RNP-OSCE.png" alt="" />
                    </div>
                    <div className="max-w-full">
                        <img className="max-w-full h-auto" src="./src/assets/certificados/LOGO-UAF.png" alt="" />
                    </div>
                    <div className="max-w-full">
                        <img className="max-w-full h-auto" src="./src/assets/certificados/Marina-Guerra.png" alt="" />
                    </div>
                    <div className="max-w-full">
                        <img className="max-w-full h-auto" src="./src/assets/certificados/MINISTERIO-DEL-TRABAJO.png" alt="" />
                    </div>
                    <div className="max-w-full">
                        <img className="max-w-full h-auto" src="./src/assets/certificados/Ministerio-Salud.png" alt="" />
                    </div>

                </div>
            </div>
        </div>
    )
}
