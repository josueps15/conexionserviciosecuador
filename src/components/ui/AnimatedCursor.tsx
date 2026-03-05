import React, { useEffect, useState, useCallback } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export const AnimatedCursor: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isClicking, setIsClicking] = useState(false);

    const mouseX = useMotionValue(-100);
    const mouseY = useMotionValue(-100);

    const springConfig = { damping: 25, stiffness: 250, mass: 0.5 };
    const cursorX = useSpring(mouseX, springConfig);
    const cursorY = useSpring(mouseY, springConfig);

    const handleMouseMove = useCallback((e: MouseEvent) => {
        mouseX.set(e.clientX);
        mouseY.set(e.clientY);
        if (!isVisible) setIsVisible(true);
    }, [mouseX, mouseY, isVisible]);

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    useEffect(() => {
        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mousedown", handleMouseDown);
        window.addEventListener("mouseup", handleMouseUp);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mousedown", handleMouseDown);
            window.removeEventListener("mouseup", handleMouseUp);
        };
    }, [handleMouseMove]);

    if (!isVisible) return null;

    return (
        <div className="fixed inset-0 pointer-events-none z-[9999]">
            {/* The Flare - Large blurred primary glow */}
            <motion.div
                className="absolute w-40 h-40 rounded-full bg-primary/10 blur-[60px]"
                style={{
                    x: cursorX,
                    y: cursorY,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
                animate={{
                    scale: isClicking ? 1.5 : 1,
                    opacity: isClicking ? 0.8 : 0.5,
                }}
            />

            {/* The Trail - Sharp but subtle outer ring */}
            <motion.div
                className="absolute w-6 h-6 rounded-full border border-white/20"
                style={{
                    x: cursorX,
                    y: cursorY,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
                animate={{
                    scale: isClicking ? 0.5 : 1,
                }}
            />

            {/* The Core - High precision white dot */}
            <motion.div
                className="absolute w-1 h-1 rounded-full bg-white shadow-[0_0_15px_rgba(255,255,255,0.8)]"
                style={{
                    x: mouseX,
                    y: mouseY,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
                animate={{
                    scale: isClicking ? 2 : 1,
                }}
            />
        </div>
    );
};

export default AnimatedCursor;
