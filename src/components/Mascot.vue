<template>
  <div :class="containerClass" :data-name="dataName">
    <svg class="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 100 100">
      <g id="Mascot">
        <path :d="paths.p2008fc00" fill="url(#paint0_linear)" stroke="#808080" stroke-width="0.909091" />
        <path :d="paths.p42fda00" fill="url(#paint1_radial)" />
        <path :d="paths.p27e5f580" fill="url(#paint2_linear)" stroke="#808080" stroke-width="0.681818" />
        <path :d="paths.p1350a700" fill="url(#paint3_linear)" stroke="#808080" stroke-width="0.681818" />
        <path :d="paths.p2eeecd00" fill="url(#paint4_linear)" stroke="#808080" stroke-width="0.681818" />
        <path :d="paths.p35022500" fill="url(#paint5_linear)" stroke="#808080" stroke-width="0.681818" />
        <path :d="paths.p2a56f800" fill="#DB1A1A" opacity="0.8" />
        <path :d="paths.p2698100" fill="#2C687B" />
        <path :d="paths.p4c3c400" fill="#2C687B" />
        <path :d="paths.p3b58cc00" fill="white" />
        <path :d="paths.p12131ef0" fill="white" />
        <path :d="paths.p23e4d180" stroke="#2C687B" stroke-linecap="round" stroke-width="1.36364" />
        <path :d="paths.p107aa340" fill="url(#paint6_radial)" />
        <path :d="paths.p337f3870" fill="url(#paint7_radial)" />
        <path :d="paths.p4b1e900" fill="#606060" />
        <path :d="paths.p1644fa00" fill="#606060" />
        <path :d="paths.p2b494480" fill="#606060" />
        <path :d="paths.p560e600" fill="#606060" />
      </g>
      <defs>
        <linearGradient id="paint0_linear" x1="27.2727" x2="77.0465" y1="25" y2="70.2489" gradientUnits="userSpaceOnUse">
          <stop stop-color="#C0C0C0" /><stop offset="0.5" stop-color="#E8E8E8" /><stop offset="1" stop-color="#A0A0A0" />
        </linearGradient>
        <radialGradient id="paint1_radial" cx="37.7273" cy="30" r="1" gradientUnits="userSpaceOnUse" gradientTransform="scale(13.6364 15.9091)">
          <stop stop-color="white" stop-opacity="0.6" /><stop offset="1" stop-color="white" stop-opacity="0" />
        </radialGradient>
        <linearGradient id="paint2_linear" x1="15.9091" x2="21.3636" y1="40.9091" y2="51.8182" gradientUnits="userSpaceOnUse">
          <stop stop-color="#C0C0C0" /><stop offset="0.5" stop-color="#E8E8E8" /><stop offset="1" stop-color="#A0A0A0" />
        </linearGradient>
        <linearGradient id="paint3_linear" x1="70.4545" x2="75.9091" y1="40.9091" y2="51.8182" gradientUnits="userSpaceOnUse">
          <stop stop-color="#C0C0C0" /><stop offset="0.5" stop-color="#E8E8E8" /><stop offset="1" stop-color="#A0A0A0" />
        </linearGradient>
        <linearGradient id="paint4_linear" x1="36.3636" x2="47.4501" y1="72.7273" y2="81.5965" gradientUnits="userSpaceOnUse">
          <stop stop-color="#C0C0C0" /><stop offset="0.5" stop-color="#E8E8E8" /><stop offset="1" stop-color="#A0A0A0" />
        </linearGradient>
        <linearGradient id="paint5_linear" x1="54.5455" x2="65.6319" y1="72.7273" y2="81.5965" gradientUnits="userSpaceOnUse">
          <stop stop-color="#C0C0C0" /><stop offset="0.5" stop-color="#E8E8E8" /><stop offset="1" stop-color="#A0A0A0" />
        </linearGradient>
        <radialGradient id="paint6_radial" cx="31.8182" cy="47.7273" r="1" gradientUnits="userSpaceOnUse" gradientTransform="scale(4.54545)">
          <stop stop-color="#DB1A1A" stop-opacity="0.6" /><stop offset="1" stop-color="#DB1A1A" stop-opacity="0.2" />
        </radialGradient>
        <radialGradient id="paint7_radial" cx="68.1818" cy="47.7273" r="1" gradientUnits="userSpaceOnUse" gradientTransform="scale(4.54545)">
          <stop stop-color="#DB1A1A" stop-opacity="0.6" /><stop offset="1" stop-color="#DB1A1A" stop-opacity="0.2" />
        </radialGradient>
      </defs>
    </svg>
  </div>
</template>

<script setup>
defineProps({
  paths: { type: Object, required: true },
  containerClass: { type: String, default: "relative shrink-0 size-[100px]" },
  dataName: { type: String, default: "Mascot" }
});
</script>