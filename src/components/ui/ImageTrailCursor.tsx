import React, { useEffect, useRef, useState } from "react";
import { cn } from "../../lib/utils";

interface ImageTrailProps {
    images: string[];
    className?: string;
}

export const ImageTrailCursor: React.FC<ImageTrailProps> = ({ images, className }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [trail, setTrail] = useState<{ x: number; y: number; id: number; src: string }[]>([]);
    const lastPos = useRef({ x: 0, y: 0 });
    const idCounter = useRef(0);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            const distance = Math.hypot(e.clientX - lastPos.current.x, e.clientY - lastPos.current.y);

            if (distance > 100) {
                lastPos.current = { x: e.clientX, y: e.clientY };
                const newImage = {
                    x: e.clientX,
                    y: e.clientY,
                    id: idCounter.current++,
                    src: images[idCounter.current % images.length],
                };

                setTrail((prev) => [...prev, newImage].slice(-10));

                setTimeout(() => {
                    setTrail((prev) => prev.filter((img) => img.id !== newImage.id));
                }, 800);
            }
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [images]);

    return (
        <div ref={containerRef} className={cn("pointer-events-none fixed inset-0 z-40 overflow-hidden", className)}>
            {trail.map((img) => (
                <img
                    key={img.id}
                    src={img.src}
                    alt=""
                    className="absolute h-32 w-24 -translate-x-1/2 -translate-y-1/2 rounded-xl object-cover shadow-2xl transition-all duration-700 animate-in fade-in zoom-in spin-in-3"
                    style={{
                        left: img.x,
                        top: img.y,
                    }}
                />
            ))}
        </div>
    );
};

export default ImageTrailCursor;
