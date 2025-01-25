type Props = {
  speeds: string[]
}

function GhostSpeed({ speeds }: Props) {
  return (
    <div className="flex flex-col gap-y-2">
      <h4 className="text-2xl">Vitesse:</h4>
      <ul className="flex flex-col list-disc text-base font-sans">
        {
          speeds.map((speed, index) => (
            <li key={index} className="ml-10">{speed}</li>
          ))
        }
      </ul>
    </div>
  )
}

export default GhostSpeed