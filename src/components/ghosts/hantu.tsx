import { useParams } from "react-router-dom"
import GhostTemplate from "../ui/ghost/template.ghost"

function Hantu() {
  const { ghostId } = useParams()

  const hunts: {percentage: number, comment?: string}[] = [
    {
      percentage: 50
    }
  ]
  const speeds = [
    '1,4 m/s (> 15°C)',
    '1,75 m/s (15-12 °C)',
    '2,1 m/s (12-9 °C)',
    '2,3 m/s (9-6 °C)',
    '2,4 m/s (6-3 °C)',
    '2,5 m/s (3-0 °C)',
    '2,7 m/s (< 0°C)',
  ]
  const details = [
    "Ne peut pas allumer le disjonteur",
    "+50% de chances d'éteindre le disjonteur",
    "Si disjoncteur éteint : souffle glacial sur lui dans toute la maison durant la chasse",
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

export default Hantu