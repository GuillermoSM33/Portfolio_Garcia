/* eslint-disable no-unused-vars */
import React from "react";
import Image from "../image/Yo.jpg";
import Header from "../components/Header";
import P2 from "../image/Proyectos2.jpg";
import Corpo from "../image/corpo.jpeg";

function Proyectos() {
    return (

        <>
            <Header></Header>
            <div className="flex flex-col md:flex-row text-center md:text-left p-10 pb-0 pt-10 bg-cyan-50">
                <div className=" p-10 pt-32 bg-cyan-50 md:w-3/4 md:flex-row text-center md:text-left">
                    <h1 className="text-4xl font-bold text-gray-600">Hola, soy Guillermo Garcia</h1>
                    <p className="text-xl dark:text-gray-450 mt-4">Y algunos de mis proyectos son los siguientes: </p>
                </div>

                <div className="md:w-1/4 flex justify-center items-center p-4 pt-8">
                    <img src={Image} className="rounded-full border-4 border-black border-double shadow-xl size-9/12"></img>
                </div>
            </div>

            <br></br>

            <div className="flex flex-col md:flex-row text-center md:text-left p-10 pt-10 bg-slate-100">

                <div className="md:w-2/4 p-4">
                    <h1 className="text-4xl font-bold pt-10 text-gray-900">Marings.</h1>
                    <p className="mb-3 text-gray-500 dark:text-gray-700 pt-8 font-mono tracking-wide text-pretty">
                        Se trata de un Ecommerce cuyo desarrolló se enfocó en aquellas personas que ofrezcan
                        servicios para bodas, ya que mediante esta plataforma los vendedores.
                        podían subir sus productos y cada proveedor se registraba en la aplicación.
                    </p>
                    <p className="text-gray-500 dark:text-gray-700 font-mono tracking-wide text-pretty">
                        Los usuarios podrían ver los productos de cada proveedor y podrían escoger paquetes
                        pre-armados que podían incluir los insumos u objetos necesarios para la "Boda de sus sueños".
                    </p>

                </div>

                <div className="md:w-2/4 flex justify-center items-center p-4 pt-24">
                    <img src={P2} className="rounded max-w-full h-auto" alt="Descripción de la imagen"></img>
                </div>

            </div>

            <br></br>

            <div className="flex flex-col md:flex-row text-center md:text-left p-10 pt-10 bg-slate-100 border-black border-2">

                <div className="md:w-2/4 flex justify-center items-center p-4 pt-28">
                    <img src={Corpo} className="rounded max-w-full h-auto" alt="Descripción de la imagen"></img>
                </div>

                <div className="md:w-2/4 p-4 border-solid border-black">
                    <h1 className="text-4xl font-bold pt-10 text-gray-900 text-center">Corpo Sano</h1>
                    <p className="mb-3 text-gray-500 dark:text-gray-700 pt-8 font-mono tracking-wide text-pretty">
                        Aplicación web desarrollada, para recomendar dietas a sus usuarios confome a su edad y su actividad física
                        , permitiendo que cada usuario tenga sus propios favoritos y que pueda gestionar estos,
                        mediante la adición o eliminación de estos.
                    </p>
                    <p className="text-gray-500 dark:text-gray-700 font-mono tracking-wide text-pretty">
                        Se permitía a los usuarios visualizar entre 10 recetas distintas según su edad y su actividad física.
                    </p>
                </div>

            </div>
        </>

    );
}

export default Proyectos;