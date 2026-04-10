import React from "react";
import { cn } from "../../lib/utils";

export interface AndroidProps {
    src?: string;
    className?: string;
    children?: React.ReactNode;
}

export function Android({
    src,
    className,
    children,
}: AndroidProps) {
    return (
        <div
            className={cn(
                "relative mx-auto h-[641px] w-[310px] rounded-[3rem] border-[8px] border-[#1a1a1a] bg-black shadow-2xl ring-1 ring-white/10",
                className,
            )}
        >
            {/* Top Speaker/Camera Center Notch */}
            <div className="absolute left-1/2 top-3 h-2 w-16 -translate-x-1/2 rounded-full bg-[#1a1a1a] z-20"></div>
            <div className="absolute left-1/2 top-4 h-2 w-2 -translate-x-1/2 -translate-x-[40px] rounded-full bg-[#0d0d0d] z-20 border border-white/5"></div>

            <div className="absolute inset-[1px] overflow-hidden rounded-[2.5rem] bg-[#0c1119] flex items-center justify-center">
                {src ? (
                    <img 
                        src={src} 
                        alt="Android App Screenshot" 
                        className="w-full h-full object-cover select-none pointer-events-none" 
                        loading="eager"
                        decoding="async"
                    />
                ) : (
                    children
                )}
            </div>

            {/* Realistic buttons for Android (usually Volume on left, Power on right) */}
            <div className="absolute -left-2 top-32 h-16 w-1 rounded-l-md bg-[#2a2a2a] border-r border-white/5"></div>
            <div className="absolute -right-2 top-40 h-20 w-1 rounded-r-md bg-[#2a2a2a] border-l border-white/5"></div>
            
            {/* Bottom Charging Port indication */}
            <div className="absolute left-1/2 bottom-3 h-1 w-8 -translate-x-1/2 rounded-full bg-[#1a1a1a]"></div>
        </div>
    );
}

export default Android;
