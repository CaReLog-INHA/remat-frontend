import { onMounted, ref } from "vue";
import { materialsApi, type CategoryItem } from "@/api/materials";

/**
 * 자재 카테고리 목록(/materials/categories)을 onMounted 시점에 불러온다.
 * 등록 폼·마켓 필터의 카테고리 드롭다운에서 공통으로 사용.
 */
export const useCategories = () => {
  const categories = ref<CategoryItem[]>([]);
  const isLoading = ref(true);
  const errorMessage = ref("");

  onMounted(async () => {
    try {
      categories.value = await materialsApi.categories();
    } catch (e) {
      errorMessage.value = (e as Error).message;
    } finally {
      isLoading.value = false;
    }
  });

  return { categories, isLoading, errorMessage };
};
