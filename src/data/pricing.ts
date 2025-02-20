import { IPricing } from "@/types";

export const tiers: IPricing[] = [
    {
        name: '스타터',
        price: 29,
        features: [
            '기본 클라우드 통합',
            '최대 5명의 팀원',
            '20GB 저장소',
            '이메일 지원',
        ],
    },
    {
        name: '프로',
        price: 99,
        features: [
            '고급 클라우드 통합',
            '최대 20명의 팀원',
            '100GB 저장소',
            '우선 이메일 및 전화 지원',
            '고급 분석',
        ],
    },
    {
        name: '엔터프라이즈',
        price: '맞춤형',
        features: [
            '전체 클라우드 통합',
            '무제한 팀원',
            '무제한 저장소',
            '24/7 전담 지원',
            '맞춤형 솔루션',
            '현장 교육',
        ],
    },
]