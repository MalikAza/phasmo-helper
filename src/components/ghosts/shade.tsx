import { useParams } from "react-router-dom"
import GhostTemplate from "../ui/ghost/template.ghost"

function Shade() {
  const { ghostId } = useParams()

  const hunts = [
    '<= 35%'
  ]
  const speeds = [
    '1,7 m/s (base)',
    '2,8 m/s (accélération maximum)'
  ]
  const details = [
    "Intéragit peu",
    "Ne peut pas interragir si un joueur se trouve dans sa pièce",
    "Ne peut pas faire d'EMF 3 si un joueur se trouve dans sa pièce",
    "Ne peut pas chasser si un joueur se trouve dans sa pièce",
    "Plus de chances de faire l'événement boule d'air / souffle",
    "Plus de chances de se manifester sous forme d'ombre",
    "Chance d'apparaître en ombre avec : cercle d'invocation, boîte à musique ou patte de singe",
    "0% de chances de faire un évènement quand la santé est à 100% (augmente de 2% par % de santé perdu)"
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

export default Shade