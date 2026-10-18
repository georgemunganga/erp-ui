import { jsx as _jsx } from "react/jsx-runtime";
import * as React from "react";
import { cn } from "./utils.js";
export const Input = React.forwardRef(({ className, type, ...props }, ref) => _jsx("input", { type: type, ref: ref, className: cn("flex h-11 min-h-11 w-full rounded-lg border border-input bg-background px-4 py-2 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className), ...props }));
Input.displayName = "Input";
