import { isGhostPossible } from "@/features/ghosts/utils.ghosts"
import useJournal from "@/hooks/journal.hook"
import { cn } from "@/lib/utils"
import { Ghost } from "@/types/ghosts.types"

type Props = {
  ghost: Ghost
}

function GhostBtn({ ghost }: Props) {
  const { state } = useJournal()

  return (
    <span className={cn(isGhostPossible(ghost, state.evidences) ? 'opacity-100' : 'opacity-10')}>{ghost.name}</span>
  )
}

export default GhostBtn