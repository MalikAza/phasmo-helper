import useJournal from "@/hooks/journal.hook"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../tooltip"
import { EvidenceType } from "@/types/evidence.types"

type Props = {
  evidences: [EvidenceType, EvidenceType, EvidenceType]
  obligatoryEvidence: EvidenceType | null
}

function GhostEvidences({ evidences, obligatoryEvidence }: Props) {
  const { state } = useJournal()
  
  if (obligatoryEvidence && !evidences.includes(obligatoryEvidence)) {
    evidences.push(obligatoryEvidence)
  }

  return (
    <div className="flex flex-row items-center">
      <h4 className="text-2xl">Preuves:</h4>
      <ul className="flex flex-row justify-center gap-x-8 flex-1">
        {
          evidences.map((evidenceType) => {
            const evidence = state.evidences[evidenceType]
            const isObligatory = evidence.id === obligatoryEvidence

            return (
              <li className="flex flex-row items-center" key={evidence.id}>
                <TooltipProvider delayDuration={0}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <div className="relative">
                        <img className="h-10 w-10" src={evidence.icon} alt={`${evidence.id} icon`} />
                        {isObligatory && <div className="h-2 w-2 bg-red-600 rounded-full absolute bottom-0 right-0" />}
                      </div>
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