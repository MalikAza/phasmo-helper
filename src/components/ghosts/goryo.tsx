import { useParams } from "react-router-dom"
import GhostTemplate from "../ui/ghost/template.ghost"

function Goryo() {
  const { ghostId } = useParams()

  const hunts: {percentage: number, comment?: string}[] = [
    {
      percentage: 50,
    }
  ]
  const speeds = [
    '1,7 m/s (base)',
    '2,8 m/s (accélération maximum)'
  ]
  const details = [
    "Ne peut pas changer de pièce favorite (sauf patte de singe)",
    "Se déplace à coup de 3m maximal (donc souvent dans sa pièce favorite)",
    "D.O.T.S visible uniquement à la caméra et personne dans sa pièce",
    "Chance accrue de faire les D.O.T.S",
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

export default Goryo