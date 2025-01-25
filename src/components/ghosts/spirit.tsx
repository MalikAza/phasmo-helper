import { useParams } from "react-router-dom"
import GhostTemplate from "../ui/ghost/template.ghost"

function Spirit() {
  const { ghostId } = useParams()

  const hunts = [
    '<= 50%'
  ]
  const speeds = [
    '1,7 m/s (base)',
    '2,8 m/s (accélération maximum)'
  ]
  const details = [
    "L'encens l'empêche de chasser pendant 2min (au lieu de 1min30)"
  ]

  return (
    <GhostTemplate
      ghostId={ghostId as string}
      hunts={hunts}
      speeds={speeds}
      details={details}
    />
  )
}

export default Spirit