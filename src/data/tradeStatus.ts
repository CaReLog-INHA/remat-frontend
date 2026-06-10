// 거래 현황 화면 공통 포맷/라벨 헬퍼
import { regionOptions } from "./regions";
import { transactionLabel } from "./materialOptions";

export { transactionLabel };

export const requestStatusLabel = (status?: string): string =>
  (({
    PENDING: "대기 중",
    ACCEPTED: "승인됨",
    REJECTED: "거절됨",
  }) as Record<string, string>)[status ?? ""] ?? (status || "—");

export const formatPrice = (n?: number | null): string =>
  n == null ? "—" : `${n.toLocaleString("ko-KR")}원`;

export const formatDate = (iso?: string | null): string => {
  if (!iso) return "—";
  const d = new Date(iso);
  return Number.isNaN(d.getTime()) ? iso : d.toLocaleDateString("ko-KR");
};

/** region 값이 코드(SEOUL)면 한글로, 이미 한글이면 그대로 */
export const regionLabel = (code?: string): string =>
  code ? regionOptions.find((r) => r.value === code)?.label ?? code : "—";

/** 아바타 이니셜 */
export const initialOf = (name?: string): string => name?.trim()?.[0] ?? "?";

/** 거래유형별 뱃지 톤 */
export const transactionTone = (type?: string): string =>
  type === "RENTAL" ? "bg-[#f3e8ff] text-[#8200db]" : "bg-[#dbeafe] text-[#1447e6]";
