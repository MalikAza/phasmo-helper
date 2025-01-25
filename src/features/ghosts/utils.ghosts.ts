import { Evidence, EvidenceState, EvidenceType } from "@/types/evidence.types";
import { Ghost, GhostType } from "@/types/ghosts.types";
import { filterEvidencesByState } from "../evidences/utils.evidences";

function isOneOfGhostEvidencesIsStrikedOut(ghost: Ghost, evidences: Record<EvidenceType, Evidence>): boolean {
  const strikedOutEvidences = filterEvidencesByState(evidences, EvidenceState.STRIKED_OUT)

  return strikedOutEvidences.some(evidence => ghost.evidences.includes(evidence.id))
}

function isGhostEvidencesMatchesSelectedOnes(ghost: Ghost, evidences: Record<EvidenceType, Evidence>): boolean {
  const selectedEvidences = filterEvidencesByState(evidences, EvidenceState.SELECTED)

  return selectedEvidences.every(evidence => ghost.evidences.includes(evidence.id))
}

function isGhostPossible(ghost: Ghost, evidences: Record<EvidenceType, Evidence>): boolean {
  if (
    isOneOfGhostEvidencesIsStrikedOut(ghost, evidences)
    || !isGhostEvidencesMatchesSelectedOnes(ghost, evidences)
  ) { return false }

  return true
}

function URLEncodeGhostName(ghostName: GhostType) {
  return encodeURIComponent(ghostName.toLowerCase())
}

function URLdecodeGhostName(ghostName: string): GhostType | undefined {
  try {
    const decodedName = decodeURIComponent(ghostName).toUpperCase()

    return Object.values(GhostType).find(
      ghostType => ghostType === decodedName
    )
  } catch (error) {
    console.error('Error decoding ghost name', error)
    return undefined
  }
}

export {
  isGhostPossible,
  URLEncodeGhostName,
  URLdecodeGhostName
}