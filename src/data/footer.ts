import { IMenuItem, ISocials } from "@/types";

export const footerDetails: {
    subheading: string;
    quickLinks: IMenuItem[];
    email: string;
    telephone: string;
    socials: ISocials;
} = {
    subheading: "Empowering businesses with cutting-edge financial technology solutions.",
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
    email: 'address@yoursite.com',
    telephone: '+1 (123) 456-7890',
    socials: {
        twitter: 'https://twitter.com/Twitter',
        facebook: 'https://facebook.com',
        linkedin: 'https://www.linkedin.com',
        instagram: 'https://www.instagram.com',
    }
}
