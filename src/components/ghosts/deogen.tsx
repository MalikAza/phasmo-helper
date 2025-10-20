import { useParams } from "react-router-dom"
import GhostTemplate from "../ui/ghost/template.ghost"

function Deogen() {
  const { ghostId } = useParams()

  const hunts: {percentage: number, comment?: string}[] = [
    {
      percentage: 40,
    },
  ]
  const speeds = [
    '4 m/s (+6m)',
    '3-0,4 m/s (6-2,5m)',
    '0,4 m/s (<2,5m)'
  ]
  const details = [
    "Sait en permanence où sont les joueurs",
    "33% de chances de faire un cri spécial à la spirit box (moins d'1m de lui)",
    "Rapide loin du joueur, lent proche de lui",
    "Plus de chance de faire écriture et D.O.T.S.",
    "Clignote vite comme l'Oni"
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

export default Deogen