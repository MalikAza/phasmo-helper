import { ReactNode } from "react"
import JournalPage from "@components/ui/page.journal"

type Props = {
  leftPage: ReactNode
  rightPage: ReactNode
}

function Journal({ leftPage, rightPage }: Props) {
  return (
    <main className="absolute top-0 left-0 flex items-center justify-center h-screen w-screen">
      <div className="bg-journal-brown h-[90vh] w-[90vw] p-3">
        <div className="h-full flex flex-row">
          <JournalPage>
            {leftPage}
          </JournalPage>
          <JournalPage grid className="text-journal-lines">
            {rightPage}
          </JournalPage>
        </div>
      </div>
    </main>
  )
}

export default Journal