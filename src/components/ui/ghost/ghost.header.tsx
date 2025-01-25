import { Separator } from "../separator"

type Props = {
  image: string
  name: string
}

function GhostHeader({ name, image }: Props) {
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <img className="h-32 w-3h-32" src={image} alt={`${name} logo`} />
        <h3 className="text-4xl">{name}</h3>
      </div>
      <Separator className="text-black h-1 rounded-full w-full my-4" />
    </>
  )
}

export default GhostHeader