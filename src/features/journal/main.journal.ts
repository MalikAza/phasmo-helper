import { EvidenceState } from "@/types/evidence.types";
import { ACTIONS, ActionType, JournalState } from "@/types/journal.types";

function journalReducer(state: JournalState, action: ActionType): JournalState {
  switch (action.type) {
    case ACTIONS.CLICK_EVIDENCE:
      const evidence = state.evidences[action.payload]
      let newEvidenceState: EvidenceState

      switch (evidence.state) {
        case EvidenceState.NOT_SELECTED:
          newEvidenceState = EvidenceState.SELECTED
          break

        case EvidenceState.SELECTED:
          newEvidenceState = EvidenceState.STRIKED_OUT
          break

        case EvidenceState.STRIKED_OUT:
          newEvidenceState = EvidenceState.NOT_SELECTED
          break
      }

      return {
        ...state,
        evidences: {
          ...state.evidences,
          [action.payload]: {
            ...evidence,
            state: newEvidenceState
          }
        }
      }
  
    default:
      return state
  }
}

export default journalReducer