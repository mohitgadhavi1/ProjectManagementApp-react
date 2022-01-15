import { MdOutlineExplore, MdEmojiFlags } from "react-icons/md";
import { AiOutlineDollar } from "react-icons/ai";
import { LightningBoltIcon } from "@heroicons/react/outline";

const pageData = [
  {
    id: 0,
    name: "country",
    menu: ["explore", "economy", "fire power", "democracy"],
    icon: [
      <MdOutlineExplore />,
      <AiOutlineDollar />,
      <LightningBoltIcon />,
      <MdEmojiFlags />,
    ],
  },
  {
    id: 1,
    name: "stocks",
    menu: ["expl", "eco", "fire", "democ"],
    icon: [
      <MdOutlineExplore />,
      <AiOutlineDollar />,
      <LightningBoltIcon />,
      <MdEmojiFlags />,
    ],
  },
  {
    id: 2,
    name: "socials",
    menu: ["exp-l", "ec-o", "fi-re", "d-emoc"],
    icon: [
      <MdOutlineExplore />,
      <AiOutlineDollar />,
      <LightningBoltIcon />,
      <MdEmojiFlags />,
    ],
  },
  {
    id: 3,
    name: "apps",
    menu: ["ex.pl", "e.co", "fi.re", "d.emoc"],
    icon: [
      <MdOutlineExplore />,
      <AiOutlineDollar />,
      <LightningBoltIcon />,
      <MdEmojiFlags />,
    ],
  },
];

export default pageData;
