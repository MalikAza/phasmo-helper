import { useParams } from "react-router-dom"
import GhostTemplate from "../ui/ghost/template.ghost"

function Mare() {
  const { ghostId } = useParams()

  const hunts = [
    '<= 60% (si entité dans la lumière)',
    "<= 40% (si entité dans l'obscurité"
  ]
  const speeds = [
    '1,7 m/s (base)',
    '2,8 m/s (accélération maximum)'
  ]
  const details = [
    "Ne peut pas allumer de lumières (mais peut radios, tv, ordinateurs & disjoncteur)",
    "Peut éteindre une lumière instantanément après un joueur (CD de 10s / interrupteur / joueur)",
    "Plus de chances d'éteindre les lumières en interaction",
    "Plus de chances de briser les lumières en événement",
    "Plus de chances de choisir de se déplacer vers une pièce éteinte",
    "Peut changer de pièce pour chasser si sa salle favorite est allumée"
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

export default Mare