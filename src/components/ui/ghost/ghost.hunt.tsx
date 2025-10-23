import { Badge } from "../badge"
import { Progress } from "../progress"

type Props = {
  hunts: {
    percentage: number,
    comment?: string
  }[]
}

const lifeColors = [
  "#2563eb",
  "#dc2626",
  "#16a34a",
  "#ca8a04"
]

function GhostHunt({ hunts }: Props) {
  return (
    <div className="flex flex-col gap-y-2">
      <h4 className="text-2xl">Chasse:</h4>
      <ul className="flex flex-col list-disc text-base font-sans gap-1">
        {
          hunts.map((hunt, index) => (
            <li key={index} className="flex flex-row gap-2 ml-10 items-center">
              <Badge variant={'outline'} className="!text-white bg-opacity-80 !text-xs" style={{backgroundColor: lifeColors.at(index)}}>
                <span className="w-[4ch] text-right">{`${hunt.percentage}%`}</span>
              </Badge>
              <Progress value={hunt.percentage} max={100} className={`w-1/3 !bg-black/20`} bgColor={lifeColors.at(index)} />
              <span className="text-sm">{hunt.comment}</span>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default GhostHunt