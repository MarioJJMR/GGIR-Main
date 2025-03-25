import React from 'react';
import { Link } from 'react-router-dom';

const Portfolio = () => {
    return (
        <>
            <div className="my-4 py-4" id='portfolio'>
                <h2 className="my-2 text-center text-3xl text-blue-900 uppercase font-bold">Nuestros Servicios</h2>
                <div className='flex justify-center'>
                    <div className='w-24 border-b-4 border-blue-900 mb-8'></div>
                </div>

                <div className="px-4" data-aos="fade-down" data-aos-delay="600">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">                            
                    <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3">
                            <div className="m-2 text-justify text-sm">
                            <h4 className="font-semibold my-4 text-lg md:text-2xl text-center mb-4 h-12"> Venta de equipos</h4>
                                <p className="text-md font-medium leading-5 h-auto md:h-48">
                                Desde un equipo minisplit, piso techo, hasta unidades paquete, chillers (equipos de agua helada) y unidades VRF.
                                </p>
                                <div className="flex justify-center my-4">
                                   
                                </div>
                            </div>
                        </div>

                        <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3">
                            <div className="m-2 text-justify text-sm">
                            <h4 className="font-semibold my-4 text-lg md:text-2xl text-center mb-4 h-12"> Instalacion</h4>
                                <p className="text-md font-medium leading-5 h-auto md:h-48">
                                Servicio de Instalación de primera. Técnicos certificados en refrigeración. Desde un minisplit hasta un sistema industrial.
                                </p>
                                <div className="flex justify-center my-4">
                                   
                                </div>
                            </div>
                        </div>


                        <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3">
                            <div className="m-2 text-justify text-sm">
                            <h4 className="font-semibold my-4 text-lg md:text-2xl text-center mb-4 h-12"> Mantenimiento</h4>
                                <p className="text-md font-medium leading-5 h-auto md:h-48">
                                Ofrecemos mantenimiento preventivo y correctivo. Servicio el mismo día, ya sea un minisplit o un equipo industrial, nosotros te apoyamos.

</p>
                                <div className="flex justify-center my-4">
                                   
                                </div>
                            </div>
                        </div>

                                          
                    </div>
                </div>
            </div>
        </>
    )
}

export default Portfolio;