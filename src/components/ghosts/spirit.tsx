import { useParams } from "react-router-dom"

function Spirit() {
  const { ghostId } = useParams()

  console.log('Spirit component rendered', { ghostId })

  return (
    <div>
      <h2>Spirit Details</h2>
      <p>Ghost ID: {ghostId}</p>
    </div>
  )
}

export default Spirit