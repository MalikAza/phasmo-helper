import { useParams } from "react-router-dom"
import GhostTemplate from "../ui/ghost/template.ghost"

function Thaye() {
  const { ghostId } = useParams()

  const hunts: {percentage: number, comment?: string}[] = [
    {
      percentage: 75,
      comment: "(âge initial)"
    },
    {
      percentage: 15,
      comment: "(âge +10)"
    },
    {
      percentage: 0,
      comment: '-6% / âge ajouté'
    }
  ]
  const speeds = [
    '2,75 m/s (âge initial)',
    '1 m/s (âge +10)',
    '-0,175 m/s / âge ajouté'
  ]
  const details = [
    "Après 1-2min tente de vieillir",
    "Ne vieillit que si un joueur se trouve dans sa pièce",
    "Si il ne vieillit pas, il réessaie après 30s",
    "2x plus de chances d'interraction à l'âge initial",
    "Plus il vieillit, moins il est actif",
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

export default Thaye