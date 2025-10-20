import { useParams } from "react-router-dom"
import GhostTemplate from "../ui/ghost/template.ghost"

function Banshee() {
  const { ghostId } = useParams()

  const hunts: {percentage: number, comment?: string}[] = [
    {
      percentage: 50,
      comment: "(de sa cible)",
    },
  ]
  const speeds = [
    '1,7 m/s (base)',
    '2,8 m/s (accélération maximum)'
  ]
  const details = [
    "Cible un joueur aléatoirement au début de la partie (N'en change qu'à sa mort ou si il quitte la partie)",
    "Chasse sa cible uniquement (si dans la maison, sinon chasse normalement)",
    "67% de chances de se déplacer vers sa cible (ne fonctionne pas à travers les étages, hormis Point Hope & Bleasdale)",
    "Sa cible perds 15% de santé lors d'un événement chantant lors d'un contact",
    "Réalise plus souvent des événement chantant",
    "33% de chances d'effectuer un cri spécial (micro parabolique)",
    "Ne peut pas changer de salle favorite (sauf patte de singe)"
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

export default Banshee