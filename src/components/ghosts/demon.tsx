import { useParams } from "react-router-dom"
import GhostTemplate from "../ui/ghost/template.ghost"

function Demon() {
  const { ghostId } = useParams()

  const hunts = [
    '<= 70%',
    '<= 100% (pouvoir)'
  ]
  const speeds = [
    '1,7 m/s (base)',
    '2,8 m/s (accélération maximum)'
  ]
  const details = [
    "Délai minimum entre 2 chasses (sans encens) : 20s",
    "Délai entre deux chasses avec un encens 1min",
    "Plus grande portée du crucifix (x1,5)",
    "Chasse plus souvent"
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

export default Demon