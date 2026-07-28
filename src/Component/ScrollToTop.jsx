import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTop = () => {
    const [visible, setVisible] = useState(false);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const docHeight =
                document.documentElement.scrollHeight - window.innerHeight;

            const percent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

            setProgress(percent);
            setVisible(scrollTop > 200);
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    // SVG circle
    const radius = 28;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (progress / 100) * circumference;

    return (
        <>
            <style>
                {`
          @keyframes arrowLoop {
            0% {
              transform: translateY(8px);
              opacity: 0;
            }

            20% {
              opacity: 1;
            }

            80% {
              transform: translateY(-8px);
              opacity: 1;
            }

            100% {
              transform: translateY(-8px);
              opacity: 0;
            }
          }
        `}
            </style>

            <button
                onClick={scrollToTop}
                className={`fixed left-7 bottom-38 z-50 transition-all duration-500 ${visible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10 pointer-events-none"
                    }`}
            >
                <div className="relative w-16 h-16">

                    {/* Progress Ring */}
                    <svg
                        className="absolute inset-0 -rotate-90"
                        width="64"
                        height="64"
                    >
                        {/* Background Ring */}
                        <circle
                            cx="32"
                            cy="32"
                            r={radius}
                            stroke="#d1d5db"
                            strokeWidth="4"
                            fill="none"
                        />

                        {/* Progress Ring */}
                        <circle
                            cx="32"
                            cy="32"
                            r={radius}
                            stroke="#fffff2"
                            strokeWidth="4"
                            fill="none"
                            strokeLinecap="round"
                            strokeDasharray={circumference}
                            strokeDashoffset={offset}
                            style={{
                                transition: "stroke-dashoffset .15s linear",
                            }}
                        />
                    </svg>

                    {/* Button */}
                    <div
                        className="absolute inset-[6px]
            rounded-full
            bg-blue-950
            text-white
            shadow-xl
            flex items-center justify-center
            hover:scale-110
            transition-all duration-300"
                    >
                        <FaArrowUp
                            className="text-xl"
                            style={{
                                animation: "arrowLoop 1.2s linear infinite",
                            }}
                        />
                    </div>
                </div>
            </button>
        </>
    );
};

export default ScrollToTop;