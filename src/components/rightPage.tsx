import { Separator } from "@components/ui/separator"
import EvidenceBtn from "./evidence.btn"
import useJournal from "@/hooks/journal.hook"
import GhostBtn from "./ghost.btn"
import initialGhosts from "@/features/ghosts/initial.ghosts"
import { ScrollArea } from "./ui/scroll-area"
import { PropsWithChildren } from "react"
import { cn } from "@/lib/utils"

function RightPage({}: PropsWithChildren) {
  const { state } = useJournal()

  const Container = ({children}: PropsWithChildren): JSX.Element => {
    const classes = "text-black p-10 font-lazydog text-2xl flex flex-col h-full"
    return (
      <>
        <ScrollArea
          className={cn(classes, "[&_.scroll-area-scroll-thumb]:!bg-journal-brown hidden lg:block")}
        >
          {children}
        </ScrollArea>
        <div className={cn(classes, 'block lg:hidden')}>
          {children}
        </div>
      </>
    )
  }

  return (
    <Container>
      <h3 className="text-4xl pb-4">Preuves</h3>
      <Separator className="h-1 rounded-full" />
      <ul className="grid grid-cols-1 lg:grid-cols-2 gap-y-2 py-4">
        {Object.values(state.evidences).map((evidence) => (
          <li className="flex items-center" key={evidence.id}>
            <EvidenceBtn evidence={evidence} />
          </li>
        ))}
      </ul>
      <Separator className="h-1 rounded-full" />
      <ul className="grid grid-cols-2 lg:grid-cols-3 gap-y-4 pt-4">
        {Object.values(initialGhosts).map((ghost) => (
          <li className="flex items-center justify-center" key={ghost.id}>
            <GhostBtn ghost={ghost} />
          </li>
        ))}
      </ul>
      <footer className="absolute right-0 bottom-0 flex flex-row justify-between items-center px-10 w-full">
        <p className="flex flex-row gap-2 items-center">
          <span className="h-2 w-2 bg-red-600 rounded-full" />
          <span>Preuve obligatoire</span>
        </p>
        <p className="opacity-25 italic text-sm">
          24/01/2025
        </p>
      </footer>
    </Container>
  )
}

export default RightPage