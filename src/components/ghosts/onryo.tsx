import { useParams } from "react-router-dom"
import GhostTemplate from "../ui/ghost/template.ghost"

function Onryo() {
  const { ghostId } = useParams()

  const hunts = [
    '<= 60%',
    '<= 100% (pouvoir)'
  ]
  const speeds = [
    '1,7 m/s (base)',
    '2,8 m/s (accélération maximum)'
  ]
  const details = [
    "Tente une chasse après avoir souffle 3 flammes",
    "Les flammes l'empêche de chasser (rayon de 4m)"
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