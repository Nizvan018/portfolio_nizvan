import "src/styles/SquareItems.css";

interface Props {
    number: number;
    heading: string;
    bgStyle: string;
}

export default function SquareItem({ number, heading, bgStyle }: Props) {
    let border = "";
    let color = "";

    if (bgStyle == "pink-br") {
        border = "bg-gradient-to-tl from-pink-500/60 to-60% to-gray-950";
        color = "text-pink-200";
    } else if (bgStyle == "pink-tl") {
        border = "bg-gradient-to-br from-pink-500/60 to-60% to-gray-950";
        color = "text-pink-200";
    } else if (bgStyle == "blue-bl") {
        border = "bg-gradient-to-tr from-sky-500/60 to-60% to-gray-950";
        color = "text-sky-200";
    } else {
        border = "bg-gradient-to-bl from-sky-500/60 to-60% to-gray-950";
        color = "text-sky-200";
    }

    return (
        <div className={`${border} group cursor-pointer p-[2px] rounded-[18px]`}>
            <div className={`${bgStyle} flex flex-col justify-end gap-2 aspect-square p-4 rounded-2xl bg-gray-950`}>
                <span className={`${color} text-6xl group-hover:scale-105 duration-300`}>
                    {String(number).padStart(2, "0")}
                </span>
                <h3 className="text-lg font-semibold group-hover:scale-105 duration-300">
                    {heading}
                </h3>
            </div>
        </div>
    )
}

const styles = {

}
