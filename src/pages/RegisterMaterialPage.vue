<script setup lang="ts">
import { computed, ref } from "vue";
import { useRouter } from "vue-router";
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import { categoryGroups, findCategory } from "@/data/categories";
import { conditionOptions, transactionOptions } from "@/data/materialOptions";
import { regionOptions } from "@/data/regions";
import { materialsApi } from "@/api/materials";
import type { MaterialCondition, Region, TransactionType } from "@/api/types";

const router = useRouter();

// 폼 상태
const imageFile = ref<File | null>(null);
const imagePreview = ref<string>("");
const materialName = ref("");
const categoryName = ref("");
const materialCondition = ref<MaterialCondition | "">("");
const transactionType = ref<TransactionType | "">("");
const region = ref<Region | "">("");
const price = ref<number | null>(null);
const quantity = ref<number | null>(null);
const unit = ref<number | null>(1);
const description = ref("");

const errorMessage = ref("");
const isSubmitting = ref(false);

const onFileChange = (e: Event) => {
  const target = e.target as HTMLInputElement;
  const file = target.files?.[0];
  if (!file) return;
  if (file.size > 10 * 1024 * 1024) {
    errorMessage.value = "이미지는 최대 10MB까지 업로드할 수 있습니다.";
    return;
  }
  imageFile.value = file;
  imagePreview.value = URL.createObjectURL(file);
  errorMessage.value = "";
};

// 예상 탄소 절감 = 평균무게(kg) × esgEffect(g/kg) ÷ 1000 × 수량
const estimatedCarbon = computed(() => {
  const cat = categoryName.value ? findCategory(categoryName.value) : undefined;
  if (!cat || !quantity.value) return null;
  const perItemKg = (cat.avgWeightKg * cat.esgEffect) / 1000;
  return Math.round(perItemKg * quantity.value);
});

const validate = (): string | null => {
  if (!imageFile.value) return "자재 사진을 업로드해주세요.";
  if (!materialName.value.trim()) return "자재명을 입력해주세요.";
  if (!categoryName.value) return "카테고리를 선택해주세요.";
  if (!materialCondition.value) return "자재 상태를 선택해주세요.";
  if (!transactionType.value) return "거래 유형을 선택해주세요.";
  if (!region.value) return "지역을 선택해주세요.";
  if (price.value == null || price.value < 0) return "가격을 올바르게 입력해주세요.";
  if (quantity.value == null || quantity.value < 1) return "수량을 1 이상 입력해주세요.";
  if (description.value.trim().length < 10) return "상세 설명을 10자 이상 작성해주세요.";
  return null;
};

const handleSubmit = async () => {
  if (isSubmitting.value) return;
  const error = validate();
  if (error) {
    errorMessage.value = error;
    return;
  }
  errorMessage.value = "";
  isSubmitting.value = true;
  try {
    // 1단계: 이미지 업로드 → imageKey 발급
    const { imageKey } = await materialsApi.uploadImage(imageFile.value!);

    // 2단계: 발급받은 key로 자재 등록
    await materialsApi.create({
      materialName: materialName.value.trim(),
      description: description.value.trim(),
      price: price.value!,
      quantity: quantity.value!,
      unit: unit.value ?? 1,
      materialCondition: materialCondition.value as MaterialCondition,
      transactionType: transactionType.value as TransactionType,
      imageKey,
      categoryName: categoryName.value,
      region: region.value as Region,
    });

    router.push({ name: "my-page-registered-materials" });
  } catch (e) {
    errorMessage.value = (e as Error).message;
  } finally {
    isSubmitting.value = false;
  }
};

const inputClass =
  "h-11 w-full rounded-xl bg-[#f9fafb] px-4 text-sm outline-none ring-1 ring-transparent transition focus:bg-white focus:ring-[#8cc7c4]";
const selectClass =
  "h-11 w-full rounded-xl bg-[#f9fafb] px-4 text-sm text-[#364153] outline-none ring-1 ring-transparent transition focus:bg-white focus:ring-[#8cc7c4]";
</script>

