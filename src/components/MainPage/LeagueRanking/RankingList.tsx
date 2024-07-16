import Image, { StaticImageData } from "next/image";
import Kt from "@/img/TeamLogo/Kt.svg";
import Kia from "@/img/TeamLogo/Kia.svg";
import Lg from "@/img/TeamLogo/Lg.svg";
import Samsung from "@/img/TeamLogo/Samsung.svg";
import Doosan from "@/img/TeamLogo/Doosan.svg";
import Ssg from "@/img/TeamLogo/ssg.svg";
import Nc from "@/img/TeamLogo/nc.svg";
import Hanwha from "@/img/TeamLogo/Hanwha.svg";
import Lotte from "@/img/TeamLogo/Lotte.svg";
import Kiwoom from "@/img/TeamLogo/Kiwoom.svg";

type TRankingList = {
  rank: string;
  teamName: string;
  totalGames: string;
  win: string;
  draw: string;
  lose: string;
  winRate: string;
};

export default function RankingList(props: TRankingList) {
  const trStyle = props.teamName === "KT" ? " border-[3px] bg-gray-800" : "";
  const tdStyle = "text-center py-[3.5%]";
  const teamLogoStyle =
    "absolute left-[-0.5rem] top-1/2 translate-y-[-50%] w-8 h-8";

  const teamLogo = (teamName: string): StaticImageData => {
    switch (teamName) {
      case "키움":
        return Kiwoom;
      case "한화":
        return Hanwha;
      case "KT":
        return Kt;
      case "KIA":
        return Kia;
      case "LG":
        return Lg;
      case "삼성":
        return Samsung;
      case "두산":
        return Doosan;
      case "SSG":
        return Ssg;
      case "NC":
        return Nc;
      case "롯데":
        return Lotte;
      default:
        throw new Error("no teamName");
    }
  };

  return (
    <tr className={`text-white text-sm ${trStyle} font-[Leferi]`}>
      <td className={`${tdStyle}`}>{props.rank}</td>
      <td className="text-center relative text-base">
        <Image
          src={teamLogo(props.teamName)}
          alt={props.teamName}
          className={teamLogoStyle}
        />
        {props.teamName}
      </td>
      <td className="text-center">{props.totalGames}</td>
      <td className="text-center">{props.win}</td>
      <td className="text-center">{props.draw}</td>
      <td className="text-center">{props.lose}</td>
      <td className="text-center">{props.winRate}</td>
    </tr>
  );
}
