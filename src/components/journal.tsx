import JournalPage from "@components/ui/page.journal"
import { Outlet } from "react-router-dom"
import RightPage from "./rightPage"

function Journal() {

  // const filteredGhosts = GHOSTS.filter(ghost => 
  //   selectedEvidences.length === 0 ||
  //   selectedEvidences.every(evidence => ghost.evidences.includes(evidence))
  // )
  
  return (
    <main className="absolute top-0 left-0 flex items-center justify-center h-screen w-screen">
      <div className="bg-journal-brown h-[90vh] w-[90vw] p-3">
        <div className="h-full flex flex-row">
          <JournalPage>
            <Outlet />
          </JournalPage>
          <JournalPage grid className="text-journal-lines">
            <RightPage />
          </JournalPage>
        </div>
      </div>
    </main>
  )
}

export default Journal