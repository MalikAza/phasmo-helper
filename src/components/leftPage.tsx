import { GHOSTS } from "@/stores/ghosts"
import { GhostType } from "@/types/ghosts.types"

type Props = {
  ghostId?: GhostType
}

function LeftPage({ ghostId }: Props) {
  const ghost = GHOSTS.find(ghost => ghost.id === ghostId)

  if (!ghost) return (<></>)

  return (
    <></>
  )
}

export default LeftPage