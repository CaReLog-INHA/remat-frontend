import type { MaterialCondition, TransactionType } from "@/api/types";

/** 자재 상태 enum → 한글 라벨 */
export const conditionOptions: ReadonlyArray<{ value: MaterialCondition; label: string }> = [
  { value: "BEST", label: "최상" },
  { value: "GOOD", label: "양호" },
  { value: "NORMAL", label: "보통" },
];

/** 거래 유형 enum → 한글 라벨 */
export const transactionOptions: ReadonlyArray<{ value: TransactionType; label: string }> = [
  { value: "SALE", label: "판매" },
  { value: "RENTAL", label: "대여" },
];

export const conditionLabel = (cond: string): string =>
  conditionOptions.find((c) => c.value === cond)?.label ?? cond;

export const transactionLabel = (type: string): string =>
  transactionOptions.find((t) => t.value === type)?.label ?? type;
