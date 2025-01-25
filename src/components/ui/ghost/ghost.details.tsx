type Props = {
  details: string[]
}

function GhostDetails({ details }: Props) {
  return (
    <div className="flex flex-col gap-y-2">
      <h4 className="text-2xl">Détails:</h4>
      <ul className="flex flex-col list-disc text-xl">
        {
          details.map((detail, index) => (
            <li key={index} className="ml-10">{detail}</li>
          ))
        }
      </ul>
    </div>
  )
}

export default GhostDetails