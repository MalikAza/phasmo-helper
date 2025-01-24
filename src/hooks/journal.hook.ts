import JournalContext from "@/stores/journal.ctx";
import { useContext } from "react";

function useJournal() {
  const context = useContext(JournalContext)

  if (!context) throw new Error('useJournal must be used within a JournalProvider')

  return context
}

export default useJournal