import { PropsWithChildren, useReducer } from "react";
import journalReducer from "./main.journal";
import initialJournalState from "./initial.journal";
import JournalContext from "@/stores/journal.ctx";

function JournalProvider({ children }: PropsWithChildren) {
  const [state, dispatch] = useReducer(journalReducer, initialJournalState)

  return (
    <JournalContext.Provider value={{state, dispatch}}>
      {children}
    </JournalContext.Provider>
  )
}

export default JournalProvider