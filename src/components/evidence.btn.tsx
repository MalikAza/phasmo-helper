import useJournal from "@/hooks/journal.hook"
import { cn } from "@/lib/utils"
import { Evidence, EvidenceState } from "@/types/evidence.types"
import { ACTIONS } from "@/types/journal.types"

type Props = {
  evidence: Evidence
}

function EvidenceBtn({ evidence }: Props) {
  const { dispatch } = useJournal()

  const handleOnClick = () => {
    dispatch({type: ACTIONS.CLICK_EVIDENCE, payload: evidence.id})
  }

  return (
    <button
      onClick={handleOnClick}
      className="flex items-center flex-row gap-2 relative"
    >
      <span className="h-8 w-8 border-black border-2 inline-block">
        {evidence.state === EvidenceState.SELECTED ? 'X' : ''}
      </span>
      <span>{evidence.name}</span>
      
      <span 
        className={
          cn("absolute top-1/2 -translate-y-1/2 -left-[5%] w-[110%] h-1 bg-black rounded-full",
          evidence.state === EvidenceState.STRIKED_OUT ? 'block' : 'hidden')
        }
      />
    </button>
  )
}

export default EvidenceBtn