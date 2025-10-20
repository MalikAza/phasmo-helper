import { URLdecodeGhostName } from "@/features/ghosts/utils.ghosts"
import useJournal from "@/hooks/journal.hook"
import { GhostType } from "@/types/ghosts.types"
import GhostHeader from "./ghost.header"
import GhostEvidences from "./ghost.evidences"
import GhostHunt from "./ghost.hunt"
import GhostSpeed from "./ghost.speed"
import GhostDetails from "./ghost.details"
import { ScrollArea } from "../scroll-area"
import { PropsWithChildren } from "react"
import { cn } from "@/lib/utils"

type Props = {
  ghostId: string
  hunts: {
    percentage: number
    comment?: string
  }[]
  speeds: string[]
  details?: string[]
}

function GhostTemplate({ ghostId, hunts, speeds, details }: Props) {
  const { state } = useJournal()

  const ghost = state.ghosts[URLdecodeGhostName(ghostId as string) as GhostType]

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
      <GhostHeader name={ghost.name} image={ghost.img} />
      <div className="flex flex-col gap-4">
        <GhostEvidences evidences={ghost.evidences} obligatoryEvidence={ghost.obligatoryEvidence} />
        <GhostHunt hunts={hunts} />
        <GhostSpeed speeds={speeds} />
        {details && <GhostDetails details={details} />}
      </div>
    </Container>
  )
}

export default GhostTemplate