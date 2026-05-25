export type MyPageRoute = "my-page-profile" | "my-page-registered-materials" | "my-page-activity" | "my-page-esg-report";

export const myPageNavItems = [
  { label: "자재 마켓", page: "marketplace", iconSrc: "/figma-icons/nav-market.svg" },
  { label: "AI 분석", iconSrc: "/figma-icons/nav-ai.svg" },
  { label: "자재 등록", page: "register-material", iconSrc: "/figma-icons/nav-upload.svg" },
  { label: "거래 현황", page: "trade-status", iconSrc: "/figma-icons/nav-trade.svg" },
] as const;

export const myPageSummaryCards = [
  { label: "총 거래", value: "12", iconSrc: "/figma-icons/stat-total.svg", tint: "bg-[#dbeafe]" },
  { label: "탄소 절감", value: "220kg", iconSrc: "/figma-icons/stat-carbon.svg", tint: "bg-[#dcfce7]" },
  { label: "판매 자재", value: "3", iconSrc: "/figma-icons/stat-sell.svg", tint: "bg-[#f3e8ff]" },
  { label: "구매 자재", value: "9", iconSrc: "/figma-icons/stat-buy.svg", tint: "bg-[#fee2e2]" },
] as const;

export const myPageTabs = [
  { label: "프로필", page: "my-page-profile" },
  { label: "내 자재", page: "my-page-registered-materials" },
  { label: "활동 내역", page: "my-page-activity" },
  { label: "ESG 감축 리포트", page: "my-page-esg-report" },
] as const;

export const myPageContacts = [
  { label: "이메일", value: "kim@example.com", iconSrc: "/figma-icons/contact-mail.svg" },
  { label: "전화번호", value: "010-1234-5678", iconSrc: "/figma-icons/contact-phone.svg" },
  { label: "회사/직책", value: "서울전시(주) / 구매 담당", iconSrc: "/figma-icons/contact-company.svg" },
  { label: "위치", value: "서울 강남구", iconSrc: "/figma-icons/contact-location.svg" },
] as const;

export const myPageProfile = {
  name: "김현수",
  rating: "4.8",
  reviewCount: "12개 리뷰",
  company: "서울전시(주)",
  location: "서울 강남구",
  joinedAt: "2025-11-15",
};

export const myPageRegisteredMaterials = [
  {
    title: "중고 철재 책상",
    category: "가구 · 데스크",
    status: "판매 중",
    location: "서울 강남구",
    postedAt: "3일 전",
    iconSrc: "/figma-icons/registered-materials.svg",
  },
  {
    title: "사무용 의자 세트",
    category: "가구 · 의자",
    status: "예약 중",
    location: "경기도 성남시",
    postedAt: "6일 전",
    iconSrc: "/figma-icons/registered-materials.svg",
  },
  {
    title: "LED 조명 기구",
    category: "전기 · 조명",
    status: "판매 완료",
    location: "서울 마포구",
    postedAt: "1주 전",
    iconSrc: "/figma-icons/registered-materials.svg",
  },
] as const;

export const myPageActivities = [
  {
    time: "3시간 전",
    title: "자재 거래 완료",
    description: "중고 철재 책상 2개 거래를 성공적으로 완료했습니다.",
    iconSrc: "/figma-icons/activity-log.svg",
  },
  {
    time: "1일 전",
    title: "프로필 정보 수정",
    description: "회사 정보와 연락처를 최신 상태로 업데이트했습니다.",
    iconSrc: "/figma-icons/activity-log.svg",
  },
  {
    time: "4일 전",
    title: "배지 획득: 순환 마스터",
    description: "탄소 절감 200kg 달성으로 새로운 배지를 획득했습니다.",
    iconSrc: "/figma-icons/activity-log.svg",
  },
] as const;

export const myPageBadges = [
  {
    title: "그린 스타터",
    subtitle: "첫 재사용 거래 완료",
    description: "재사용 자재 거래 1회를 달성하고 탄소 절감 여정을 시작했습니다.",
    accent: "#16a34a",
    bg: "from-[#ecfdf3] to-[#f0fdf4]",
    iconSrc: "/figma-icons/badge-green-starter.svg",
    earned: true,
  },
  {
    title: "순환 마스터",
    subtitle: "누적 탄소 절감 200kg 돌파",
    description: "ESG 성과를 꾸준히 쌓아 순환경제 기여를 인정받았습니다.",
    accent: "#155dfc",
    bg: "from-[#eff6ff] to-[#dbeafe]",
    iconSrc: "/figma-icons/badge-circular-master.svg",
    earned: true,
  },
  {
    title: "커뮤니티 셀러",
    subtitle: "판매 자재 3건 등록",
    description: "유휴 자재를 시장에 순환시켜 다른 기업의 조달 비용을 낮췄습니다.",
    accent: "#9333ea",
    bg: "from-[#faf5ff] to-[#f3e8ff]",
    iconSrc: "/figma-icons/badge-community-seller.svg",
    earned: true,
  },
  {
    title: "제로 웨이스트",
    subtitle: "폐기물 없는 프로젝트 달성",
    description: "프로젝트 종료 후 자재를 모두 순환시켜 폐기물 제로에 도전 중입니다.",
    accent: "#ea580c",
    bg: "from-[#fff7ed] to-[#ffedd5]",
    iconSrc: "/figma-icons/badge-zero-waste.svg",
    earned: false,
  },
] as const;
