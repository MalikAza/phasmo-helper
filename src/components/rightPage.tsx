import { Separator } from "@components/ui/separator"
import EvidenceBtn from "./evidence.btn"
import useJournal from "@/hooks/journal.hook"
import GhostBtn from "./ghost.btn"
import initialGhosts from "@/features/ghosts/initial.ghosts"

function RightPage() {
  const { state } = useJournal()

  return (
    <div className="text-black p-10 font-lazydog text-2xl flex flex-col h-full overflow-y-auto">
      <h3 className="text-4xl pb-4">Preuves</h3>
      <Separator className="h-1 rounded-full" />
      <ul className="grid grid-cols-2 gap-y-2 py-4">
        {Object.values(state.evidences).map((evidence) => (
          <li className="flex items-center" key={evidence.id}>
            <EvidenceBtn evidence={evidence} />
          </li>
        ))}
      </ul>
      <Separator className="h-1 rounded-full" />
      <ul className="grid grid-cols-3 gap-y-4 pt-4">
        {Object.values(initialGhosts).map((ghost) => (
          <li className="flex items-center justify-center" key={ghost.id}>
            <GhostBtn ghost={ghost} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default RightPage