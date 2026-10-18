import { jsx as _jsx } from "react/jsx-runtime";
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { cn } from "./utils.js";
export const buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-base font-semibold cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-5 [&_svg]:shrink-0", {
    variants: {
        variant: {
            default: "bg-button-primary text-button-primary-foreground shadow hover:bg-button-primary/90",
            destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
            outline: "border border-input bg-background shadow-sm hover:bg-secondary hover:text-foreground",
            secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
            ghost: "hover:bg-secondary hover:text-foreground",
            link: "text-primary underline-offset-4 hover:underline",
        },
        size: {
            default: "h-11 px-6 py-2",
            sm: "h-10 px-5 text-sm",
            lg: "h-12 px-9 text-lg",
            icon: "h-11 w-11",
        },
    },
    defaultVariants: { variant: "default", size: "default" },
});
export const Button = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return _jsx(Comp, { className: cn(buttonVariants({ variant, size, className })), ref: ref, ...props });
});
Button.displayName = "Button";
