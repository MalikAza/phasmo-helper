import { URLEncodeGhostName } from "@/features/ghosts/utils.ghosts";
import { GhostType } from "@/types/ghosts.types";
import { ComponentType, lazy, LazyExoticComponent, Suspense } from "react";
import { useParams } from "react-router-dom";


function GhostsRouter() {
  const { ghostId } = useParams();
  
  const ghostComponents: Record<GhostType, LazyExoticComponent<ComponentType>> = {
    [GhostType.SPIRIT]: lazy(() => import("@components/ghosts/spirit")),
    [GhostType.WRAITH]: lazy(() => import("@components/ghosts/wraith")),
    [GhostType.PHANTOM]: lazy(() => import("@components/ghosts/phantom")),
    [GhostType.POLTERGEIST]: lazy(() => import("@components/ghosts/poltergeist")),
    [GhostType.BANSHEE]: lazy(() => import("@components/ghosts/banshee")),
  }

  const decodedGhostId = ghostId
    ? Object.values(GhostType).find(
        ghost => URLEncodeGhostName(ghost) === ghostId
      )
    : null;

  if (!decodedGhostId) {
    return <div className="h-full w-full flex items-center justify-center">Ghost not found</div>
  }

  const GhostComponent = ghostComponents[decodedGhostId];

  return (
    <Suspense fallback={<div className="h-full w-full flex items-center justify-center font-lazydog">Loading ghost details...</div>}>
      {GhostComponent ? <GhostComponent /> : <div className="h-full w-full flex items-center justify-center font-lazydog">Component not found</div>}
    </Suspense>
  )
}

export default GhostsRouter;