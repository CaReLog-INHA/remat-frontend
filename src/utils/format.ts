/** 탄소 감축량(kg)을 소수 2자리로 표시한다. 셋째 자리에서 반올림하며, 값이 없으면 "—". */
export const formatCarbonKg = (value: number | null | undefined): string =>
  value == null ? "—" : value.toFixed(2);
