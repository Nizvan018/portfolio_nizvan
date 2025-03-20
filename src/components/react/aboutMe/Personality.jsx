import SquareItem from "./SquareItem";
import { useState } from "react";

export default function Personality() {
    const [hoveredItem, setHoveredItem] = useState(0);

    return (
        <section id="personality" className="flex flex-col items-center gap-16 w-full scroll-target">
            <div className="flex flex-col items-center gap-6">
                <h2 className="w-fit h-[50px] text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-violet-500 to-sky-500 duration-200 opacity-85">
                    Este soy yo
                </h2>
                <p className="text-center text-base md:text-lg font-extralight text-white/80">
                    Estos son algunos de los razgos de mi personalidad que considero que
                    más me definen a la hora de trabajar y como persona.
                </p>
            </div>

            <div className="flex flex-col md:flex-row gap-8 w-full max-w-[1000px]">
                <div className="grid grid-cols-4 md:grid-cols-2 gap-4 sm:gap-6 md:gap-4 w-full">
                    <div onMouseEnter={() => setHoveredItem(1)} onMouseLeave={() => setHoveredItem(0)}>
                        <SquareItem number={1} heading="Perfeccionista" bgStyle="pink-br" />
                    </div>
                    <div onMouseEnter={() => setHoveredItem(2)} onMouseLeave={() => setHoveredItem(0)}>
                        <SquareItem number={2} heading="Curioso" bgStyle="blue-bl" />
                    </div>
                    <div onMouseEnter={() => setHoveredItem(3)} onMouseLeave={() => setHoveredItem(0)}>
                        <SquareItem number={3} heading="Dedicado" bgStyle="blue-tr" />
                    </div>
                    <div onMouseEnter={() => setHoveredItem(4)} onMouseLeave={() => setHoveredItem(0)}>
                        <SquareItem number={4} heading="Apasionado" bgStyle="pink-tl" />
                    </div>
                </div>
                <article className="relative w-full h-96 md:h-auto">
                    <div
                        className={`${hoveredItem == 0 ? "opacity-100" : "opacity-0"} absolute top-0 left-0 flex flex-col gap-2 w-full duration-300`}
                    >
                        <span className="font-medium">Instrucciones</span>
                        <p className="hidden sm:block font-extralight">Posiciona tu ratón por encima de algún elemento para ver una descripción detallada del mismo.</p>
                        <p className="sm:hidden font-extralight">Presiona encima de algún elemento para ver una descripción detallada del mismo.</p>
                    </div>

                    <div
                        className={`${hoveredItem == 1 ? "opacity-100" : "opacity-0"} absolute top-0 left-0 flex flex-col gap-2 w-full duration-300`}
                    >
                        <span className="font-medium text-white/50">Cualidad 01</span>
                        <h3 className="text-3xl font-medium">Perfeccionista</h3>
                        <p className="font-extralight">Me afinar hasta el más mínimo detalle. A veces puede ser frustrante permanecer tanto tiempo en una sola cosa, pero cuando logro el resultado exacto que buscaba, sé que todo el esfuerzo valió la pena.</p>
                    </div>
                    <div
                        className={`${hoveredItem == 2 ? "opacity-100" : "opacity-0"} absolute top-0 left-0 flex flex-col gap-2 w-full duration-300`}
                    >
                        <span className="font-medium text-white/50">Cualidad 02</span>
                        <h3 className="text-3xl font-medium">Curioso</h3>
                        <p className="font-extralight">Empecé a programar por pura curiosidad. Me preguntaba: ¿Cómo se ve el código de una página web?, ¿Cómo logran hacer esto?, ¿Cómo es que funciona todo? Esas preguntas me llevaron a descubrir un mundo fascinante y, finalmente, a la carrera perfecta para mí.</p>
                    </div>
                    <div
                        className={`${hoveredItem == 3 ? "opacity-100" : "opacity-0"} absolute top-0 left-0 flex flex-col gap-2 w-full duration-300`}
                    >
                        <span className="font-medium text-white/50">Cualidad 03</span>
                        <h3 className="text-3xl font-medium">Dedicado</h3>
                        <p className="font-extralight">Muchas veces empiezo un proyecto o una tarea pensando que me tomará un par de horas, y al final termino dedicándole el doble. Sin duda, la programación me apasiona, y cuando estoy en la zona, el tiempo pasa sin darme cuenta.</p>
                    </div>
                    <div
                        className={`${hoveredItem == 4 ? "opacity-100" : "opacity-0"} absolute top-0 left-0 flex flex-col gap-2 w-full duration-300`}
                    >
                        <span className="font-medium text-white/50">Cualidad 04</span>
                        <h3 className="text-3xl font-medium">Autodidacta</h3>
                        <p className="font-extralight">La mayor parte de lo que sé lo he aprendido por mi cuenta, investigando, viendo videos, leyendo y, sobre todo, practicando. Ser autodidacta es una de las habilidades más valiosas en la programación, y sin duda, es parte de mi.</p>
                    </div>
                </article>
            </div>
        </section>
    )
}
