import { useParams } from "react-router-dom"
import GhostTemplate from "../ui/ghost/template.ghost"

function Raiju() {
  const { ghostId } = useParams()

  const hunts = [
    '<= 50%',
    "<= 65% (proche d'un appareil électronique actif)"
  ]
  const speeds = [
    '1,7 m/s (base)',
    "2,5 m/s (proche d'un appareil électronique actif)",
    '2,8 m/s (accélération maximum)'
  ]
  const details = [
    "Perturbe les appareils électroniques jusqu'à 15m (10m en temps normal)",
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

export default Raiju