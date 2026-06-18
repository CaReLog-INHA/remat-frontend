import { http } from "./http";

export interface Profile {
  memberId: number;
  name: string;
  email: string;
  phoneNumber: string;
  companyName: string;
  region: string;
  /** 리뷰가 없으면 null. */
  starRating: number | null;
}

export interface Badge {
  memberBadgeId: number;
  badgeId: number;
  badgeName: string;
  description: string;
  iconUrl: string;
  isEarned: boolean;
  progressRate: number;
  earnedAt: string;
}

export interface BadgeSection {
  earnedBadges: Badge[];
  inProgressBadges: Badge[];
}

export interface ESGContribution {
  totalCarbonKg: number | null;
  totalTradeCount: number | null;
  resourceReuseRate: number | null;
  treeCount: number | null;
}

export interface ESGMonthly {
  year: number;
  month: number;
  carbonKg: number;
}

export interface ESGReportDetail {
  tradeId: number;
  tradeDate: string;
  materialName: string;
  quantity: number;
  carbonKg: number;
}

export interface ESGReport {
  reportId: number;
  companyName: string;
  periodStart: string;
  periodEnd: string;
  generatedAt: string;
  summary: ESGContribution;
  monthlyReports: ESGMonthly[];
  reportDetails: ESGReportDetail[];
}

export interface TradeActivity {
  tradeId: number;
  materialId: number;
  materialName: string;
  imageUrl: string;
  partnerName: string;
  quantity: number;
  finalPrice: number;
  createdAt: string;
}

export interface ReviewActivity {
  reviewId: number;
  tradeId: number;
  partnerName: string;
  starRating: number;
  description: string;
  createdAt: string;
}

export interface BadgeActivity {
  memberBadgeId: number;
  badgeId: number;
  badgeName: string;
  iconUrl: string;
  earnedAt: string;
}

export interface RecentActivities {
  completedPurchases: TradeActivity[];
  completedSales: TradeActivity[];
  receivedReviews: ReviewActivity[];
  writtenReviews: ReviewActivity[];
  earnedBadgeHistories: BadgeActivity[];
}

export interface SellingMaterial {
  id: number;
  imageUrl: string;
  materialName: string;
  isSelling: boolean;
  description: string;
  price: number;
}

export interface MyPageOverview {
  profile: Profile;
  esgContribution: ESGContribution;
  badges: BadgeSection;
  sellingMaterials: SellingMaterial[];
  recentActivities: RecentActivities;
}

export const myPageApi = {
  overview: (): Promise<MyPageOverview> => http.get<MyPageOverview>("/mypage"),
  profile: (): Promise<Profile> => http.get<Profile>("/mypage/profile"),
  badges: (): Promise<BadgeSection> => http.get<BadgeSection>("/mypage/badges"),
  esg: (): Promise<ESGContribution> => http.get<ESGContribution>("/mypage/esg"),
  esgReport: (): Promise<ESGReport> => http.get<ESGReport>("/mypage/esg-report"),
  regenerateEsgReport: (payload: { periodStart: string; periodEnd: string }): Promise<void> =>
    http.post<void>("/esg-reports", payload),
  activities: (): Promise<RecentActivities> => http.get<RecentActivities>("/mypage/activities"),
  sellingMaterials: (): Promise<SellingMaterial[]> => http.get<SellingMaterial[]>("/mypage/materials"),
};
