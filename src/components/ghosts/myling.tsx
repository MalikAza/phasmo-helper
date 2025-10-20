import { useParams } from "react-router-dom"
import GhostTemplate from "../ui/ghost/template.ghost"

function Myling() {
  const { ghostId } = useParams()

  const hunts: {percentage: number, comment?: string}[] = [
    {
      percentage: 50
    }
  ]
  const speeds = [
    '1,7 m/s (base)',
    '2,8 m/s (accélération maximum)'
  ]
  const details = [
    "Bruits de pas audibles qu'à moins de 12m (au lieu de 20m)",
    "Sons paranormaux plus fréquent au micro parabolique"
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

export default Myling