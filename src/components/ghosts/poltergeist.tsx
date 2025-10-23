import { useParams } from "react-router-dom"
import GhostTemplate from "../ui/ghost/template.ghost"

function Poltergeist() {
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
    "Lance les objets 2x plus fort",
    "Pendant une chasse, 100% de chances de lancer un objet toutes les 0.5s (au lieux de 50% pour les autres)",
    "Peut lancer plusieurs objets (EMF 2 à sa position, EMF 2~3 par objets jetés)",
    "Pic de 0 à 10 sans chasse ou événment",
    "Lors de son pouvoir, le joueur perds 2% de santé par objets lancés"
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

export default Poltergeist