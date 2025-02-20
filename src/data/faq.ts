import { IFAQ } from "@/types";
import { siteDetails } from "./siteDetails";

export const faqs: IFAQ[] = [
    {
        question: `${siteDetails.siteName} 모임은 어떻게 진행되나요?`,
        answer: '모임은 매주 화요일과 목요일에 온라인으로 진행됩니다. 참가 링크는 모임 시작 30분 전에 이메일로 보내드립니다.',
    },
    {
        question: `가격은 얼마인가요?`,
        answer: '참가비는 월 5만원입니다. 첫 달은 무료로 체험하실 수 있습니다.',
    },
    {
        question: '환불 정책은 어떻게 되나요?',
        answer: '모임 시작 24시간 전까지 취소하시면 전액 환불해드립니다. 이후에는 환불이 불가능합니다.'
    },
    {
        question: '모임에 필요한 준비물이 있나요?',
        answer: '편안한 복장과 필기 도구만 준비해주시면 됩니다. 나머지 자료는 저희가 제공합니다.',
    },
    {
        question: '모임에 대해 더 알고 싶어요.',
        answer: '저희 웹사이트의 FAQ 섹션을 참고하시거나, 고객 지원팀에 문의해주시면 자세히 안내해드리겠습니다.'
    }
];