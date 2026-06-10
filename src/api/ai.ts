import { api } from "./client";
import type { ApiResponse } from "./types";

export interface MatchedMaterial {
  materialId: number;
  materialName: string;
  description: string;
  price: number;
  quantity: number;
  imageUrl: string;
  categoryName: string;
  carbonReductionKg: number;
  transactionType: string;
  sellerName: string;
}

export interface UnmatchedMaterial {
  name: string;
  description: string;
}

export interface AnalysisResult {
  analysisId: number;
  matchedCount: number;
  totalCarbonReductionKg: number;
  matchedMaterials: MatchedMaterial[];
  requiredMaterials: UnmatchedMaterial[];
}

export const aiApi = {
  analyze: async (file: File): Promise<AnalysisResult> => {
    const form = new FormData();
    form.append("file", file);
    const res = await api.post<ApiResponse<AnalysisResult>>("/ai/analyze", form, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    return res.data.body;
  },
};
