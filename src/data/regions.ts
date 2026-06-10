import type { Region } from "@/api/types";

export const regionOptions: ReadonlyArray<{ value: Region; label: string }> = [
  { value: "SEOUL", label: "서울특별시" },
  { value: "INCHEON", label: "인천광역시" },
  { value: "GYEONGGI", label: "경기도" },
  { value: "BUSAN", label: "부산광역시" },
  { value: "DAEGU", label: "대구광역시" },
  { value: "GWANGJU", label: "광주광역시" },
  { value: "DAEJEON", label: "대전광역시" },
  { value: "ULSAN", label: "울산광역시" },
  { value: "SEJONG", label: "세종특별자치시" },
  { value: "GANGWON", label: "강원도" },
  { value: "CHUNGBUK", label: "충청북도" },
  { value: "CHUNGNAM", label: "충청남도" },
  { value: "JEONBUK", label: "전라북도" },
  { value: "JEONNAM", label: "전라남도" },
  { value: "GYEONGBUK", label: "경상북도" },
  { value: "GYEONGNAM", label: "경상남도" },
  { value: "JEJU", label: "제주특별자치도" },
];
