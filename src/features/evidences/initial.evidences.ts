import { Evidence, EvidenceState, EvidenceType } from "@/types/evidence.types";

import emf5 from '@assets/images/evidences/emf5.webp'
import uv from '@assets/images/evidences/uv.webp'
import dots from '@assets/images/evidences/dots.webp'
import orb from '@assets/images/evidences/orb.webp'
import ecriture from '@assets/images/evidences/ecriture.webp'
import spiritBox from '@assets/images/evidences/spirit_box.webp'
import tempGlaciale from '@assets/images/evidences/temp_glaciale.webp'

const EVIDENCES: Evidence[] = [
  {
    id: EvidenceType.EMF5,
    name:'EMF Niveau 5',
    state: EvidenceState.NOT_SELECTED,
    icon: emf5
  },
  {
    id: EvidenceType.DOTS,
    name: 'Projecteur D.O.T.S.',
    state: EvidenceState.NOT_SELECTED,
    icon: dots
  },
  {
    id: EvidenceType.UV,
    name: 'Ultraviolet',
    state: EvidenceState.NOT_SELECTED,
    icon: uv
  },
  {
    id: EvidenceType.ORBE,
    name: 'Orbe fantomatique',
    state: EvidenceState.NOT_SELECTED,
    icon: orb
  },
  {
    id: EvidenceType.ECRITURE,
    name: 'Écriture fantomatique',
    state: EvidenceState.NOT_SELECTED,
    icon: ecriture
  },
  {
    id: EvidenceType.SPIRIT_BOX,
    name: 'Spirit Box',
    state: EvidenceState.NOT_SELECTED,
    icon: spiritBox
  },
  {
    id: EvidenceType.TEMP_GLACIALE,
    name: 'Température glaciales',
    state: EvidenceState.NOT_SELECTED,
    icon: tempGlaciale
  }
]

const initialEvidences: Record<EvidenceType, Evidence> = EVIDENCES
  .reduce((acc, evidence) => ({
    ...acc,
    [evidence.id]: evidence
  }), {} as Record<EvidenceType, Evidence>)

export default initialEvidences