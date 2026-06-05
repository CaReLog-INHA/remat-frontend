import { http } from "./http";

export interface TradeRequestReq {
  materialId: number;
  quantity: number;
  requestMessage: string;
  rentalStart?: string;
  rentalEnd?: string;
}

interface TradeRequestBase {
  tradeRequestId: number;
  requestStatus: string;
  materialId: number;
  materialName: string;
  materialPrice: number;
  requestedQuantity: number;
  unit: number;
  transactionType: string;
  imageUrl: string;
  categoryName: string;
  region: string;
  requestMessage: string;
  rentalStart: string;
  rentalEnd: string;
  createdAt: string;
}

export interface ReceivedRequest extends TradeRequestBase {
  requesterId: number;
  requesterName: string;
  requesterCompanyName: string;
  requesterStarRating: number;
}

export interface SentRequest extends TradeRequestBase {
  sellerId: number;
  sellerName: string;
  sellerCompanyName: string;
  sellerStarRating: number;
}

interface TradeHistoryBase {
  tradeId: number;
  tradeRequestId: number;
  materialId: number;
  materialName: string;
  finalPrice: number;
  requestedQuantity: number;
  unit: number;
  transactionType: string;
  imageUrl: string;
  categoryName: string;
  region: string;
  rentalStart: string;
  rentalEnd: string;
  createdAt: string;
}

export interface PurchasedTrade extends TradeHistoryBase {
  sellerId: number;
  sellerName: string;
  sellerCompanyName: string;
  sellerStarRating: number;
}

export interface SoldTrade extends TradeHistoryBase {
  buyerId: number;
  buyerName: string;
  buyerCompanyName: string;
  buyerStarRating: number;
}

export interface ApproveReq {
  finalPrice: number;
}

export interface ReviewCreateReq {
  starRating: number;
  description: string;
}

export const tradesApi = {
  request: (req: TradeRequestReq): Promise<void> => http.post<void>("/trades", req),

  receivedRequests: (): Promise<ReceivedRequest[]> =>
    http.get<ReceivedRequest[]>("/trades/requests/received"),
  sentRequests: (): Promise<SentRequest[]> =>
    http.get<SentRequest[]>("/trades/requests/sent"),

  approve: (tradeRequestId: number, req: ApproveReq): Promise<void> =>
    http.patch<void>(`/trades/requests/${tradeRequestId}/approve`, req),

  purchaseHistory: (): Promise<PurchasedTrade[]> =>
    http.get<PurchasedTrade[]>("/trades/history/purchased"),
  saleHistory: (): Promise<SoldTrade[]> =>
    http.get<SoldTrade[]>("/trades/history/sold"),

  createReview: (tradeId: number, req: ReviewCreateReq): Promise<void> =>
    http.post<void>(`/trades/${tradeId}/reviews`, req),
};
