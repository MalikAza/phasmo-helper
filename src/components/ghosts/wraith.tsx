import { useParams } from "react-router-dom"
import GhostTemplate from "../ui/ghost/template.ghost"

function Wraith() {
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
    "Ne peut pas marcher dans le sel",
    "Peut se téléporter vers un joueur aléatoirement (EMF 2~5 à l'endroit ciblé)"
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

export default Wraith