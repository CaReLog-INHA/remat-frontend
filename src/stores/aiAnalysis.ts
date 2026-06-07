import { defineStore } from "pinia";
import { ref } from "vue";
import { aiApi, type AnalysisResult } from "@/api/ai";

export const useAiAnalysisStore = defineStore("aiAnalysis", () => {
  const result = ref<AnalysisResult | null>(null);
  const fileName = ref<string>("");

  const analyze = async (file: File): Promise<AnalysisResult> => {
    const res = await aiApi.analyze(file);
    result.value = res;
    fileName.value = file.name;
    return res;
  };

  const clear = (): void => {
    result.value = null;
    fileName.value = "";
  };

  return { result, fileName, analyze, clear };
});
