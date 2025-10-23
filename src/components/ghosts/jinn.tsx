import { useParams } from "react-router-dom"
import GhostTemplate from "../ui/ghost/template.ghost"

function Jinn() {
  const { ghostId } = useParams()

  const hunts: {percentage: number, comment?: string}[] = [
    {
      percentage: 50
    }
  ]
  const speeds = [
    '1,7 m/s (base)',
    '2,5 m/s (disjonteur allumé + joueur visible à plus de 2,5m)',
    '2,8 m/s (accélération maximum)'
  ]
  const details = [
    "Ne peut pas éteindre le disjoncteur",
    "Si disjoncteur allumé, peut drainer 25% de santé proche de lui (EMF 2-5 au disjoncteur)",
    "N'accélère pas, passe sa vitesse à 2,5 m/s instantannément à la vue du joueur"
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

export default Jinn