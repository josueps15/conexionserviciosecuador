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
                "relative mx-auto h-[641px] w-[310px] rounded-[3.5rem] border-[8px] border-slate-800 bg-slate-900 shadow-xl",
                className,
            )}
        >
            <div className="absolute left-1/2 top-0 h-6 w-32 -translate-x-1/2 rounded-b-2xl bg-slate-800 z-20"></div>
            <div className="absolute inset-0 overflow-hidden rounded-[2.8rem] bg-black">
                {children}
            </div>
            <div className="absolute -left-2 top-24 h-12 w-1.5 rounded-l-lg bg-slate-800"></div>
            <div className="absolute -left-2 top-40 h-10 w-1.5 rounded-l-lg bg-slate-800"></div>
            <div className="absolute -left-2 top-52 h-10 w-1.5 rounded-l-lg bg-slate-800"></div>
            <div className="absolute -right-2 top-32 h-20 w-1.5 rounded-r-lg bg-slate-800"></div>
        </div>
    );
};

export default IPhoneMockup;
