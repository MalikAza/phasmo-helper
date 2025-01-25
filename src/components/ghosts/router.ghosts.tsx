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
    [GhostType.JINN]: lazy(() => import("@components/ghosts/jinn")),
    [GhostType.MARE]: lazy(() => import("@components/ghosts/mare")),
    [GhostType.REVENANT]: lazy(() => import("@components/ghosts/revenant")),
    [GhostType.SHADE]: lazy(() => import("@components/ghosts/shade")),
    [GhostType.DEMON]: lazy(() => import("@components/ghosts/demon")),
    [GhostType.YUREI]: lazy(() => import("@components/ghosts/yurei")),
    [GhostType.ONI]: lazy(() => import("@components/ghosts/oni")),
    [GhostType.YOKAI]: lazy(() => import("@components/ghosts/yokai")),
    [GhostType.HANTU]: lazy(() => import("@components/ghosts/hantu")),
    [GhostType.GORYO]: lazy(() => import("@components/ghosts/goryo")),
    [GhostType.MYLING]: lazy(() => import("@components/ghosts/myling")),
    [GhostType.ONRYO]: lazy(() => import("@components/ghosts/onryo")),
    [GhostType.THE_TWINS]: lazy(() => import("@components/ghosts/twins")),
    [GhostType.RAIJU]: lazy(() => import("@components/ghosts/raiju")),
    [GhostType.OBAKE]: lazy(() => import("@components/ghosts/obake")),
    [GhostType.THE_MIMIC]: lazy(() => import("@components/ghosts/mimic")),
    [GhostType.MOROI]: lazy(() => import("@components/ghosts/moroi")),
    [GhostType.DEOGEN]: lazy(() => import("@components/ghosts/deogen")),
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