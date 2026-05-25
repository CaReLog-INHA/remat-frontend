import figmaLogoIcon from "@/assets/figma-logo-icon-original.svg";
import figmaMascot from "@/assets/figma-mascot-original.svg";
import { materials } from "@/data/materials";

export const homeAssets = {
  logoIcon: figmaLogoIcon,
  mascot: figmaMascot,
};

export const navItems = [
  { label: "자재 마켓", page: "marketplace", iconSrc: "/figma-icons/nav-market.svg" },
  { label: "AI 분석", page: "ai-analysis", iconSrc: "/figma-icons/nav-ai.svg" },
  { label: "자재 등록", page: "register-material", iconSrc: "/figma-icons/nav-upload.svg" },
  { label: "거래현황", iconSrc: "/figma-icons/nav-trade.svg" },
] as const;

export const heroStats = [
  { value: "1,240+", label: "등록된 자재" },
  { value: "320+", label: "파트너 기업" },
  { value: "85t", label: "탄소 절감" },
];

export const valueCards = [
  {
    title: "자재 순환",
    desc: "버려지기 쉬운 자재를 필요한 곳에 연결해 비용을 줄이고 순환 경제를 실현합니다.",
    tone: "red",
    icon: "M7 7h10v10H7zM12 4v3M12 17v3M4 12h3M17 12h3",
  },
  {
    title: "비용 절감",
    desc: "새 자재 구매 대신 재사용 자재를 선택해 예산을 아끼고 프로젝트 부담도 낮출 수 있습니다.",
    tone: "mint",
    icon: "M4 13l4 4L20 5M4 7h7M4 11h5",
  },
  {
    title: "ESG 데이터",
    desc: "탄소 절감 효과를 수치로 확인하고 ESG 경영 자료로 바로 사용할 수 있는 데이터를 제공합니다.",
    tone: "teal",
    icon: "M5 19V5M9 19v-8M13 19V8M17 19v-5M21 19H3",
  },
] as const;

export const materialCards = materials.slice(0, 3).map((item) => ({
  image: item.image,
  category: item.category,
  status: item.condition,
  title: item.title,
  desc: item.desc,
  price: item.priceLabel,
  stock: item.stockLabel,
  carbon: item.carbon,
}));

export const footerLinks = {
  service: ["자재 마켓", "AI 분석", "자재 등록", "대시보드"],
  support: ["공지사항", "FAQ", "문의하기"],
};
