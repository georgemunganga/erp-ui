import * as React from "react";
import { PanelLeftClose, PanelLeftOpen } from "lucide-react";
import { cn } from "./utils.js";

export function ErpTopBar({ position = "sticky", className, ...props }: React.HTMLAttributes<HTMLElement> & { position?: "sticky" | "fixed" }) {
  return <header className={cn("top-0 z-40 border-b border-primary/40 bg-primary text-primary-foreground shadow-sm", position === "fixed" ? "fixed inset-x-0" : "sticky", className)} {...props} />;
}

export function ErpSidebarHeader({ moduleName, collapsed, onToggle, className }: {
  moduleName: string;
  collapsed: boolean;
  onToggle: () => void;
  className?: string;
}) {
  return <div className={cn("flex items-center gap-2 px-3 py-4", collapsed ? "justify-center px-2" : "justify-between", className)}>
    {!collapsed && <div>
      <p className="px-2 text-xs font-semibold uppercase tracking-wide text-rail-muted">Module</p>
      <p className="px-2 text-sm font-semibold text-rail-foreground">{moduleName}</p>
    </div>}
    <button type="button" onClick={onToggle} aria-label={collapsed ? "Expand side menu" : "Collapse side menu"} title={collapsed ? "Expand side menu" : "Collapse side menu"}
      className="hidden size-8 items-center justify-center rounded-md text-rail-muted hover:bg-rail-active hover:text-rail-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rail-foreground lg:inline-flex">
      {collapsed ? <PanelLeftOpen className="size-4" aria-hidden /> : <PanelLeftClose className="size-4" aria-hidden />}
    </button>
  </div>;
}
