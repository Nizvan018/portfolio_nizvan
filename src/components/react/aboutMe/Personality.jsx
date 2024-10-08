import SquareItem from "./SquareItem";
import { useState } from "react"

export default function Personality() {
    const [hoveredItem, setHoveredItem] = useState(0);

    return (
        <section className="flex flex-col items-center gap-16">
            <div className="flex flex-col items-center gap-6">
                <h2 className="w-fit h-[50px] text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-violet-500 to-sky-500 duration-200 opacity-85">
                    Así soy yo
                </h2>
                <p className="text-center text-base md:text-lg font-extralight text-white/80">
                    Estos son algunos de los razgos de mi personalidad que considero que
                    más me definen a la hora de trabajar y como persona.
                </p>
            </div>

            <div className="flex gap-8 w-full">
                <div className="grid grid-cols-2 gap-4 w-full">
                    <div onMouseEnter={() => setHoveredItem(1)} onMouseLeave={() => setHoveredItem(0)}>
                        <SquareItem number={1} heading="Perfeccionista" bgStyle="pink-br" />
                    </div>
                    <div onMouseEnter={() => setHoveredItem(2)} onMouseLeave={() => setHoveredItem(0)}>
                        <SquareItem number={2} heading="Perfeccionista" bgStyle="blue-bl" />
                    </div>
                    <div onMouseEnter={() => setHoveredItem(3)} onMouseLeave={() => setHoveredItem(0)}>
                        <SquareItem number={3} heading="Perfeccionista" bgStyle="blue-tr" />
                    </div>
                    <div onMouseEnter={() => setHoveredItem(4)} onMouseLeave={() => setHoveredItem(0)}>
                        <SquareItem number={4} heading="Perfeccionista" bgStyle="pink-tl" />
                    </div>
                </div>
                <article className="relative w-full">
                    <div
                        className={`${hoveredItem == 0 ? "opacity-100" : "opacity-0"} absolute top-0 left-0 w-full duration-300`}
                    >
                        Posiciona tu ratón por encima de algún elemento para ver una descripción detallada
                    </div>

                    <div
                        className={`${hoveredItem == 1 ? "opacity-100" : "opacity-0"} absolute top-0 left-0 w-full duration-300`}
                    >
                        Elemento 1
                    </div>
                    <div
                        className={`${hoveredItem == 2 ? "opacity-100" : "opacity-0"} absolute top-0 left-0 w-full duration-300`}
                    >
                        Elemento 2
                    </div>
                    <div
                        className={`${hoveredItem == 3 ? "opacity-100" : "opacity-0"} absolute top-0 left-0 w-full duration-300`}
                    >
                        Elemento 3
                    </div>
                    <div
                        className={`${hoveredItem == 4 ? "opacity-100" : "opacity-0"} absolute top-0 left-0 w-full duration-300`}
                    >
                        Elemento 4
                    </div>
                </article>
            </div>
        </section>
    )
}
