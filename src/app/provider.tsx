import Head from "@components/head"
import { PropsWithChildren } from "react"
import { HelmetProvider } from "react-helmet-async"

function AppProvider({children}: PropsWithChildren) {
  return (
    <HelmetProvider>
      <Head />
      {children}
    </HelmetProvider>
  )
}

export default AppProvider