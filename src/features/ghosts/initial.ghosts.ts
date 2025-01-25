import { EvidenceType } from "@/types/evidence.types";
import { Ghost, GhostType } from "@/types/ghosts.types";

import spirit from '@assets/images/ghosts/spirit.webp'
import wraith from '@assets/images/ghosts/wraith.webp'
import phantom from '@assets/images/ghosts/phantom.webp'
import poltergeist from '@assets/images/ghosts/poltergeist.webp'
import banshee from '@assets/images/ghosts/banshee.webp'
import jinn from '@assets/images/ghosts/jinn.webp'
import mare from '@assets/images/ghosts/mare.webp'
import revenant from '@assets/images/ghosts/revenant.webp'
import shade from '@assets/images/ghosts/shade.webp'
import demon from '@assets/images/ghosts/demon.webp'
import yurei from '@assets/images/ghosts/yurei.webp'
import oni from '@assets/images/ghosts/oni.webp'
import yokai from '@assets/images/ghosts/yokai.webp'
import hantu from '@assets/images/ghosts/hantu.webp'
import goryo from '@assets/images/ghosts/goryo.webp'
import myling from '@assets/images/ghosts/myling.webp'
import onryo from '@assets/images/ghosts/onryo.webp'
import the_twins from '@assets/images/ghosts/the_twins.webp'
import raiju from '@assets/images/ghosts/raiju.webp'
import obake from '@assets/images/ghosts/obake.webp'
import the_mimic from '@assets/images/ghosts/the_mimic.webp'
import moroi from '@assets/images/ghosts/moroi.webp'
import deogen from '@assets/images/ghosts/deogen.webp'
import thaye from '@assets/images/ghosts/thaye.webp'

