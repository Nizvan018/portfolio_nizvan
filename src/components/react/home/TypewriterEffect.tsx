import { useState, useEffect } from "react";

const phrases = [
    "El Front y el Back son igual de importantes <3",
    "Midu, inclúyeme en la web para la velada porfa ;) ¡Un saludo!",
    "Desarrollando con amor las páginas web son más bonitas y funcionales <3",
    "¡Astro es el mejor framework para landing pages y punto! c:"
];

export default function TypewriterEffect() {
    const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
    const [displayedText, setDisplayedText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [isTyping, setIsTyping] = useState(false);

    useEffect(() => {
        const currentPhrase = phrases[currentPhraseIndex];
        let typingSpeed = isDeleting ? 20 : 37;

        const updateText = () => {
            if (!isDeleting && displayedText.length < currentPhrase.length) {
                setDisplayedText(currentPhrase.slice(0, displayedText.length + 1));
            } else if (isDeleting && displayedText.length > 0) {
                setDisplayedText(currentPhrase.slice(0, displayedText.length - 1));
            } else if (!isDeleting) {
                setTimeout(() => setIsDeleting(true), 3300);
                setIsTyping(false);
            } else {
                setIsDeleting(false);
                setIsTyping(true);
                setCurrentPhraseIndex(prev => (prev + 1) % phrases.length);
            }
        }

        const timeout = setTimeout(updateText, typingSpeed);

        return () => clearTimeout(timeout);
    }, [displayedText, isDeleting, currentPhraseIndex]);

    return (
        <span className={`${currentPhraseIndex === 1 ? "text-pink-500 font-medium" : "text-white/80"} text-base sm:text-lg text-center`}>
            {displayedText}
            <span className={`${!isTyping && !isDeleting && "animate-cursor"}`}>|</span>
        </span>
    )
}
