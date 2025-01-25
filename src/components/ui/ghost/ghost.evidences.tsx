import useJournal from "@/hooks/journal.hook"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../tooltip"
import { EvidenceType } from "@/types/evidence.types"

type Props = {
  evidences : [EvidenceType, EvidenceType, EvidenceType]
}

function GhostEvidences({ evidences }: Props) {
  const { state } = useJournal()

  return (
    <div className="flex flex-row items-center">
      <h4 className="text-2xl">Preuves:</h4>
      <ul className="flex flex-row justify-center gap-x-8 flex-1">
        {
          evidences.map((evidenceType) => {
            const evidence = state.evidences[evidenceType]

            return (
              <li className="flex flex-row items-center" key={evidence.id}>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <img className="h-10 w-10" src={evidence.icon} alt={`${evidence.id} icon`} />
                    </TooltipTrigger>
                    <TooltipContent className="!bg-journal-brown !text-white !font-lazydog text-lg shadow-neutral-800 shadow-md">
                      <p>{evidence.name}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default GhostEvidences