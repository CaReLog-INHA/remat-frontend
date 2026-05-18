import figmaLogoIcon from "@/assets/figma-logo-icon-original.svg";
import figmaMascot from "@/assets/figma-mascot-original.svg";
import materialChair from "@/assets/material-chair.png";
import materialFrame from "@/assets/material-frame.png";
import materialPallets from "@/assets/material-pallets.png";

export const homeAssets = {
  logoIcon: figmaLogoIcon,
  mascot: figmaMascot,
};

export const navItems = [
  { label: "자재 마켓", page: "marketplace", icon: "M3 7h18M6 7V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2M5 7l1.2 12h11.6L19 7M9 11v4M15 11v4" },
  { label: "AI 분석", icon: "M12 3v3M12 18v3M5.64 5.64l2.12 2.12M16.24 16.24l2.12 2.12M3 12h3M18 12h3M5.64 18.36l2.12-2.12M16.24 7.76l2.12-2.12M9 12a3 3 0 1 0 6 0a3 3 0 0 0-6 0" },
  { label: "자재 등록", page: "register-material", icon: "M12 5v14M5 12h14M4 19h16" },
  { label: "거래현황", icon: "M4 19V5M8 17v-6M12 17V7M16 17v-3M20 19H4" },
] as const;

export const heroStats = [
  { value: "1,240+", label: "등록된 자재" },
  { value: "320+", label: "파트너 기업" },
  { value: "85t", label: "탄소 절감" },
];

export const valueCards = [
  {
    title: "자재 순환",
    desc: "사용하지 않는 자재를 필요한 곳에 연결하여 자원 낭비를 줄이고 순환 경제를 실현합니다.",
    tone: "red",
    icon: "M7 7h10v10H7zM12 4v3M12 17v3M4 12h3M17 12h3",
  },
  {
    title: "비용 절감",
    desc: "새 자재 구매 대신 재사용 자재를 활용해 비용을 줄이고 폐기 부담도 낮출 수 있습니다.",
    tone: "mint",
    icon: "M4 13l4 4L20 5M4 7h7M4 11h5",
  },
  {
    title: "ESG 데이터",
    desc: "탄소 절감량을 측정하고 ESG 경영 성과로 활용할 수 있는 데이터를 제공합니다.",
    tone: "teal",
    icon: "M5 19V5M9 19v-8M13 19V8M17 19v-5M21 19H3",
  },
];

export const materialCards = [
  {
    image: materialFrame,
    category: "철재/금속",
    status: "최상",
    title: "임시 부스용 철재 프레임",
    desc: "전시회에서 한 번 사용한 철재 프레임입니다. 조립이 간편하고 재사용 상태가 좋습니다.",
    price: "450,000원",
    stock: "20개 보유",
    carbon: "85kg CO2",
  },
  {
    image: materialPallets,
    category: "목재",
    status: "양호",
    title: "목재 팔레트 대량 판매",
    desc: "물류창고에서 사용하던 목재 팔레트입니다. 표준 규격으로 적재 용도에 적합합니다.",
    price: "15,000원",
    stock: "100개 보유",
    carbon: "12kg CO2",
  },
  {
    image: materialChair,
    category: "가구",
    status: "최상",
    title: "행사용 접이식 의자",
    desc: "컨퍼런스에서 사용한 접이식 의자입니다. 가볍고 보관과 이동이 편리합니다.",
    price: "25,000원",
    stock: "150개 보유",
    carbon: "45kg CO2",
  },
];

export const footerLinks = {
  service: ["자재 마켓", "AI 분석", "자재 등록", "대시보드"],
  support: ["공지사항", "FAQ", "문의하기"],
};
