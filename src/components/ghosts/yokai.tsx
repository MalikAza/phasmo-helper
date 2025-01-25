import { useParams } from "react-router-dom"
import GhostTemplate from "../ui/ghost/template.ghost"

function Yokai() {
  const { ghostId } = useParams()

  const hunts = [
    '<= 50%',
    '<= 80% (pouvoir)'
  ]
  const speeds = [
    '1,7 m/s (base)',
    '2,8 m/s (accélération maximum)'
  ]
  const details = [
    "Active son pouvoir si un joueur est proche et qu'il parle",
    "Plus actif si on parle à côté de lui",
    "Ne repère plus le joueur à plus de 2,5-3m (sauf à la vue)",
    "Peut se manifester plus proche de la boîte à musique (lors de son utilisation)"
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

export default Yokai