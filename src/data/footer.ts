import { IMenuItem, ISocials } from "@/types";

export const footerDetails: {
    subheading: string;
    quickLinks: IMenuItem[];
    email: string;
    telephone: string;
    socials: ISocials;
} = {
    subheading: "50대를 위한 커뮤니티, 이제 친구를 여기서 만드세요!",
    quickLinks: [
        {
            text: "리본 모임",
            url: "#gathering"
        },
        {
            text: "리본 데이트",
            url: "#date"
        },
        {
            text: "리본 뉴스",
            url: "#news"
        }
    ],
    email: 'Senioring@gmail.com',
    telephone: '+82 (010) 5006-0198',
    socials: {
        twitter: 'https://twitter.com/Twitter',
        facebook: 'https://facebook.com',
        linkedin: 'https://www.linkedin.com',
        instagram: 'https://www.instagram.com',
    }
}
