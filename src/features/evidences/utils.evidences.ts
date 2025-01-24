import { Evidence, EvidenceState, EvidenceType } from "@/types/evidence.types";

function filterEvidencesByState(evidences: Record<EvidenceType, Evidence>, state: EvidenceState) {
  return Object.values(evidences).filter(e => e.state === state)
}

export {
  filterEvidencesByState
}