import { useParams } from "react-router-dom"
import GhostTemplate from "../ui/ghost/template.ghost"

function Yurei() {
  const { ghostId } = useParams()

  const hunts = [
    '<= 50%'
  ]
  const speeds = [
    '1,7 m/s (base)',
    '2,8 m/s (accélération maximum)'
  ]
  const details = [
    "Son pouvoir ferme une seule porte sans événment",
    "Possible double interaction sur la porte",
    "Le pouvoir enlève 15% de santé (si joueur proche)",
    "L'encens le piège dans sa pièce favorite pendant 90s"
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

export default Yurei