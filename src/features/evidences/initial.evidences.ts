import { Evidence, EvidenceState, EvidenceType } from "@/types/evidence.types";

const EVIDENCES: Evidence[] = [
  {
    id: EvidenceType.EMF5,
    name:'EMF Niveau 5',
    state: EvidenceState.NOT_SELECTED
  },
  {
    id: EvidenceType.DOTS,
    name: 'Projecteur D.O.T.S.',
    state: EvidenceState.NOT_SELECTED
  },
  {
    id: EvidenceType.UV,
    name: 'Ultraviolet',
    state: EvidenceState.NOT_SELECTED
  },
  {
    id: EvidenceType.ORBE,
    name: 'Orbe fantomatique',
    state: EvidenceState.NOT_SELECTED
  },
  {
    id: EvidenceType.ECRITURE,
    name: 'Écriture fantomatique',
    state: EvidenceState.NOT_SELECTED
  },
  {
    id: EvidenceType.SPIRIT_BOX,
    name: 'Spirit Box',
    state: EvidenceState.NOT_SELECTED
  },
  {
    id: EvidenceType.TEMP_GLACIALE,
    name: 'Température glaciales',
    state: EvidenceState.NOT_SELECTED
  }
]

const initialEvidences: Record<EvidenceType, Evidence> = EVIDENCES
  .reduce((acc, evidence) => ({
    ...acc,
    [evidence.id]: evidence
  }), {} as Record<EvidenceType, Evidence>)

export default initialEvidences