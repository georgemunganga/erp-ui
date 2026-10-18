import { jsx as _jsx } from "react/jsx-runtime";
import * as React from "react";
import { cn } from "./utils.js";
export const Textarea = React.forwardRef(({ className, ...props }, ref) => _jsx("textarea", { ref: ref, className: cn("flex min-h-24 w-full rounded-lg border border-input bg-background px-4 py-3 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className), ...props }));
Textarea.displayName = "Textarea";
