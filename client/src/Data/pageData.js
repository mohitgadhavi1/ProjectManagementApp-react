import { MdOutlineExplore, MdEmojiFlags } from "react-icons/md";
import { AiOutlineDollar } from "react-icons/ai";
import { LightningBoltIcon } from "@heroicons/react/outline";

const pageData = [
  {
    id: 0,
    name: "project",
    menu: ["add project", "messages", "", ""],
    icon: [
      <MdOutlineExplore />,
      <AiOutlineDollar />,
      <LightningBoltIcon />,
      <MdEmojiFlags />,
    ],
  },
  {
    id: 1,
    name: "team",
    menu: ["expl", "eco", "fire", "democ"],
    icon: [
      <MdOutlineExplore />,
      <AiOutlineDollar />,
      <LightningBoltIcon />,
      <MdEmojiFlags />,
    ],
  },
];

export default pageData;
