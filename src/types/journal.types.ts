import { Dispatch } from "react"
import { Evidence, EvidenceType } from "./evidence.types";
import { Ghost, GhostType } from "./ghosts.types";

interface JournalState {
  evidences: Record<EvidenceType, Evidence>
  ghosts: Record<GhostType, Ghost>
}

enum ACTIONS {
  CLICK_EVIDENCE = 'CLICK_EVIDENCE',
  CLICK_GHOST = 'CLICK_GHOST',
  RESET = 'RESET'
}

type ActionType = 
  | { type: ACTIONS.CLICK_EVIDENCE; payload: EvidenceType }
  | { type: ACTIONS.CLICK_GHOST; payload: GhostType }
  | { type: ACTIONS.RESET }

interface JournalContextType {
  state: JournalState,
  dispatch: Dispatch<ActionType>
}

export type {
  JournalState,
  ActionType,
  JournalContextType
}

export {
  ACTIONS
}