const GHOSTS: Ghost[] = [
  {
    id: GhostType.SPIRIT,
    name: 'Esprit',
    evidences: [
      EvidenceType.ECRITURE,
      EvidenceType.EMF5,
      EvidenceType.SPIRIT_BOX,
    ],
    obligatoryEvidence: null,
    img: spirit,
  },
  {
    id: GhostType.WRAITH,
    name: 'Spectre',
    evidences: [
      EvidenceType.EMF5,
      EvidenceType.DOTS,
      EvidenceType.SPIRIT_BOX,
    ],
    obligatoryEvidence: null,
    img: wraith,
  },
  {
    id: GhostType.PHANTOM,
    name: 'Fantôme',
    evidences: [
      EvidenceType.DOTS,
      EvidenceType.SPIRIT_BOX,
      EvidenceType.UV,
    ],
    obligatoryEvidence: null,
    img: phantom,
  },
  {
    id: GhostType.POLTERGEIST,
    name: 'Poltergeist',
    evidences: [
      EvidenceType.ECRITURE,
      EvidenceType.SPIRIT_BOX,
      EvidenceType.UV,
    ],
    obligatoryEvidence: null,
    img: poltergeist,
  },
  {
    id: GhostType.BANSHEE,
    name: 'Banshee',
    evidences: [
      EvidenceType.ORBE,
      EvidenceType.DOTS,
      EvidenceType.UV,
    ],
    obligatoryEvidence: null,
    img: banshee,
  },
  {
    id: GhostType.JINN,
    name: 'Djinn',
    evidences: [
      EvidenceType.EMF5,
      EvidenceType.TEMP_GLACIALE,
      EvidenceType.UV,
    ],
    obligatoryEvidence: null,
    img: jinn,
  },
  {
    id: GhostType.MARE,
    name: 'Cauchemar',
    evidences: [
      EvidenceType.ECRITURE,
      EvidenceType.ORBE,
      EvidenceType.SPIRIT_BOX,
    ],
    obligatoryEvidence: null,
    img: mare,
  },
  {
    id: GhostType.REVENANT,
    name: 'Revenant',
    evidences: [
      EvidenceType.ECRITURE,
      EvidenceType.ORBE,
      EvidenceType.TEMP_GLACIALE,
    ],
    obligatoryEvidence: null,
    img: revenant,
  },
  {
    id: GhostType.SHADE,
    name: 'Ombre',
    evidences: [
      EvidenceType.ECRITURE,
      EvidenceType.EMF5,
      EvidenceType.TEMP_GLACIALE,
    ],
    obligatoryEvidence: null,
    img: shade,
  },
  {
    id: GhostType.DEMON,
    name: 'Démon',
    evidences: [
      EvidenceType.ECRITURE,
      EvidenceType.TEMP_GLACIALE,
      EvidenceType.UV,
    ],
    obligatoryEvidence: null,
    img: demon,
  },
  {
    id: GhostType.YUREI,
    name: 'Yurei',
    evidences: [
      EvidenceType.ORBE,
      EvidenceType.DOTS,
      EvidenceType.TEMP_GLACIALE,
    ],
    obligatoryEvidence: null,
    img: yurei,
  },
  {
    id: GhostType.ONI,
    name: 'Oni',
    evidences: [
      EvidenceType.EMF5,
      EvidenceType.DOTS,
      EvidenceType.TEMP_GLACIALE,
    ],
    obligatoryEvidence: null,
    img: oni,
  },
  {
    id: GhostType.YOKAI,
    name: 'Yokai',
    evidences: [
      EvidenceType.ORBE,
      EvidenceType.DOTS,
      EvidenceType.SPIRIT_BOX,
    ],
    obligatoryEvidence: null,
    img: yokai,
  },
  {
    id: GhostType.HANTU,
    name: 'Hantu',
    evidences: [
      EvidenceType.ORBE,
      EvidenceType.TEMP_GLACIALE,
      EvidenceType.UV,
    ],
    obligatoryEvidence: EvidenceType.TEMP_GLACIALE,
    img: hantu,
  },
  {
    id: GhostType.GORYO,
    name: 'Goryo',
    evidences: [
      EvidenceType.EMF5,
      EvidenceType.DOTS,
      EvidenceType.UV,
    ],
    obligatoryEvidence: EvidenceType.DOTS,
    img: goryo,
  },
  {
    id: GhostType.MYLING,
    name: 'Myling',
    evidences: [
      EvidenceType.ECRITURE,
      EvidenceType.EMF5,
      EvidenceType.UV,
    ],
    obligatoryEvidence: null,
    img: myling,
  },
  {
    id: GhostType.ONRYO,
    name: 'Onryo',
    evidences: [
      EvidenceType.ORBE,
      EvidenceType.SPIRIT_BOX,
      EvidenceType.TEMP_GLACIALE,
    ],
    obligatoryEvidence: null,
    img: onryo,
  },
  {
    id: GhostType.THE_TWINS,
    name: 'Les Jumeaux',
    evidences: [
      EvidenceType.EMF5,
      EvidenceType.SPIRIT_BOX,
      EvidenceType.TEMP_GLACIALE,
    ],
    obligatoryEvidence: null,
    img: the_twins,
  },
  {
    id: GhostType.RAIJU,
    name: 'Raiju',
    evidences: [
      EvidenceType.EMF5,
      EvidenceType.ORBE,
      EvidenceType.DOTS,
    ],
    obligatoryEvidence: null,
    img: raiju,
  },
  {
    id: GhostType.OBAKE,
    name: 'Obake',
    evidences: [
      EvidenceType.EMF5,
      EvidenceType.ORBE,
      EvidenceType.UV,
    ],
    obligatoryEvidence: EvidenceType.UV,
    img: obake,
  },
  {
    id: GhostType.THE_MIMIC,
    name: 'Le Mimic',
    evidences: [
      EvidenceType.SPIRIT_BOX,
      EvidenceType.TEMP_GLACIALE,
      EvidenceType.UV,
    ],
    obligatoryEvidence: EvidenceType.ORBE,
    img: the_mimic,
  },
  {
    id: GhostType.MOROI,
    name: 'Moroï',
    evidences: [
      EvidenceType.ECRITURE,
      EvidenceType.SPIRIT_BOX,
      EvidenceType.TEMP_GLACIALE,
    ],
    obligatoryEvidence: EvidenceType.SPIRIT_BOX,
    img: moroi,
  },
  {
    id: GhostType.DEOGEN,
    name: 'Deogen',
    evidences: [
      EvidenceType.ECRITURE,
      EvidenceType.DOTS,
      EvidenceType.SPIRIT_BOX,
    ],
    obligatoryEvidence: EvidenceType.SPIRIT_BOX,
    img: deogen,
  },
  {
    id: GhostType.THAYE,
    name: 'Thayé',
    evidences: [
      EvidenceType.ECRITURE,
      EvidenceType.ORBE,
      EvidenceType.DOTS,
    ],
    obligatoryEvidence: null,
    img: thaye,
  },
]

const initialGhosts: Record<GhostType, Ghost> = GHOSTS
  .reduce((acc, ghost) => ({
    ...acc,
    [ghost.id]: ghost
  }), {} as Record<GhostType, Ghost>)

export default initialGhosts