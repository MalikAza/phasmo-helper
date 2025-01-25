type Props = {
  hunts: string[]
}

function GhostHunt({ hunts }: Props) {
  return (
    <div className="flex flex-col gap-y-2">
      <h4 className="text-2xl">Chasse:</h4>
      <ul className="flex flex-col list-disc text-base font-sans">
        {
          hunts.map((hunt, index) => (
            <li key={index} className="ml-10">{hunt}</li>
          ))
        }
      </ul>
    </div>
  )
}

export default GhostHunt