import React, { createContext, useState, useContext, useRef, useEffect } from "react";

import { cn } from "../../lib/utils"; // Adjust the path based on your folder structure


export const MouseEnterContext = createContext();


export const CardContainer = ({ children, className, containerClassName }) => {
    const containerRef = useRef(null);
    const [isMouseEntered, setIsMouseEntered] = useState(false);

    const handleMouseMove = (e) => {
        if (!containerRef.current) return;
        const { left, top, width, height } = containerRef.current.getBoundingClientRect();
        const x = (e.clientX - left - width / 2) / 25;
        const y = (e.clientY - top - height / 2) / 25;
        containerRef.current.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
    };

    const handleMouseEnter = () => setIsMouseEntered(true);

    const handleMouseLeave = () => {
        if (!containerRef.current) return;
        setIsMouseEntered(false);
        containerRef.current.style.transform = `rotateY(0deg) rotateX(0deg)`;
    };

    return (
        <MouseEnterContext.Provider value={[isMouseEntered, setIsMouseEntered]}>
            <div
                className={cn("py-10 flex items-center justify-center", containerClassName)}
                style={{ perspective: "1000px" }}
            >
                <div
                    ref={containerRef}
                    onMouseEnter={handleMouseEnter}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                    className={cn("relative transition-all duration-200 ease-linear", className)}
                    style={{ transformStyle: "preserve-3d" }}
                >
                    {children}
                </div>
            </div>
        </MouseEnterContext.Provider>
    );
    
};

export const CardBody = ({ children, className }) => (
    <div className={cn("h-96 w-96 transform-style-3d", className)}>
        {children}
    </div>
);

export const CardItem = ({ as: Tag = "div", children, className, ...rest }) => {
    const ref = useRef(null);
    const [isMouseEntered] = useMouseEnter();

    useEffect(() => {
        if (!ref.current) return;
        if (isMouseEntered) {
            ref.current.style.transform = `translate3d(10px, 10px, 20px) rotateX(10deg) rotateY(10deg)`;
        } else {
            ref.current.style.transform = `translate3d(0, 0, 0) rotateX(0) rotateY(0)`;
        }
    }, [isMouseEntered]);

    return (
        <Tag ref={ref} className={cn("w-fit transition duration-200 ease-linear", className)} {...rest}>
            {children}
        </Tag>
    );
};

export const useMouseEnter = () => {
    const context = useContext(MouseEnterContext);
    if (context === undefined) {
        throw new Error("useMouseEnter must be used within a MouseEnterProvider");
    }
    return context;
};
