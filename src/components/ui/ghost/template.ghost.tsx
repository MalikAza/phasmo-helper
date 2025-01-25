import { URLdecodeGhostName } from "@/features/ghosts/utils.ghosts"
import useJournal from "@/hooks/journal.hook"
import { GhostType } from "@/types/ghosts.types"
import GhostHeader from "./ghost.header"
import GhostEvidences from "./ghost.evidences"
import GhostHunt from "./ghost.hunt"
import GhostSpeed from "./ghost.speed"
import GhostDetails from "./ghost.details"

type Props = {
  ghostId: string
  hunts: string[]
  speeds: string[]
  details?: string[]
}

function GhostTemplate({ ghostId, hunts, speeds, details }: Props) {
  const { state } = useJournal()

  const ghost = state.ghosts[URLdecodeGhostName(ghostId as string) as GhostType]

  return (
    <>
      <GhostHeader name={ghost.name} image={ghost.img} />
      <GhostEvidences evidences={ghost.evidences} obligatoryEvidence={ghost.obligatoryEvidence} />
      <GhostHunt hunts={hunts} />
      <GhostSpeed speeds={speeds} />
      {details && <GhostDetails details={details} />}
    </>
  )
}

export default GhostTemplate