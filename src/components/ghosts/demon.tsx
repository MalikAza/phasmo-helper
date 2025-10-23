import { useParams } from "react-router-dom"
import GhostTemplate from "../ui/ghost/template.ghost"

function Demon() {
  const { ghostId } = useParams()

  const hunts: {percentage: number, comment?: string}[] = [
    {
      percentage: 70,
    },
    {
      percentage: 100,
      comment: "(pouvoir)",
    },
  ]
  const speeds = [
    '1,7 m/s (base)',
    '2,8 m/s (accélération maximum)'
  ]
  const details = [
    "Délai minimum entre 2 chasses (sans encens) : 20s (au lieu de 25s)",
    "Délai entre deux chasses avec un encens 1min",
    "Plus grande portée du crucifix (x1,5)",
    "Chasse plus souvent",
    "L'encens l'empêche de chasser pendant 60s (au lieu de 90s)"
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

export default Demon