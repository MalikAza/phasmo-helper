enum EvidenceType {
  EMF5 = 'EMF5',
  DOTS = 'DOTS',
  UV = 'UV',
  ORBE = 'ORBE',
  ECRITURE = 'ECRITURE',
  SPIRIT_BOX = 'SPIRIT_BOX',
  TEMP_GLACIALE = 'TEMP_GLACIALE'
}

enum EvidenceState {
  NOT_SELECTED = 'NOT_SELECTED',
  SELECTED = 'SELECTED',
  STRIKED_OUT = 'STRIKED_OUT',
}

interface Evidence {
  id: EvidenceType
  name: string
  state: EvidenceState
  icon: string
}

export type {
  Evidence
}

export {
  EvidenceType,
  EvidenceState
}