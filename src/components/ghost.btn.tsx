import { isGhostPossible, URLEncodeGhostName } from "@/features/ghosts/utils.ghosts"
import useJournal from "@/hooks/journal.hook"
import { cn } from "@/lib/utils"
import { Ghost } from "@/types/ghosts.types"
import { Link } from "react-router-dom"

type Props = {
  ghost: Ghost
}

function GhostBtn({ ghost }: Props) {
  const { state } = useJournal()

  const encodedGhostName = URLEncodeGhostName(ghost.id)

  return (
    <Link
      to={`/${encodedGhostName}`}
      className={cn(isGhostPossible(ghost, state.evidences) ? 'opacity-100' : 'opacity-10')}
    >
      {ghost.name}
    </Link>
  )
}

export default GhostBtn