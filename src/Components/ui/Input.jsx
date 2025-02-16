import * as React from "react";
import { cn } from "../../lib/utils"; // Utility function for classnames

const Input = React.forwardRef(({ className, type = "text", ...props }, ref) => {
    return (
        <input
            type={type}
            ref={ref}
            className={cn(
                "relative w-full h-12 border-2 border-gray-300 bg-gray-50 dark:bg-zinc-800 text-black dark:text-white shadow-sm rounded-md px-4 py-2 text-base placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 hover:border-blue-500 hover:shadow-md",
                className
            )}
            {...props}
        />
    );
});

const TextArea = React.forwardRef(({ className, ...props }, ref) => {
    return (
        <textarea
            ref={ref}
            className={cn(
                "relative w-full border-2 border-gray-300 rounded-md shadow-sm py-3 px-4 text-lg text-gray-900 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 hover:border-blue-500 hover:shadow-md",
                className
            )}
            {...props}
        ></textarea>
    );
});

Input.displayName = "Input";
TextArea.displayName = "TextArea"; // Properly set the display name for TextArea

export { Input, TextArea };
