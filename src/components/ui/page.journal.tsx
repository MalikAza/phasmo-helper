import { cn } from "@/lib/utils";
import * as React from "react";
import GridBackground from "@components/ui/gridBackground";

type SectionProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLElement>,
  HTMLElement
>

interface JournalPageProps extends SectionProps {
  grid?: boolean
}

const JournalPage = React.forwardRef<
  HTMLElement,
  JournalPageProps
>(({className, grid, ...props}, ref) => (
  <section
    className={cn('bg-radial from-journal-yellow to-journal-dark-yellow h-full w-1/2', className)}
    ref={ref}
    {...props}
  >
    {
      (grid && <GridBackground>{props.children}</GridBackground>) || props.children
    }
  </section>
))

export default JournalPage