import { useParams } from "react-router-dom"
import GhostTemplate from "../ui/ghost/template.ghost"

function Twins() {
  const { ghostId } = useParams()

  const hunts = [
    '<= 50%'
  ]
  const speeds = [
    'jumeau lent: 1,5 m/s (base)',
    'jumeau lent: 2,5 m/s (accélération maximum)',
    'jumeau rapide: 1,9 m/s (base)',
    'jumeau rapide: 3,1 m/s (accélération maximum)'
  ]
  const details = [
    "Peut faire une double interraction (décalée de 0,5s)",
    "Peut avoir une portée d'interraction jusqu'à 16m",
    "50% chances de chasser depuis sa position (jumeau lent)",
    "50% chances de chasser depuis sa dernière interraction (jumeau rapide)",
    "Le crucifix ne marche que sur le jumeau lent",
    "Tableau d'activité : courbe avec cassure sans plat sur une période de 1 carré (double interraction)"
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

export default Twins