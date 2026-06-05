import { api } from "./client";
import { http } from "./http";
import type { ApiResponse, MaterialCondition, Region, TransactionType } from "./types";

export interface MaterialListItem {
  id: number;
  materialName: string;
  price: number;
  quantity: number;
  unit: number;
  materialCondition: string;
  transactionType: string;
  imageUrl: string;
  categoryName: string;
  region: string;
  createdAt: string;
}

export interface MaterialDetail {
  id: number;
  materialName: string;
  description: string;
  price: number;
  quantity: number;
  unit: number;
  materialCondition: string;
  transactionType: string;
  imageUrl: string;
  categoryName: string;
  esgEffect: number;
  region: string;
  sellerName: string;
  companyName: string;
  starRating: number;
  createdAt: string;
}

export interface MyMaterialItem {
  id: number;
  materialName: string;
  description: string;
  price: number;
  quantity: number;
  unit: number;
  materialCondition: string;
  transactionType: string;
  imageUrl: string;
  categoryName: string;
  region: string;
  createdAt: string;
}

export interface MaterialCreateReq {
  materialName: string;
  description: string;
  price: number;
  quantity: number;
  unit: number;
  materialCondition: MaterialCondition;
  transactionType: TransactionType;
  imageKey: string;
  categoryName: string;
  region: Region;
}

export interface ImageUploadRes {
  imageKey: string;
}

export interface MaterialListFilters {
  categoryName?: string;
  materialCondition?: MaterialCondition;
  transactionType?: TransactionType;
  region?: Region;
}

export const materialsApi = {
  list: (filters?: MaterialListFilters): Promise<MaterialListItem[]> =>
    http.get<MaterialListItem[]>("/materials", { params: filters }),

  detail: (materialId: number): Promise<MaterialDetail> =>
    http.get<MaterialDetail>(`/materials/${materialId}`),

  myList: (): Promise<MyMaterialItem[]> =>
    http.get<MyMaterialItem[]>("/materials/me"),

  create: (req: MaterialCreateReq): Promise<void> =>
    http.post<void>("/materials", req),

  uploadImage: async (file: File): Promise<ImageUploadRes> => {
    const form = new FormData();
    form.append("image", file);
    const res = await api.post<ApiResponse<ImageUploadRes>>("/materials/image", form, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    return res.data.body;
  },
};
