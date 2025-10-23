import { useParams } from "react-router-dom"
import GhostTemplate from "../ui/ghost/template.ghost"

function Onryo() {
  const { ghostId } = useParams()

  const hunts: {percentage: number, comment?: string}[] = [
    {
      percentage: 60
    },
    {
      percentage: 100,
      comment: "(pouvoir)"
    }
  ]
  const speeds = [
    '1,7 m/s (base)',
    '2,8 m/s (accélération maximum)'
  ]
  const details = [
    "Tente une chasse après avoir souffle 3 flammes",
    "Les flammes l'empêche de chasser (rayon de 4m)",
    "Peut éteindre la même bougie en moins de 20s",
    "Ne peut pas allumer les bougies",
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

export default Onryo