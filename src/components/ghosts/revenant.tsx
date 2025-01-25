import { useParams } from "react-router-dom"
import GhostTemplate from "../ui/ghost/template.ghost"

function Revenant() {
  const { ghostId } = useParams()

  const hunts = [
    '<= 50%'
  ]
  const speeds = [
    '1 m/s (base)',
    '3 m/s (joueur repéré)'
  ]

  return (
    <GhostTemplate
      ghostId={ghostId as string}
      hunts={hunts}
      speeds={speeds}
    />
  )
}

export default Revenant