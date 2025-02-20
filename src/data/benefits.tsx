import { FiBarChart2, FiBriefcase, FiDollarSign, FiLock, FiPieChart, FiShield, FiTarget, FiTrendingUp, FiUser } from "react-icons/fi";

import { IBenefit } from "@/types";

export const benefits: IBenefit[] = [
    {
        title: "소셜 네트워킹",
        description: "50대 이상의 회원들과 쉽게 교류하고, 공통 관심사를 나누며 새로운 인연을 만들어 보세요.",
        bullets: [
            {
                title: "맞춤형 프로필",
                description: "나의 관심사와 라이프스타일을 반영한 프로필 생성",
                icon: <FiUser size={26} />
            },
            {
                title: "주제별 커뮤니티",
                description: "여행, 건강, 취미, 재테크 등 다양한 분야에서 소통",
                icon: <FiBarChart2 size={26} />
            },
            {
                title: "안전한 환경",
                description: "실명 인증과 철저한 보안 시스템을 통해 신뢰할 수 있는 커뮤니티 제공",
                icon: <FiShield size={26} />
            }
        ],
        imageSrc: "/images/mockup-1.webp"
    },
    {
        title: "프리미엄 이벤트 & 밍글링 투어",
        description: "여행을 좋아하는 50대를 위한 특별한 모임과 패키지를 제공합니다.",
        bullets: [
            {
                title: "전문가가 기획한 여행 패키지",
                description: "50대 라이프스타일에 맞춘 국내외 여행 프로그램",
                icon: <FiBriefcase size={26} />
            },
            {
                title: "밍글링 투어",
                description: "비슷한 관심사를 가진 사람들과 함께하는 소규모 취미 여행",
                icon: <FiTrendingUp size={26} />
            },
            {
                title: "각종 문화 & 취미 이벤트",
                description: "요리 클래스, 음악 감상회, 독서 모임 등 다양한 활동",
                icon: <FiPieChart size={26} />
            }
        ],
        imageSrc: "/images/mockup-2.webp"
    },
    {
        title: "안전한 커뮤니티 환경",
        description: "회원들의 신뢰를 최우선으로 생각하는 철저한 보안 시스템을 갖추고 있습니다.",
        bullets: [
            {
                title: "실명 인증 시스템",
                description: "안전한 만남을 위한 실명 확인 절차",
                icon: <FiLock size={26} />
            },
            {
                title: "실시간 모니터링",
                description: "부적절한 콘텐츠 및 사용자 필터링",
                icon: <FiShield size={26} />
            },
            {
                title: "프라이버시 보호",
                description: "개인정보를 철저히 보호하는 보안 정책 적용",
                icon: <FiTarget size={26} />
            }
        ],
        imageSrc: "/images/mockup-1.webp"
    }
];