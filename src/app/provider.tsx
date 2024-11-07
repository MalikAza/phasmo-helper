import { PropsWithChildren, StrictMode } from "react"

function Provider({children}: PropsWithChildren) {
  return (
    <StrictMode>
      {children}
    </StrictMode>
  )
}

export default Provider