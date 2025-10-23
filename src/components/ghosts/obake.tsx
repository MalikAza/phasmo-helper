import { useParams } from "react-router-dom"
import GhostTemplate from "../ui/ghost/template.ghost"

function Obake() {
  const { ghostId } = useParams()

  const hunts: {percentage: number, comment?: string}[] = [
    {
      percentage: 50
    }
  ]
  const speeds = [
    '1,7 m/s (base)',
    '2,8 m/s (accélération maximum)'
  ]
  const details = [
    "25% de chances de ne pas laisser d'empreintes",
    "16,7% de chances de laisser une empreinte à 6 doigts (5 sur le clavier et 2 sur l'interrupteur)",
    "Change de skin durant une chasse",
    "Ne peut pas changer de genre",
    "Les joueurs morts ne peuvent pas voir le changement"
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

export default Obake