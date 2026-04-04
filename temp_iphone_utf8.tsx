import React from "react";
import { cn } from "../../lib/utils";

interface IPhoneMockupProps {
    children?: React.ReactNode;
    className?: string;
}

export const IPhoneMockup: React.FC<IPhoneMockupProps> = ({
    children,
    className,
}) => {
    return (
        <div
            className={cn(
                "relative mx-auto h-[641px] w-[310px] rounded-[3.2rem] border-[10px] border-slate-900 bg-slate-950 shadow-2xl ring-1 ring-white/10",
                className,
            )}
        >
            {/* Dynamic Island style notch */}
            <div className="absolute left-1/2 top-3 h-5 w-24 -translate-x-1/2 rounded-full bg-black z-20 border border-white/5 shadow-inner"></div>

            <div className="absolute inset-[1px] overflow-hidden rounded-[2.6rem] bg-black">
                {children}
            </div>

            {/* Realistic buttons */}
            <div className="absolute -left-2.5 top-24 h-12 w-1 rounded-l-md bg-slate-800 border-r border-white/5"></div>
            <div className="absolute -left-2.5 top-40 h-10 w-1 rounded-l-md bg-slate-800 border-r border-white/5"></div>
            <div className="absolute -left-2.5 top-52 h-10 w-1 rounded-l-md bg-slate-800 border-r border-white/5"></div>
            <div className="absolute -right-2.5 top-32 h-20 w-1 rounded-r-md bg-slate-800 border-l border-white/5"></div>
        </div>
    );
};

export default IPhoneMockup;
