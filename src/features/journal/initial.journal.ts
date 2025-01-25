import { JournalState } from "@/types/journal.types";
import initialEvidences from "@features/evidences/initial.evidences";
import initialGhosts from "@features/ghosts/initial.ghosts";

const initialJournalState: JournalState = {
  evidences: initialEvidences,
  ghosts: initialGhosts
}

export default initialJournalState