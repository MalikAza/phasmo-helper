import { Dispatch } from "react"
import { Evidence, EvidenceType } from "./evidence.types";

interface JournalState {
  evidences: Record<EvidenceType, Evidence>
}

enum ACTIONS {
  CLICK_EVIDENCE = 'CLICK_EVIDENCE',
}

type ActionType = 
  | { type: ACTIONS.CLICK_EVIDENCE; payload: EvidenceType }

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