import { isGhostPossible, URLEncodeGhostName } from "@/features/ghosts/utils.ghosts"
import useJournal from "@/hooks/journal.hook"
import { cn } from "@/lib/utils"
import { Ghost } from "@/types/ghosts.types"
import { Link, useLocation } from "react-router-dom"

type Props = {
  ghost: Ghost
}

function GhostBtn({ ghost }: Props) {
  const { state } = useJournal()
  const location = useLocation()

  const endpoint = location.pathname.split('/').pop()
  const encodedGhostName = URLEncodeGhostName(ghost.id)
  const isSelected = endpoint === encodedGhostName

  console.log(endpoint, encodedGhostName, isSelected)

  return (
    <Link
      to={`/${encodedGhostName}`}
      className={cn(
        isGhostPossible(ghost, state.evidences) ? 'opacity-100' : 'opacity-10',
        'relative'
      )}
    >
      <span>{ghost.name}</span>
      {isSelected && <span className="absolute h-[3.4rem] w-[9rem] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-black rounded-[75%]" />}
    </Link>
  )
}

export default GhostBtn