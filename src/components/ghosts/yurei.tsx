import { useParams } from "react-router-dom"
import GhostTemplate from "../ui/ghost/template.ghost"

function Yurei() {
  const { ghostId } = useParams()

  const hunts: {percentage: number, comment?: string}[] = [
    {
      percentage: 50,
    },
  ]
  const speeds = [
    '1,7 m/s (base)',
    '2,8 m/s (accélération maximum)'
  ]
  const details = [
    "Son pouvoir ferme complètement et lentement une seule porte sans événement",
    "Seule entité qui est capable de claquer une porte lentement",
    `Il ne peut pas effectuer d'interactions "légères" ou "partielles" sur les portes`,
    "Le pouvoir enlève 15% de santé (si joueur proche: <7.5m)",
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