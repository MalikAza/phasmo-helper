import { useParams } from "react-router-dom"
import GhostTemplate from "../ui/ghost/template.ghost"

function Phantom() {
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
    "Peut choisir de se déplacer vers un joueur aléatoirement (EMF 2 à son arrivée)",
    "Disparait sur les photos (sauf chasse)",
    "Clignotement lent (invisible pendant minimum 1s)",
    "Être en ligne de vue à moins de 10m de l'entité pendant une manifestation ou une chasse, draine la santé de 0,5%/s"
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

export default Phantom