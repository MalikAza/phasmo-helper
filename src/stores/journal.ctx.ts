import { JournalContextType } from "@/types/journal.types";
import { createContext } from "react";

const JournalContext = createContext<JournalContextType | null>(null)

export default JournalContext