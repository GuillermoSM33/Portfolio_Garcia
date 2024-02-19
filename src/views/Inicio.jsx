import Header from "../components/Header"
import Image from "../image/Yo.jpg";
import { Link } from "react-router-dom";

export default function Inicio() {
  return (
    <>
      <Header></Header>

      <div className="flex flex-col md:flex-row text-center md:text-left p-10 pb-0 pt-10 bg-cyan-50">
        <div className=" p-10 pt-32 bg-cyan-50 md:w-3/4 md:flex-row text-center md:text-left">
          <h1 className="text-4xl font-bold text-gray-600">Hola, soy Guillermo Garcia</h1>
          <p className="text-xl dark:text-gray-450 mt-4">Desarrollador Back-End especializado en crear experiencias digitales que cautivan.</p>
          <div className="flex justify-center mt-6">
            <Link to="/proyectos" className="bg-blue-500 text-white px-6 py-2 rounded-lg mx-2 hover:bg-blue-600 transition duration-300">Ver Proyectos</Link>
            <Link to="/contacto" className="border-2 border-blue-500 text-blue-500 px-6 py-2 rounded-lg mx-2 hover:bg-blue-500 hover:text-white transition duration-300">Contáctame</Link>
          </div>
        </div>

        <div className="md:w-1/4 flex justify-center items-center p-4 pt-8">
          <img src={Image} className="rounded-full border-4 border-black border-double shadow-xl size-9/12"></img>
        </div>
      </div>

      <br></br>

      <div className="flex flex-col md:flex-row text-center md:text-left p-10 pt-10 bg-slate-100">

        <div className="md:w-3/4 p-4">
          <h1 className="text-4xl font-bold pt-10 text-gray-900">Un poco más de mí.</h1>
          <p className="mb-3 text-gray-500 dark:text-gray-700 pt-8 font-mono tracking-wide text-pretty">
            Como desarrollador web Back-End me encuentro altamente familiarizado
            con el trabajo en equipo, el análisis de datos y la resolución de problemas.
            Cuento con facilidad para la adaptación a nuevas tecnologías y metodologías de trabajo.
          </p>
          <p className="text-gray-500 dark:text-gray-700 font-mono tracking-wide text-pretty">
            He trabajado en atención al público, por lo que garantizo una experiencia
            de servicio que pueda ser tanto rápida como eficaz, ajustándome a diferentes complejidades,
            y niveles de presión. Estoy abierto al uso de herramientas de desarrollo, según se requiera
            para desarrollar entornos y cambios a sistemas, que puedan ofrecer un nivel de satisfacción más completo.
          </p>

        </div>

        <div className="md:w-1/4 flex justify-center items-center p-4 pt-24">
          <img src="https://cdn-icons-png.flaticon.com/128/8699/8699511.png" className="rounded max-w-full h-auto" alt="Descripción de la imagen"></img>
        </div>

      </div>

      <br></br>

      <div className="flex flex-col md:flex-row text-center md:text-left p-10 pt-10 bg-slate-100 border-black border-2">

        <div className="md:w-1/4 flex justify-center items-center p-4 pt-28">
          <img src="https://cdn-icons-png.flaticon.com/128/2641/2641157.png" className="rounded max-w-full h-auto" alt="Descripción de la imagen"></img>
        </div>

        <div className="md:w-3/4 p-4 border-solid border-black">
          <h1 className="text-4xl font-bold pt-10 text-gray-900 text-center">Manejo De Tecnologías</h1>
          <p className="mb-3 text-gray-500 dark:text-gray-700 pt-8 font-mono tracking-wide text-pretty">
            En cuánto a frameworks de desarrollo estoy familiarizado con Laravel, Vite con
            React, Express.js, Vue.js, React-Native, Flet.
            Así mismo tengo conocimiento en Node así como su framework Nest.js.
          </p>
          <p className="text-gray-500 dark:text-gray-700 font-mono tracking-wide text-pretty">
            Gracias a estas tecnologías he podido desarrollar aplicaciones Web, aplicaciones nativas
            y aplicaciones multiplataforma.
          </p>
        </div>

      </div>

    </>
  )
}   