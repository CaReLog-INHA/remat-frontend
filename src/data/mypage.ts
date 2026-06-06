export type MyPageRoute =
  | "my-page-profile"
  | "my-page-registered-materials"
  | "my-page-activity"
  | "my-page-esg-report";

export const myPageNavItems = [
  { label: "자재 마켓", page: "marketplace", iconSrc: "/figma-icons/nav-market.svg" },
  { label: "AI 분석", iconSrc: "/figma-icons/nav-ai.svg" },
  { label: "자재 등록", page: "register-material", iconSrc: "/figma-icons/nav-upload.svg" },
  { label: "거래 현황", page: "trade-status", iconSrc: "/figma-icons/nav-trade.svg" },
] as const;

export const myPageTabs = [
  { label: "프로필", page: "my-page-profile" },
  { label: "내 자재", page: "my-page-registered-materials" },
  { label: "활동 내역", page: "my-page-activity" },
  { label: "ESG 감축 리포트", page: "my-page-esg-report" },
] as const;
