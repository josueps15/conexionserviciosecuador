import { useId } from "react";
import { cn } from "../../lib/utils";

interface InteractiveGridPatternProps extends React.SVGProps<SVGSVGElement> {
    width?: number;
    height?: number;
    squares?: [number, number]; // [columns, rows]
    className?: string;
    squaresClassName?: string;
}

/**
 * InteractiveGridPattern
 * A dynamic SVG grid that reacts to mouse movement.
 */
export function InteractiveGridPattern({
    width = 40,
    height = 40,
    squares = [24, 24],
    className,
    squaresClassName,
    ...props
}: InteractiveGridPatternProps) {
    const id = useId();
    const [horizontal, vertical] = squares;

    return (
        <svg
            width={width * horizontal}
            height={height * vertical}
            className={cn(
                "absolute inset-0 h-full w-full pointer-events-auto",
                className
            )}
            {...props}
        >
            <defs>
                <pattern
                    id={id}
                    width={width}
                    height={height}
                    patternUnits="userSpaceOnUse"
                    x="-1"
                    y="-1"
                >
                    <path
                        d={`M.5 ${height}V.5H${width}`}
                        fill="none"
                        stroke="currentColor"
                        strokeOpacity="0.1"
                    />
                </pattern>
            </defs>
            <rect width="100%" height="100%" fill={`url(#${id})`} />
            <svg x="-1" y="-1" className="overflow-visible">
                {Array.from({ length: horizontal * vertical }).map((_, index) => {
                    const x = (index % horizontal) * width;
                    const y = Math.floor(index / horizontal) * height;
                    return (
                        <rect
                            key={index}
                            x={x + 0.5}
                            y={y + 0.5}
                            width={width - 1}
                            height={height - 1}
                            className={cn(
                                "stroke-none fill-white/0 transition-all duration-300 ease-in-out hover:fill-primary/20",
                                squaresClassName
                            )}
                        />
                    );
                })}
            </svg>
        </svg>
    );
}
