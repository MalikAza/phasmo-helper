import { cn } from "@/lib/utils";
import * as React from "react";

const GridBackground = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props}, ref) => (
  <div
    className={cn("relative h-full", className)}
    ref={ref}
    {...props}
  >
      <svg className="absolute inset-0 w-full h-full">
        <defs>
          <pattern id="grid" width="25" height="25" patternUnits="userSpaceOnUse">
            <path 
              d="M 25 0 L 0 0 0 25" 
              fill="none" 
              stroke="currentColor"
              strokeWidth="0.5"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
      <div className="relative z-10 h-full">
        {props.children}
      </div>
    </div>
))
GridBackground.displayName = 'GridBackground'

export default GridBackground