<script setup>
import { ref, computed } from 'vue';

defineProps({
  product: {
    type: Object,
    default: () => ({
      image: '',
      category: '가구',
      condition: '최상',
      title: '행사용 접이식 의자',
      desc: '컨퍼런스에서 2회 사용한 접이식 의자입니다. 가벼운 플라스틱 소재로 이동과 보관이 편리합니다. 청소 완료 상태로 즉시 사용 가능합니다.',
      location: '서울 마포구',
      price: '25,000원',
      stock: '150개',
      carbon: '45kg',
    }),
  },
});

const quantity = ref(1);
const startDate = ref('');
const endDate = ref('');
const message = ref('');

const emit = defineEmits(['change-page']);

const goBack = () => {
  emit('change-page', 'marketplace');
};

const incrementQuantity = () => {
  const maxStock = parseInt(product.stock);
  if (quantity.value < maxStock) {
    quantity.value++;
  }
};

const decrementQuantity = () => {
  if (quantity.value > 1) {
    quantity.value--;
  }
};

// 예상 금액 계산 (개당 가격 기준)
const estimatedPrice = computed(() => {
  if (!startDate.value || !endDate.value) return quantity.value * parseInt(product.price) + '원';
  const start = new Date(startDate.value);
  const end = new Date(endDate.value);
  const days = Math.ceil((end - start) / (1000 * 60 * 60 * 24)) + 1;
  const pricePerDay = parseInt(product.price);
  const total = pricePerDay * quantity.value * days;
  return total.toLocaleString() + '원';
});

// 예상 탄소 절감 계산
const estimatedCarbon = computed(() => {
  if (!startDate.value || !endDate.value) return parseFloat(product.carbon) + ' CO₂';
  const start = new Date(startDate.value);
  const end = new Date(endDate.value);
  const days = Math.ceil((end - start) / (1000 * 60 * 60 * 24)) + 1;
  const carbonPerDay = parseFloat(product.carbon);
  const total = (carbonPerDay * quantity.value * days) / parseInt(product.stock);
  return total.toFixed(1) + 'kg CO₂';
});

// Asset URLs from Figma
const assets = {
  backIcon: "http://localhost:3845/assets/9a8770fdd4ae98648115cd4a5c0c533f14872709.svg",
  rentalIcon: "http://localhost:3845/assets/a862f0de877982fffd757e4c02ac023f612b6404.svg",
  stockIcon: "http://localhost:3845/assets/8593532100f3b1f01a8efb2d756cbe28c2a850bd.svg",
  locationIcon: "http://localhost:3845/assets/1cd92021868e60835bf116e16ae3c1aa1e7a704f.svg",
  dateIcon: "http://localhost:3845/assets/18400ebc5057768320e125189286cfe457d6d02b.svg",
  carbonIcon: "http://localhost:3845/assets/87e6362742563bb1e015b3092dee26fca2ee9dc2.svg",
  sellerIcon: "http://localhost:3845/assets/49c09e3aae36bed2ecf90c7e0457270a991a4e86.svg",
  ratingIcon: "http://localhost:3845/assets/590f9da7c9dfa6277a675a178355dd8236066277.svg",
  requestIcon: "http://localhost:3845/assets/582e6d3125a42ba204b04bd110c99abcd68b0334.svg",
  submitIcon: "http://localhost:3845/assets/ff05635ca4af0aaf919795bc2deafd71e21db911.svg",
};
</script>

