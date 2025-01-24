import JournalProvider from "@/features/journal/provider.journal"
import Head from "@components/head"
import { PropsWithChildren } from "react"
import { HelmetProvider } from "react-helmet-async"

function AppProvider({children}: PropsWithChildren) {
  return (
    <HelmetProvider>
      <JournalProvider>
        <Head />
        {children}
      </JournalProvider>
    </HelmetProvider>
  )
}

export default AppProvider