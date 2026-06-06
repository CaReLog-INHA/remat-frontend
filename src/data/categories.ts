// 자재 카테고리 마스터 (백엔드 material_category 테이블 기준)
// - key:         category_name (영문 키, 참고용)
// - value:       display_name (한글) — 목록 응답 categoryName 및 필터/등록 시 백엔드로 주고받는 값
// - avgWeightKg: 자재 1개 평균 무게(kg)
// - esgEffect:   자재 1kg당 CO2 (g CO2 eq/kg). 등록 폼의 예상 탄소 절감 계산에 사용
export interface CategoryOption {
  key: string;
  value: string;
  avgWeightKg: number;
  esgEffect: number;
}

export const categoryGroups: ReadonlyArray<{ group: string; items: CategoryOption[] }> = [
  {
    group: "금속/구조",
    items: [
      { key: "metal_frame", value: "철재/금속", avgWeightKg: 15, esgEffect: 2859 },
      { key: "light_steel", value: "경량철골", avgWeightKg: 8, esgEffect: 2340 },
      { key: "aluminum", value: "알루미늄", avgWeightKg: 5, esgEffect: 1906 },
      { key: "scaffolding", value: "비계/지지대", avgWeightKg: 12, esgEffect: 2340 },
    ],
  },
  {
    group: "목재/보드",
    items: [
      { key: "lumber", value: "목재", avgWeightKg: 10, esgEffect: 276 },
      { key: "mdf_board", value: "MDF/파티클보드", avgWeightKg: 18, esgEffect: 276 },
      { key: "pallet", value: "팔레트", avgWeightKg: 20, esgEffect: 874 },
      { key: "flooring", value: "마루/바닥재", avgWeightKg: 8, esgEffect: 808 },
    ],
  },
  {
    group: "공간/구조물",
    items: [
      { key: "partition", value: "파티션/칸막이", avgWeightKg: 15, esgEffect: 1150 },
      { key: "exhibition_booth", value: "전시 부스", avgWeightKg: 50, esgEffect: 1150 },
      { key: "false_wall", value: "가벽/무대벽", avgWeightKg: 25, esgEffect: 918 },
    ],
  },
  {
    group: "가구",
    items: [
      { key: "chair", value: "의자", avgWeightKg: 5, esgEffect: 1363 },
      { key: "table", value: "테이블", avgWeightKg: 20, esgEffect: 1308 },
      { key: "shelving_rack", value: "선반/랙", avgWeightKg: 25, esgEffect: 1308 },
      { key: "counter_desk", value: "카운터/데스크", avgWeightKg: 30, esgEffect: 1308 },
      { key: "showcase", value: "쇼케이스/진열대", avgWeightKg: 40, esgEffect: 1321 },
    ],
  },
  {
    group: "조명/전기",
    items: [
      { key: "led_lighting", value: "LED 조명", avgWeightKg: 0.5, esgEffect: 11789 },
      { key: "lighting_truss", value: "조명 구조물", avgWeightKg: 10, esgEffect: 1587 },
      { key: "electrical", value: "전기/배선자재", avgWeightKg: 2, esgEffect: 3845 },
    ],
  },
  {
    group: "사인/그래픽",
    items: [
      { key: "banner", value: "현수막/배너", avgWeightKg: 1, esgEffect: 1855 },
      { key: "signboard", value: "사인보드/간판", avgWeightKg: 5, esgEffect: 1060 },
      { key: "printed_material", value: "포스터/출력물", avgWeightKg: 0.3, esgEffect: 1285 },
    ],
  },
  {
    group: "포장/물류",
    items: [
      { key: "cardboard_box", value: "박스/종이", avgWeightKg: 0.5, esgEffect: 610 },
      { key: "cushioning", value: "완충재/스티로폼", avgWeightKg: 0.3, esgEffect: 2057 },
      { key: "stretch_film", value: "포장용 필름", avgWeightKg: 0.5, esgEffect: 2269 },
    ],
  },
  {
    group: "장비",
    items: [
      { key: "av_equipment", value: "AV/음향장비", avgWeightKg: 8, esgEffect: 10593 },
      { key: "transport_equipment", value: "운반/이동장비", avgWeightKg: 15, esgEffect: 1906 },
    ],
  },
  {
    group: "기타",
    items: [{ key: "other", value: "기타", avgWeightKg: 5, esgEffect: 2236 }],
  },
];

// 그룹 구분 없이 전체를 순회할 때 사용하는 평탄화 목록
export const categoryOptions: ReadonlyArray<CategoryOption> = categoryGroups.flatMap(
  (g) => g.items,
);

/** display_name(한글)으로 카테고리 메타 조회 */
export const findCategory = (displayName: string): CategoryOption | undefined =>
  categoryOptions.find((c) => c.value === displayName);