<template>
  <DefaultLayout active-page="register-material">
    <section class="bg-[linear-gradient(90deg,#2c687b_0%,rgba(44,104,123,0.9)_100%)] py-12 text-white">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 class="text-4xl font-bold">자재 등록하기</h1>
        <p class="mt-3 text-lg text-white/80">사용이 끝난 자재를 등록하고 새로운 수요자와 연결해보세요.</p>
      </div>
    </section>

    <form class="mx-auto flex max-w-5xl flex-col gap-6 px-4 py-8 sm:px-6 lg:px-8" @submit.prevent="handleSubmit">
      <!-- 자재 사진 -->
      <section class="rounded-[18px] bg-white p-6 shadow-sm">
        <h2 class="flex items-center gap-2 text-xl font-bold text-[#101828]">
          <svg class="size-5 text-[#db1a1a]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 7h3l2-2h6l2 2h3v12H4zM12 17a4 4 0 1 0 0-8a4 4 0 0 0 0 8Z" stroke-linecap="round" stroke-linejoin="round" /></svg>
          자재 사진 *
        </h2>
        <div class="mt-4">
          <label class="flex min-h-[320px] cursor-pointer flex-col items-center justify-center overflow-hidden rounded-[16px] border-2 border-dashed border-[#d1d5dc] px-6 py-10 text-center transition hover:border-[#8cc7c4] hover:bg-[#fff6f6]/50">
            <input type="file" accept="image/png,image/jpeg" class="sr-only" @change="onFileChange" />
            <img v-if="imagePreview" :src="imagePreview" alt="미리보기" class="max-h-[280px] w-full rounded-[12px] object-contain" />
            <template v-else>
              <svg class="size-[80px] text-[#cbd5e1]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M4 7h3l2-2h6l2 2h3v12H4zM12 17a4 4 0 1 0 0-8a4 4 0 0 0 0 8Z" stroke-linecap="round" stroke-linejoin="round" /></svg>
              <p class="mt-6 text-sm font-medium"><span class="text-[#db1a1a]">클릭해서 업로드</span><span class="text-[#6a7282]"> 또는 드래그해서 올려두세요</span></p>
              <p class="mt-2 text-xs font-medium text-[#99a1af]">PNG, JPG, JPEG / 최대 10MB</p>
            </template>
          </label>
          <p v-if="imageFile" class="mt-2 text-xs text-[#6a7282]">선택된 파일: {{ imageFile.name }}</p>
        </div>
      </section>

      <!-- 기본 정보 -->
      <section class="rounded-[18px] bg-white p-6 shadow-sm">
        <h2 class="flex items-center gap-2 text-xl font-bold text-[#101828]">
          <svg class="size-5 text-[#db1a1a]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01" stroke-linecap="round" /></svg>
          기본 정보
        </h2>
        <div class="mt-4 grid gap-4">
          <div class="space-y-2">
            <label class="text-sm font-medium text-[#1a1a1a]">자재명 *</label>
            <input v-model="materialName" type="text" placeholder="예: 임시 부스용 천장 프레임" :class="inputClass" />
          </div>

          <div class="grid gap-4 sm:grid-cols-2">
            <div class="space-y-2">
              <label class="text-sm font-medium text-[#1a1a1a]">카테고리 *</label>
              <select v-model="categoryName" :class="selectClass">
                <option value="">카테고리 선택</option>
                <optgroup v-for="grp in categoryGroups" :key="grp.group" :label="grp.group">
                  <option v-for="cat in grp.items" :key="cat.key" :value="cat.value">{{ cat.value }}</option>
                </optgroup>
              </select>
            </div>
            <div class="space-y-2">
              <label class="text-sm font-medium text-[#1a1a1a]">상태 *</label>
              <select v-model="materialCondition" :class="selectClass">
                <option value="">상태 선택</option>
                <option v-for="opt in conditionOptions" :key="opt.value" :value="opt.value">{{ opt.label }}</option>
              </select>
            </div>
          </div>

          <div class="grid gap-4 sm:grid-cols-2">
            <div class="space-y-2">
              <label class="text-sm font-medium text-[#1a1a1a]">거래 유형 *</label>
              <select v-model="transactionType" :class="selectClass">
                <option value="">거래 유형 선택</option>
                <option v-for="opt in transactionOptions" :key="opt.value" :value="opt.value">{{ opt.label }}</option>
              </select>
            </div>
            <div class="space-y-2">
              <label class="text-sm font-medium text-[#1a1a1a]">지역 *</label>
              <select v-model="region" :class="selectClass">
                <option value="">지역 선택</option>
                <option v-for="opt in regionOptions" :key="opt.value" :value="opt.value">{{ opt.label }}</option>
              </select>
            </div>
          </div>

          <div class="grid gap-4 sm:grid-cols-3">
            <div class="space-y-2">
              <label class="text-sm font-medium text-[#1a1a1a]">가격(원) *</label>
              <input v-model.number="price" type="number" min="0" placeholder="450000" :class="inputClass" />
            </div>
            <div class="space-y-2">
              <label class="text-sm font-medium text-[#1a1a1a]">수량 *</label>
              <input v-model.number="quantity" type="number" min="1" placeholder="20" :class="inputClass" />
            </div>
            <div class="space-y-2">
              <label class="text-sm font-medium text-[#1a1a1a]">거래 단위</label>
              <input v-model.number="unit" type="number" min="1" placeholder="1" :class="inputClass" />
              <p class="text-xs text-[#99a1af]">한 번에 거래되는 최소 수량 (기본 1)</p>
            </div>
          </div>
        </div>
      </section>

      <!-- 상세 설명 -->
      <section class="rounded-[18px] bg-white p-6 shadow-sm">
        <h2 class="flex items-center gap-2 text-xl font-bold text-[#101828]">
          <svg class="size-5 text-[#db1a1a]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zM14 2v6h6M8 13h8M8 17h6" stroke-linecap="round" stroke-linejoin="round" /></svg>
          상세 설명 *
        </h2>
        <div class="mt-4 space-y-2">
          <textarea v-model="description" placeholder="자재 상태, 사용 이력, 보관 방식, 전달 가능한 일정 등을 자세히 작성해주세요." class="min-h-[140px] w-full resize-none rounded-xl bg-[#f9fafb] px-4 py-3 text-sm outline-none ring-1 ring-transparent transition focus:bg-white focus:ring-[#8cc7c4]" />
          <p class="text-xs text-[#99a1af]">최소 10자 이상 작성해주세요.</p>
        </div>
      </section>

      <!-- 예상 ESG 효과 -->
      <section class="rounded-[18px] border border-[#b9f8cf] bg-[linear-gradient(135deg,#dcfce7_0%,#e6fbff_100%)] p-6">
        <h2 class="flex items-center gap-2 text-base font-bold text-[#101828]">
          <svg class="size-5 text-[#008236]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 16c-6 2-12-1-16-8c6-2 12 1 16 8ZM4 8c0 7 5 11 12 11" stroke-linecap="round" stroke-linejoin="round" /></svg>
          예상 ESG 효과
        </h2>
        <p class="mt-4 text-sm text-[#1a1a1a]">등록한 자재가 재사용되면 다음과 같은 환경 효과를 기대할 수 있습니다.</p>
        <div class="mt-4 rounded-[12px] bg-white p-4">
          <p class="text-sm text-[#4a5565]">예상 탄소 절감</p>
          <p v-if="estimatedCarbon != null" class="mt-1 text-2xl font-bold text-[#008236]">~{{ estimatedCarbon.toLocaleString("ko-KR") }}kg CO2</p>
          <p v-else class="mt-1 text-sm text-[#99a1af]">카테고리와 수량을 입력하면 예상치가 계산됩니다.</p>
        </div>
      </section>

      <!-- 에러 -->
      <p v-if="errorMessage" class="rounded-md bg-[#fef2f2] px-3 py-2 text-sm text-[#dc2626]" role="alert">
        {{ errorMessage }}
      </p>

      <div class="grid gap-3 sm:grid-cols-2">
        <button type="button" :disabled="isSubmitting" class="h-11 rounded-xl border border-black/10 bg-[#fff6f6] text-sm font-medium text-[#1a1a1a] disabled:opacity-60" @click="router.push({ name: 'marketplace' })">취소</button>
        <button type="submit" :disabled="isSubmitting" class="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-[#db1a1a] text-sm font-medium text-white transition hover:bg-[#c01616] disabled:cursor-not-allowed disabled:opacity-60">
          <svg v-if="!isSubmitting" class="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 5v14M5 12h14" stroke-linecap="round" /></svg>
          {{ isSubmitting ? "등록 중..." : "자재 등록하기" }}
        </button>
      </div>
      <p class="text-center text-xs leading-5 text-[#6b7280]">* 표시된 항목은 필수 입력 정보입니다.</p>
    </form>
  </DefaultLayout>
</template>
