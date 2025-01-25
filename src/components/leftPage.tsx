import initialGhosts from "@/features/ghosts/initial.ghosts"
import { GhostType } from "@/types/ghosts.types"

type Props = {
  ghostId?: GhostType
}

function LeftPage({ ghostId }: Props) {
  const ghost = ghostId ? initialGhosts[ghostId] : ghostId

  if (!ghost) return (<></>)

  return (
    <></>
  )
}

export default LeftPage