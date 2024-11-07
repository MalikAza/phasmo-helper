import { PropsWithChildren } from "react"

function AppProvider({children}: PropsWithChildren) {
  return (
    <>
      {children}
    </>
  )
}

export default AppProvider