import { isGhostPossible, URLEncodeGhostName } from "@/features/ghosts/utils.ghosts"
import useJournal from "@/hooks/journal.hook"
import { cn } from "@/lib/utils"
import { Ghost, GhostState } from "@/types/ghosts.types"
import { ACTIONS } from "@/types/journal.types"
import { ContextMenu, ContextMenuContent, ContextMenuItem, ContextMenuTrigger } from "./ui/context-menu"
import { useNavigate } from "react-router-dom"

type Props = {
  ghost: Ghost
}

function GhostBtn({ ghost }: Props) {
  const { state, dispatch } = useJournal()
  const navigate = useNavigate()
  const encodedGhostName = URLEncodeGhostName(ghost.id)

  const handleClick = () => {
    dispatch({ type: ACTIONS.CLICK_GHOST, payload: ghost.id })
  }

  return (
    <ContextMenu>
      <ContextMenuTrigger>
        <button
          className={cn(
              isGhostPossible(ghost, state.evidences) ? 'opacity-100' : 'opacity-10',
              'relative'
          )}
          onClick={handleClick}
        >
          <span>{ghost.name}</span>
          <span
            className={cn(
              "absolute top-1/2 -translate-y-1/2",
              ghost.state === GhostState.SELECTED ? "h-[3.4rem] w-[9rem] left-1/2 -translate-x-1/2 border-2 border-black rounded-[75%]" : '',
              ghost.state === GhostState.STRIKED_OUT ? "-left-[15%] w-[130%] h-1 bg-black rounded-full" : '',
              ghost.state === GhostState.NOT_SELECTED ? 'hidden' : 'block'
            )}
          />
        </button>
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuItem onClick={() => navigate(`/${encodedGhostName}`)}>
          Informations
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  )
}

export default GhostBtn