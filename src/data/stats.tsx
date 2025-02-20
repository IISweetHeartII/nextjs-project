import { BsBarChartFill, BsFillStarFill } from "react-icons/bs";
import { PiGlobeFill } from "react-icons/pi";

import { IStats } from "@/types";

export const stats: IStats[] = [
    {
        title: "1만 명+",
        icon: <BsBarChartFill size={34} className="text-blue-500" />,
        description: "매일 활성 사람수."
    },
    {
        title: "5.0",
        icon: <BsFillStarFill size={34} className="text-yellow-500" />,
        description: "구글 플레이스토어, 앱 스토어에서 꾸준히 유지되는 별점."
    },
    {
        title: "200+",
        icon: <PiGlobeFill size={34} className="text-green-600" />,
        description: "리뷰 수."
    }
];