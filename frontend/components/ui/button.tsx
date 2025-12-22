import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    asChild?: boolean
    variant?: "default" | "outline" | "ghost"
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "default", asChild = false, ...props }, ref) => {
        const Comp = asChild ? Slot : "button"
        return (
            <Comp
                className={cn(
                    "inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
                    "h-10 px-4 py-2",
                    variant === "default" && "bg-salmon text-white hover:bg-burgundy",
                    variant === "outline" && "border border-burgundy/20 bg-transparent hover:bg-light-pink/20 text-burgundy",
                    variant === "ghost" && "hover:bg-light-pink/20 text-burgundy",
                    className
                )}
                ref={ref}
                {...props}
                suppressHydrationWarning
            />
        )
    }
)
Button.displayName = "Button"

export { Button }
