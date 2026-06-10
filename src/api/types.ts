export interface ResponseStatus {
  statusCode: string;
  message: string;
  description?: string;
}

export interface ApiResponse<T> {
  status: ResponseStatus;
  body: T;
}

export type Region =
  | "SEOUL" | "INCHEON" | "GYEONGGI"
  | "BUSAN" | "DAEGU" | "GWANGJU" | "DAEJEON" | "ULSAN" | "SEJONG"
  | "GANGWON" | "CHUNGBUK" | "CHUNGNAM"
  | "JEONBUK" | "JEONNAM" | "GYEONGBUK" | "GYEONGNAM" | "JEJU";

export type MaterialCondition = "BEST" | "GOOD" | "NORMAL";

export type TransactionType = "SALE" | "RENTAL";

export type TradeRequestStatus = "PENDING" | "ACCEPTED" | "REJECTED";