<template>
  <div class="bg-[#fff6f6] flex flex-col min-h-screen">
    <!-- Header -->
    <div class="bg-white border-b border-[#e5e7eb] sticky top-0 z-10">
      <div class="max-w-[1443px] mx-auto px-[81.5px] py-[16px]">
        <div class="flex items-center justify-between">
          <button
            @click="goBack"
            class="flex items-center gap-[8px] h-[24px] text-[#4a5565] hover:opacity-70 transition"
          >
            <img :src="assets.backIcon" alt="뒤로가기" class="w-[20px] h-[20px]" />
            <span class="font-medium text-[16px] tracking-[-0.3125px]">뒤로 가기</span>
          </button>
          
          <!-- Product Info Badge -->
          <div class="flex gap-[8px]">
            <div class="bg-[rgba(140,199,196,0.2)] text-[#2c687b] px-[12px] py-[6px] rounded-[10px] font-medium text-[12px]">
              {{ product.category }}
            </div>
            <div class="bg-[#f0fdf4] text-[#008236] px-[12px] py-[6px] rounded-[10px] font-medium text-[12px]">
              {{ product.condition }}
            </div>
            <div class="bg-[#f3e8ff] text-[#8200db] px-[12px] py-[6px] rounded-[10px] font-medium text-[12px] flex items-center gap-[6px]">
              <img :src="assets.rentalIcon" alt="대여" class="w-[14px] h-[14px]" />
              대여
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Main Content -->
    <div class="flex-1 max-w-[1443px] mx-auto w-full px-[113.5px] py-[24px]">
      <div class="flex gap-[24px]">
        <!-- Left Column - Product Info -->
        <div class="flex-1 max-w-[800px]">
          <!-- Product Image -->
          <div class="bg-white rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] overflow-hidden mb-[24px]">
            <div class="bg-[#f3f4f6] w-full h-[500px]">
              <img
                :src="product.image"
                alt="상품 이미지"
                class="w-full h-full object-cover"
              />
            </div>
          </div>

          <!-- Product Details -->
          <div class="bg-white rounded-[14px] shadow-[0px_1px_1.5px_rgba(0,0,0,0.1),0px_1px_1px_rgba(0,0,0,0.1)] p-[24px]">
            <!-- Tags -->
            <div class="flex gap-[8px] mb-[24px]">
              <div class="bg-[rgba(140,199,196,0.2)] text-[#2c687b] px-[12px] py-[6px] rounded-[10px] font-medium text-[14px] whitespace-nowrap">
                {{ product.category }}
              </div>
              <div class="bg-[#f0fdf4] text-[#008236] px-[12px] py-[6px] rounded-[10px] font-medium text-[14px] whitespace-nowrap">
                {{ product.condition }}
              </div>
              <div class="bg-[#f3e8ff] text-[#8200db] px-[12px] py-[6px] rounded-[10px] font-medium text-[14px] flex items-center gap-[8px]">
                <img :src="assets.rentalIcon" alt="대여" class="w-[16px] h-[16px]" />
                대여
              </div>
            </div>

            <!-- Title -->
            <h1 class="text-[30px] font-bold text-[#101828] mb-[16px] tracking-[0.3955px]">
              {{ product.title }}
            </h1>

            <!-- Price -->
            <div class="flex items-baseline gap-[8px] mb-[24px]">
              <span class="text-[36px] font-bold text-[#db1a1a] tracking-[0.3691px]">{{ product.price }}</span>
              <span class="text-[18px] text-[#4a5565] tracking-[-0.4395px]">/ 개 / 일</span>
            </div>

            <!-- Info Box -->
            <div class="bg-[#f9fafb] rounded-[10px] p-[16px] mb-[24px]">
              <div class="grid grid-cols-2 gap-[16px]">
                <!-- Stock -->
                <div class="flex items-start gap-[8px]">
                  <img :src="assets.stockIcon" alt="재고" class="w-[20px] h-[20px] flex-shrink-0" />
                  <div>
                    <p class="text-[12px] text-[#6a7282] leading-[16px]">재고</p>
                    <p class="text-[16px] font-medium text-[#1a1a1a] tracking-[-0.3125px]">{{ product.stock }}</p>
                  </div>
                </div>

                <!-- Location -->
                <div class="flex items-start gap-[8px]">
                  <img :src="assets.locationIcon" alt="위치" class="w-[20px] h-[20px] flex-shrink-0" />
                  <div>
                    <p class="text-[12px] text-[#6a7282] leading-[16px]">위치</p>
                    <p class="text-[16px] font-medium text-[#1a1a1a] tracking-[-0.3125px]">{{ product.location }}</p>
                  </div>
                </div>

                <!-- Date -->
                <div class="flex items-start gap-[8px]">
                  <img :src="assets.dateIcon" alt="등록일" class="w-[20px] h-[20px] flex-shrink-0" />
                  <div>
                    <p class="text-[12px] text-[#6a7282] leading-[16px]">등록일</p>
                    <p class="text-[16px] font-medium text-[#1a1a1a] tracking-[-0.3125px]">2026-04-04</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Divider -->
            <div class="border-t border-[#e5e7eb] my-[24px]"></div>

            <!-- Description -->
            <div>
              <h2 class="text-[20px] font-bold text-[#101828] mb-[12px] tracking-[-0.4492px]">상세 설명</h2>
              <p class="text-[16px] text-[#364153] leading-[26px] tracking-[-0.3125px]">
                {{ product.desc }}
              </p>
            </div>

            <!-- Divider -->
            <div class="border-t border-[#e5e7eb] my-[24px]"></div>

            <!-- ESG Effect -->
            <div>
              <h2 class="text-[20px] font-bold text-[#101828] mb-[16px] tracking-[-0.4492px]">ESG 효과</h2>
              <div class="bg-[#f0fdf4] border border-[#b9f8cf] rounded-[10px] p-[17px]">
                <div class="flex items-start gap-[12px] mb-[16px]">
                  <div class="bg-[#dcfce7] rounded-[10px] p-[10px] flex-shrink-0">
                    <img :src="assets.carbonIcon" alt="탄소" class="w-[20px] h-[20px]" />
                  </div>
                  <div>
                    <p class="text-[14px] text-[#4a5565] tracking-[-0.1504px]">탄소 절감량</p>
                    <p class="text-[24px] font-bold text-[#008236] tracking-[0.0703px]">{{ product.carbon }} CO₂</p>
                  </div>
                </div>
                <p class="text-[12px] text-[#4a5565]">신규 자재 대비 탄소 배출 감소</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Right Column - Seller & Transaction -->
        <div class="w-[384px]">
          <!-- Seller Info -->
          <div class="bg-white rounded-[14px] shadow-[0px_1px_1.5px_rgba(0,0,0,0.1),0px_1px_1px_rgba(0,0,0,0.1)] p-[24px] mb-[24px]">
            <h3 class="text-[18px] font-bold text-[#101828] mb-[16px] tracking-[-0.4395px]">판매자 정보</h3>
            <div class="flex items-center gap-[12px]">
              <!-- Avatar -->
              <div class="w-[48px] h-[48px] rounded-full bg-[rgba(140,199,196,0.2)] flex items-center justify-center flex-shrink-0">
                <span class="text-[16px] font-bold text-[#2c687b]">이</span>
              </div>
              <!-- Seller Details -->
              <div>
                <p class="text-[16px] font-bold text-[#101828] tracking-[-0.3125px]">이벤트플러스</p>
                <div class="flex items-center gap-[4px]">
                  <img :src="assets.ratingIcon" alt="평점" class="w-[16px] h-[16px]" />
                  <span class="text-[14px] font-medium text-[#4a5565] tracking-[-0.1504px]">4.9</span>
                  <span class="text-[14px] text-[#99a1af]">(128)</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Transaction Request -->
          <div class="bg-white rounded-[14px] shadow-[0px_1px_1.5px_rgba(0,0,0,0.1),0px_1px_1px_rgba(0,0,0,0.1)] p-[24px] mb-[24px]">
            <div class="flex items-center gap-[8px] mb-[24px]">
              <img :src="assets.requestIcon" alt="거래" class="w-[20px] h-[20px]" />
              <h3 class="text-[18px] font-bold text-[#101828] tracking-[-0.4395px]">거래 요청</h3>
            </div>

            <!-- Quantity Selection -->
            <div class="mb-[24px]">
              <label class="block text-[14px] font-medium text-[#364153] mb-[8px] tracking-[-0.1504px]">
                수량 선택
              </label>
              <div class="flex items-center gap-[12px] mb-[8px]">
                <button
                  @click="decrementQuantity"
                  :disabled="quantity <= 1"
                  class="w-[32px] h-[32px] rounded-[8px] border border-[rgba(0,0,0,0.1)] bg-[#fff6f6] text-[#1a1a1a] font-medium text-[14px] disabled:opacity-50 hover:opacity-70 transition"
                >
                  -
                </button>
                <input
                  v-model.number="quantity"
                  type="number"
                  class="flex-1 h-[42px] px-[12px] py-[8px] border border-[#d1d5dc] rounded-[10px] text-[16px] font-medium text-center text-[#1a1a1a] tracking-[-0.3125px]"
                  :min="1"
                  :max="parseInt(product.stock)"
                />
                <button
                  @click="incrementQuantity"
                  :disabled="quantity >= parseInt(product.stock)"
                  class="w-[34px] h-[32px] rounded-[8px] border border-[rgba(0,0,0,0.1)] bg-[#fff6f6] text-[#1a1a1a] font-medium text-[14px] disabled:opacity-50 hover:opacity-70 transition"
                >
                  +
                </button>
              </div>
              <p class="text-[12px] text-[#6a7282]">최대 {{ product.stock }} 대여 가능</p>
            </div>

            <!-- Rental Period -->
            <div class="mb-[24px]">
              <label class="block text-[14px] font-medium text-[#364153] mb-[8px] tracking-[-0.1504px]">
                대여 기간 <span class="text-[#db1a1a]">*</span>
              </label>
              <div class="grid grid-cols-2 gap-[12px]">
                <div>
                  <p class="text-[12px] text-[#4a5565] mb-[4px] tracking-[-0.1504px]">시작일</p>
                  <input
                    v-model="startDate"
                    type="date"
                    class="w-full h-[36px] px-[12px] py-[8px] border border-[rgba(0,0,0,0)] rounded-[8px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] text-[14px]"
                  />
                </div>
                <div>
                  <p class="text-[12px] text-[#4a5565] mb-[4px] tracking-[-0.1504px]">종료일</p>
                  <input
                    v-model="endDate"
                    type="date"
                    class="w-full h-[36px] px-[12px] py-[8px] border border-[rgba(0,0,0,0)] rounded-[8px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] text-[14px]"
                  />
                </div>
              </div>
            </div>

            <!-- Estimate Box -->
            <div class="bg-[#f9fafb] rounded-[10px] p-[16px] mb-[24px]">
              <div class="flex items-center justify-between mb-[16px]">
                <p class="text-[14px] text-[#4a5565]">예상 금액</p>
                <p class="text-[24px] font-bold text-[#db1a1a] tracking-[0.0703px]">{{ estimatedPrice }}</p>
              </div>
              <div class="flex items-center justify-between">
                <p class="text-[14px] text-[#4a5565]">예상 탄소 절감</p>
                <p class="text-[14px] font-medium text-[#00a63e]">{{ estimatedCarbon }}</p>
              </div>
            </div>

            <!-- Message Input -->
            <div class="mb-[24px]">
              <label class="block text-[14px] font-medium text-[#364153] mb-[8px] tracking-[-0.1504px]">
                요청 메시지 <span class="text-[#db1a1a]">*</span>
              </label>
              <textarea
                v-model="message"
                placeholder="판매자에게 전달할 메시지를 입력해주세요&#10;(예: 대여 조건, 배송 가능 여부, 추가 문의 사항 등)"
                class="w-full h-[112px] px-[12px] py-[8px] border border-[rgba(0,0,0,0)] rounded-[8px] text-[14px] text-[#6b7280] resize-none focus:outline-none focus:ring-1 focus:ring-[#8cc7c4]"
              ></textarea>
              <p class="mt-[8px] text-[12px] text-[#6a7282]">
                구체적인 요청 사항을 작성하면 빠른 답변을 받을 수 있습니다
              </p>
            </div>

            <!-- Submit Button -->
            <button
              class="w-full py-[14px] bg-gradient-to-r from-[#db1a1a] to-[rgba(219,26,26,0.8)] text-white font-medium text-[14px] rounded-[8px] hover:opacity-90 transition shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.1)] flex items-center justify-center gap-[8px] mb-[12px]"
            >
              <img :src="assets.submitIcon" alt="대여 요청" class="w-[16px] h-[16px]" />
              대여 요청하기
            </button>
            <p class="text-[12px] text-[#6a7282] text-center">
              판매자 확인 후 상세 거래를 진행하실 수 있습니다
            </p>
          </div>

          <!-- Safety Notice -->
          <div class="bg-[rgba(140,199,196,0.1)] border border-[rgba(140,199,196,0.3)] rounded-[14px] p-[17px]">
            <h4 class="text-[14px] font-bold text-[#2c687b] mb-[12px]">안전 거래 안내</h4>
            <ul class="space-y-[6px] text-[12px] text-[#4a5565]">
              <li class="flex items-start gap-[8px]">
                <span class="text-[#8cc7c4] flex-shrink-0">✓</span>
                <span>안전하고 투명한 거래 보장</span>
              </li>
              <li class="flex items-start gap-[8px]">
                <span class="text-[#8cc7c4] flex-shrink-0">✓</span>
                <span>에스크로 결제 시스템 제공</span>
              </li>
              <li class="flex items-start gap-[8px]">
                <span class="text-[#8cc7c4] flex-shrink-0">✓</span>
                <span>자재 상태 보증 및 분쟁 해결</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Noto Sans KR 폰트 설정 */
:deep(*) {
  font-family: 'Inter', 'Noto Sans KR', sans-serif;
}
</style>
