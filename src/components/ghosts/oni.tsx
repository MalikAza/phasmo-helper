import { useParams } from "react-router-dom"
import GhostTemplate from "../ui/ghost/template.ghost"

function Oni() {
  const { ghostId } = useParams()

  const hunts = [
    '<= 50%'
  ]
  const speeds = [
    '1,7 m/s (base)',
    '2,8 m/s (accélération maximum)'
  ]
  const details = [
    "Interragit beaucoup",
    "Clignotement rapide (plus souvent visible, invisibilité pas de plus de 0,5s",
    "Ne peut pas faire d'événement boule d'air / souffle",
    "Plus souvent la forme complète en événement",
    "-20% de santé lors d'un événement (si collision avec le joueur)"
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

export default Oni