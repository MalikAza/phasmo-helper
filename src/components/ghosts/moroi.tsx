import { useParams } from "react-router-dom"
import GhostTemplate from "../ui/ghost/template.ghost"

function Moroi() {
  const { ghostId } = useParams()

  const hunts = [
    '<= 50%'
  ]
  const speeds = [
    '1,5 m/s (base avec santé >50%)',
    '2,25 m/s (base avec santé <5%',
    '3,71 m/s (accélération maximum)',
    '+0,08 m/s touts les 5% de santé perdu en dessous de 45%'
  ]
  const details = [
    "Maudit un joueur lors d'une réponse à la spirit box ou micro parabolique",
    "Être maudit faire perdre 2 fois plus de santé",
    "Être maudit fait perdre de la santé à la lumière",
    "Malédiction uniquement dans la maison",
    "La malédiction se soigne avec une pilule",
    "La malédiction se soigne en mourrant puis en étant resssusciter",
    "L'encens le désoriente pendant 7,5s (au lieu de 5s) durant une chasse",

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

export default Moroi