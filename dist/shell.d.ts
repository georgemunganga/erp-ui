import * as React from "react";
export declare function ErpTopBar({ position, className, ...props }: React.HTMLAttributes<HTMLElement> & {
    position?: "sticky" | "fixed";
}): React.JSX.Element;
export declare function ErpSidebarHeader({ moduleName, collapsed, onToggle, className }: {
    moduleName: string;
    collapsed: boolean;
    onToggle: () => void;
    className?: string;
}): React.JSX.Element;
