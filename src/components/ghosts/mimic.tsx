import { useParams } from "react-router-dom"
import GhostTemplate from "../ui/ghost/template.ghost"

function Mimic() {
  const { ghostId } = useParams()

  const hunts = [
    '<= 50%',
    'Peut copier une entité'
  ]
  const speeds = [
    '1,7 m/s (base)',
    '2,8 m/s (accélération maximum)',
    'Peut copier une entité',
  ]
  const details = [
    "Copie une entité toutes les 30s-2min",
    "Ne copie pas les preuves",
    "Ne change pas d'entité en chasse",
    "Ne change pas de skin en changeant d'entité",
    "Peut copier le joueur ou lui-même (deviens alors inactif pendant ce temps)",
    "Seule entité à pouvoir laisser une empreinte sur la porte d'entrée"
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

export default Mimic