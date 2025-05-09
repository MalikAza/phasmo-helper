import { EvidenceType } from "./evidence.types"

enum GhostType {
  SPIRIT = 'SPIRIT',
  WRAITH = 'WRAITH',
  PHANTOM = 'PHANTOM',
  POLTERGEIST = 'POLTERGEIST',
  BANSHEE = 'BANSHEE',
  JINN = 'JINN',
  MARE = 'MARE',
  REVENANT = 'REVENANT',
  SHADE = 'SHADE',
  DEMON = 'DEMON',
  YUREI = 'YUREI',
  ONI = 'ONI',
  YOKAI = 'YOKAI',
  HANTU = 'HANTU',
  GORYO = 'GORYO',
  MYLING = 'MYLING',
  ONRYO = 'ONRYO',
  THE_TWINS = 'THE_TWINS',
  RAIJU = 'RAIJU',
  OBAKE = 'OBAKE',
  THE_MIMIC = 'THE_MIMIC',
  MOROI = 'MOROI',
  DEOGEN = 'DEOGEN',
  THAYE = 'THAYE',
}

enum GhostState {
  NOT_SELECTED = 'NOT_SELECTED',
  SELECTED = 'SELECTED',
  STRIKED_OUT = 'STRIKED_OUT',
}

interface Ghost {
  id: GhostType
  name: string
  evidences: [EvidenceType, EvidenceType, EvidenceType]
  obligatoryEvidence: EvidenceType | null
  img: string
  state: GhostState
}

export type {
  Ghost
}

export {
  GhostType,
  GhostState
}