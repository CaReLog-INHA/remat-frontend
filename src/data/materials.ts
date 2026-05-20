import materialChair from "@/assets/material-chair.png";
import materialFrame from "@/assets/material-frame.png";
import materialPallets from "@/assets/material-pallets.png";

export type TradeType = "sale" | "rental";

export type MaterialItem = {
  id: string;
  tradeType: TradeType;
  image: string;
  category: string;
  condition: string;
  title: string;
  desc: string;
  location: string;
  price: number;
  priceLabel: string;
  stock: number;
  stockLabel: string;
  carbon: string;
  seller: string;
  rating: string;
  badgeLabel: string;
  registeredAt: string;
};

export const materials: MaterialItem[] = [
  {
    id: "frame-sale",
    tradeType: "sale",
    image: materialFrame,
    category: "천재·금속",
    condition: "최상",
    title: "임시 부스용 천장 프레임",
    desc: "전시회 부스에 2회 사용한 알루미늄 프레임입니다. 높이 2.4m, 폭 1.2m 규격으로 재조립이 쉽고 표면 상태도 좋아 바로 재사용할 수 있습니다.",
    location: "서울 강남구",
    price: 450000,
    priceLabel: "450,000원",
    stock: 20,
    stockLabel: "20개 보유",
    carbon: "85kg CO2",
    seller: "서울전시(주)",
    rating: "4.8",
    badgeLabel: "판매",
    registeredAt: "2026-04-03",
  },
  {
    id: "pallet-sale",
    tradeType: "sale",
    image: materialPallets,
    category: "목재",
    condition: "양호",
    title: "목재 팔레트 일괄 판매",
    desc: "물류창고에서 사용하던 목재 팔레트입니다. 표준 규격으로 적재와 이동용으로 활용하기 좋고, 상태도 균일한 편입니다.",
    location: "경기 일산시",
    price: 15000,
    priceLabel: "15,000원",
    stock: 100,
    stockLabel: "100개 보유",
    carbon: "12kg CO2",
    seller: "리뉴물류",
    rating: "4.6",
    badgeLabel: "판매",
    registeredAt: "2026-04-01",
  },
  {
    id: "chair-rental",
    tradeType: "rental",
    image: materialChair,
    category: "가구",
    condition: "최상",
    title: "행사용 접이식 의자",
    desc: "컨퍼런스에서 2일간 사용한 플라스틱 접이식 의자입니다. 가볍고 적재가 쉬워 대규모 행사 현장에 적합합니다.",
    location: "서울 마포구",
    price: 25000,
    priceLabel: "25,000원",
    stock: 150,
    stockLabel: "150개 보유",
    carbon: "45kg CO2",
    seller: "이벤트플러스",
    rating: "4.9",
    badgeLabel: "대여",
    registeredAt: "2026-04-04",
  },
  {
    id: "frame-rental",
    tradeType: "rental",
    image: materialFrame,
    category: "파티션·구조물",
    condition: "양호",
    title: "임시 부스 파티션 렌탈",
    desc: "브랜드 팝업 운영에 사용하던 모듈형 파티션입니다. 폭 1m, 높이 2.5m 구조로 설치와 이동이 간편합니다.",
    location: "인천 연수구",
    price: 180000,
    priceLabel: "180,000원",
    stock: 30,
    stockLabel: "30개 보유",
    carbon: "95kg CO2",
    seller: "큐브디자인",
    rating: "4.7",
    badgeLabel: "대여",
    registeredAt: "2026-04-02",
  },
  {
    id: "shelf-rental",
    tradeType: "rental",
    image: materialPallets,
    category: "창고·물류",
    condition: "양호",
    title: "창고 보관용 선반 세트",
    desc: "중고 창고 랙으로 사용하던 선반 세트입니다. 분해와 조립이 가능해 임시 보관창고 구축에 적합합니다.",
    location: "경기 화성시",
    price: 320000,
    priceLabel: "320,000원",
    stock: 15,
    stockLabel: "15세트 보유",
    carbon: "120kg CO2",
    seller: "그린스토리지",
    rating: "4.5",
    badgeLabel: "대여",
    registeredAt: "2026-03-30",
  },
  {
    id: "steel-sale",
    tradeType: "sale",
    image: materialChair,
    category: "철재·금속",
    condition: "보통",
    title: "건축 현장 철재 바",
    desc: "건축 현장에서 일부 사용 후 남은 철재 자재입니다. 표면 사용감은 있지만 구조 강도는 유지되어 보강용으로 활용할 수 있습니다.",
    location: "충남 천안시",
    price: 650000,
    priceLabel: "650,000원",
    stock: 50,
    stockLabel: "50개 보유",
    carbon: "180kg CO2",
    seller: "리빌드산업",
    rating: "4.4",
    badgeLabel: "판매",
    registeredAt: "2026-03-28",
  },
];
