<template>
  <div class="page-wrapper">

    <!-- ✅ 상단 네비게이션 -->
    <header class="navbar">
      <div class="navbar-inner">

        <!-- 로고 -->
        <div class="logo-link">
          <div class="logo-icon">
            <div class="logo-icon-inner">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M11 21.7299C11.304 21.9054 11.6489 21.9979 12 21.9979C12.3511 21.9979 12.696 21.9054 13 21.7299L20 17.7299C20.3037 17.5545 20.556 17.3024 20.7315 16.9987C20.9071 16.6951 20.9996 16.3506 21 15.9999V7.9999C20.9996 7.64918 20.9071 7.30471 20.7315 7.00106C20.556 6.69742 20.3037 6.44526 20 6.2699L13 2.2699C12.696 2.09437 12.3511 2.00195 12 2.00195C11.6489 2.00195 11.304 2.09437 11 2.2699L4 6.2699C3.69626 6.44526 3.44398 6.69742 3.26846 7.00106C3.09294 7.30471 3.00036 7.64918 3 7.9999V15.9999C3.00036 16.3506 3.09294 16.6951 3.26846 16.9987C3.44398 17.3024 3.69626 17.5545 4 17.7299L11 21.7299Z" stroke="#2C687B" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M12 22V12" stroke="#2C687B" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M3.28906 7L11.9991 12L20.7091 7" stroke="#2C687B" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M7.5 4.26953L16.5 9.41953" stroke="#2C687B" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <span class="logo-badge"></span>
          </div>
          <!-- ✅ 수정: color: rgba(0,0,0,0) → 실제 색상 -->
          <div class="logo-text">
            <span class="logo-name">ReMat</span>
            <span class="logo-sub">Re + Material</span>
          </div>
        </div>

        <!-- 네비게이션 메뉴 -->
        <nav class="nav-menu">
          <a href="#" class="nav-link">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M7.33333 14.4869C7.53603 14.604 7.76595 14.6656 8 14.6656C8.23405 14.6656 8.46397 14.604 8.66667 14.4869L13.3333 11.8203C13.5358 11.7034 13.704 11.5353 13.821 11.3328C13.938 11.1304 13.9998 10.9007 14 10.6669V5.33359C13.9998 5.09978 13.938 4.87013 13.821 4.6677C13.704 4.46527 13.5358 4.29717 13.3333 4.18026L8.66667 1.51359C8.46397 1.39657 8.23405 1.33496 8 1.33496C7.76595 1.33496 7.53603 1.39657 7.33333 1.51359L2.66667 4.18026C2.46418 4.29717 2.29599 4.46527 2.17897 4.6677C2.06196 4.87013 2.00024 5.09978 2 5.33359V10.6669C2.00024 10.9007 2.06196 11.1304 2.17897 11.3328C2.29599 11.5353 2.46418 11.7034 2.66667 11.8203L7.33333 14.4869Z" stroke="#364153" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/><path d="M8 14.6667V8" stroke="#364153" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/><path d="M2.19336 4.66699L8.00003 8.00033L13.8067 4.66699" stroke="#364153" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/><path d="M5 2.84668L11 6.28001" stroke="#364153" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/></svg>
            자재 마켓
          </a>
          <a href="#" class="nav-link">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M6.6243 10.3332C6.56478 10.1025 6.44453 9.89191 6.27605 9.72343C6.10757 9.55495 5.89702 9.43469 5.6663 9.37517L1.5763 8.32051C1.50652 8.3007 1.44511 8.25867 1.40138 8.2008C1.35765 8.14293 1.33398 8.07238 1.33398 7.99984C1.33398 7.9273 1.35765 7.85675 1.40138 7.79888C1.44511 7.74101 1.50652 7.69898 1.5763 7.67917L5.6663 6.62384C5.89693 6.56438 6.10743 6.44422 6.2759 6.27587C6.44438 6.10751 6.56468 5.8971 6.6243 5.66651L7.67897 1.57651C7.69857 1.50645 7.74056 1.44474 7.79851 1.40077C7.85647 1.35681 7.92722 1.33301 7.99997 1.33301C8.07271 1.33301 8.14346 1.35681 8.20142 1.40077C8.25938 1.44474 8.30136 1.50645 8.32097 1.57651L9.37497 5.66651C9.43449 5.89722 9.55474 6.10777 9.72322 6.27625C9.8917 6.44473 10.1023 6.56499 10.333 6.62451L14.423 7.67851C14.4933 7.69791 14.5553 7.73985 14.5995 7.79789C14.6437 7.85594 14.6677 7.92688 14.6677 7.99984C14.6677 8.0728 14.6437 8.14374 14.5995 8.20179C14.5553 8.25983 14.4933 8.30177 14.423 8.32117L10.333 9.37517C10.1023 9.43469 9.8917 9.55495 9.72322 9.72343C9.55474 9.89191 9.43449 10.1025 9.37497 10.3332L8.3203 14.4232C8.3007 14.4932 8.25871 14.5549 8.20075 14.5989C8.1428 14.6429 8.07205 14.6667 7.9993 14.6667C7.92656 14.6667 7.85581 14.6429 7.79785 14.5989C7.73989 14.5549 7.69791 14.4932 7.6783 14.4232L6.6243 10.3332Z" stroke="#364153" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/><path d="M13.334 2V4.66667" stroke="#364153" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/><path d="M14.6667 3.33301H12" stroke="#364153" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/><path d="M2.66602 11.333V12.6663" stroke="#364153" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/><path d="M3.33333 12H2" stroke="#364153" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/></svg>
            AI 분석
          </a>
          <a href="#" class="nav-link">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3.33398 8H12.6673" stroke="#364153" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/><path d="M8 3.33301V12.6663" stroke="#364153" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/></svg>
            자재 등록
          </a>
          <a href="#" class="nav-link">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M6 2H2.66667C2.29848 2 2 2.29848 2 2.66667V7.33333C2 7.70152 2.29848 8 2.66667 8H6C6.36819 8 6.66667 7.70152 6.66667 7.33333V2.66667C6.66667 2.29848 6.36819 2 6 2Z" stroke="#364153" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/><path d="M13.334 2H10.0007C9.63246 2 9.33398 2.29848 9.33398 2.66667V4.66667C9.33398 5.03486 9.63246 5.33333 10.0007 5.33333H13.334C13.7022 5.33333 14.0007 5.03486 14.0007 4.66667V2.66667C14.0007 2.29848 13.7022 2 13.334 2Z" stroke="#364153" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/><path d="M13.334 8H10.0007C9.63246 8 9.33398 8.29848 9.33398 8.66667V13.3333C9.33398 13.7015 9.63246 14 10.0007 14H13.334C13.7022 14 14.0007 13.7015 14.0007 13.3333V8.66667C14.0007 8.29848 13.7022 8 13.334 8Z" stroke="#364153" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/><path d="M6 10.667H2.66667C2.29848 10.667 2 10.9655 2 11.3337V13.3337C2 13.7018 2.29848 14.0003 2.66667 14.0003H6C6.36819 14.0003 6.66667 13.7018 6.66667 13.3337V11.3337C6.66667 10.9655 6.36819 10.667 6 10.667Z" stroke="#364153" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/></svg>
            거래현황
          </a>
        </nav>

        <!-- ✅ 수정: 로그인 버튼 (원본 디자인 유지) -->
        <a href="/login" class="btn-login-nav">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M10 2H12.6667C13.0203 2 13.3594 2.14048 13.6095 2.39052C13.8595 2.64057 14 2.97971 14 3.33333V12.6667C14 13.0203 13.8595 13.3594 13.6095 13.6095C13.3594 13.8595 13.0203 14 12.6667 14H10" stroke="white" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M6.66602 11.3337L9.99935 8.00033L6.66602 4.66699" stroke="white" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M10 8H2" stroke="white" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          로그인
        </a>

      </div>
    </header>

    <!-- ✅ 메인 콘텐츠 -->
    <main class="main-content">
      <div class="register-container">

        <!-- 마스코트 + 타이틀 -->
        <div class="brand-section">
          <div class="mascot">
            <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="0.5" y="0.5" width="99" height="99" rx="19.5" fill="url(#reg_grad1)" stroke="#808080"/>
              <ellipse cx="50" cy="40" rx="25" ry="27" fill="url(#reg_radial1)"/>
              <rect x="14" y="47" width="14" height="7" rx="3.5" fill="url(#reg_grad2)" stroke="#808080" stroke-width="0.7"/>
              <rect x="72" y="47" width="14" height="7" rx="3.5" fill="url(#reg_grad3)" stroke="#808080" stroke-width="0.7"/>
              <rect x="42" y="75" width="9" height="13" rx="4" fill="url(#reg_grad4)" stroke="#808080" stroke-width="0.7"/>
              <rect x="55" y="75" width="9" height="13" rx="4" fill="url(#reg_grad5)" stroke="#808080" stroke-width="0.7"/>
              <circle cx="50" cy="18" r="5" fill="#DB1A1A" opacity="0.8"/>
              <line x1="50" y1="23" x2="50" y2="26" stroke="#DB1A1A" stroke-width="1"/>
              <circle cx="37" cy="37" r="7" fill="#2C687B"/>
              <circle cx="57" cy="37" r="7" fill="#2C687B"/>
              <circle cx="39" cy="35" r="2.5" fill="white"/>
              <circle cx="59" cy="35" r="2.5" fill="white"/>
              <path d="M37 50 C43 55 57 55 63 50" stroke="#2C687B" stroke-width="1.5" stroke-linecap="round"/>
              <circle cx="29" cy="45" r="8" fill="url(#reg_radial2)"/>
              <circle cx="71" cy="45" r="8" fill="url(#reg_radial3)"/>
              <circle cx="30" cy="30" r="2.5" fill="#606060"/>
              <circle cx="67" cy="30" r="2.5" fill="#606060"/>
              <circle cx="30" cy="62" r="2.5" fill="#606060"/>
              <circle cx="67" cy="62" r="2.5" fill="#606060"/>
              <defs>
                <linearGradient id="reg_grad1" x1="0" y1="0" x2="100" y2="90" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#C0C0C0"/><stop offset="0.5" stop-color="#E8E8E8"/><stop offset="1" stop-color="#A0A0A0"/>
                </linearGradient>
                <radialGradient id="reg_radial1" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(35 27) scale(25 27)">
                  <stop stop-color="white" stop-opacity="0.6"/><stop offset="1" stop-color="white" stop-opacity="0"/>
                </radialGradient>
                <linearGradient id="reg_grad2" x1="14" y1="47" x2="28" y2="55" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#C0C0C0"/><stop offset="0.5" stop-color="#E8E8E8"/><stop offset="1" stop-color="#A0A0A0"/>
                </linearGradient>
                <linearGradient id="reg_grad3" x1="72" y1="47" x2="86" y2="55" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#C0C0C0"/><stop offset="0.5" stop-color="#E8E8E8"/><stop offset="1" stop-color="#A0A0A0"/>
                </linearGradient>
                <linearGradient id="reg_grad4" x1="42" y1="75" x2="51" y2="88" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#C0C0C0"/><stop offset="0.5" stop-color="#E8E8E8"/><stop offset="1" stop-color="#A0A0A0"/>
                </linearGradient>
                <linearGradient id="reg_grad5" x1="55" y1="75" x2="64" y2="88" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#C0C0C0"/><stop offset="0.5" stop-color="#E8E8E8"/><stop offset="1" stop-color="#A0A0A0"/>
                </linearGradient>
                <radialGradient id="reg_radial2" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(29 45) scale(8)">
                  <stop stop-color="#DB1A1A" stop-opacity="0.6"/><stop offset="1" stop-color="#DB1A1A" stop-opacity="0.2"/>
                </radialGradient>
                <radialGradient id="reg_radial3" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(71 45) scale(8)">
                  <stop stop-color="#DB1A1A" stop-opacity="0.6"/><stop offset="1" stop-color="#DB1A1A" stop-opacity="0.2"/>
                </radialGradient>
              </defs>
            </svg>
          </div>
          <h1 class="brand-title">ReMat</h1>
          <p class="brand-sub">ESG 기반 자재 재사용 플랫폼</p>
        </div>

        <!-- ✅ 회원가입 카드 -->
        <div class="register-card">

          <!-- ✅ 수정: Tab List - flex-direction row -->
          <div class="tab-list">
            <button
              class="tab-item"
              :class="{ active: activeTab === 'login' }"
              @click="goToLogin"
            >로그인</button>
            <button
              class="tab-item"
              :class="{ active: activeTab === 'register' }"
              @click="activeTab = 'register'"
            >회원가입</button>
          </div>

          <!-- 탭 패널 -->
          <div class="tab-panel">

            <!-- ✅ 수정: 담당자명/연락처 행 - position:absolute 제거, flex row로 수정 -->
            <div class="field-row">
              <div class="field-group">
                <label class="field-label">담당자명</label>
                <div class="input-wrapper">
                  <svg class="input-icon" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M15.8327 17.5V15.8333C15.8327 14.9493 15.4815 14.1014 14.8564 13.4763C14.2312 12.8512 13.3834 12.5 12.4993 12.5H7.49935C6.61529 12.5 5.76745 12.8512 5.14233 13.4763C4.5172 14.1014 4.16602 14.9493 4.16602 15.8333V17.5" stroke="#99A1AF" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M9.99935 9.16667C11.8403 9.16667 13.3327 7.67428 13.3327 5.83333C13.3327 3.99238 11.8403 2.5 9.99935 2.5C8.1584 2.5 6.66602 3.99238 6.66602 5.83333C6.66602 7.67428 8.1584 9.16667 9.99935 9.16667Z" stroke="#99A1AF" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  <input
                    v-model="form.name"
                    type="text"
                    class="field-input"
                    placeholder="홍길동"
                    :class="{ 'input-error': errors.name }"
                  />
                </div>
                <span v-if="errors.name" class="error-msg">{{ errors.name }}</span>
              </div>

              <div class="field-group">
                <label class="field-label">연락처</label>
                <div class="input-wrapper">
                  <svg class="input-icon" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M18.3332 14.0999V16.5999C18.3341 16.832 18.2866 17.0617 18.1936 17.2744C18.1006 17.487 17.9643 17.6779 17.7933 17.8348C17.6222 17.9917 17.4203 18.1112 17.2005 18.1855C16.9806 18.2599 16.7477 18.2875 16.5165 18.2666C13.9522 17.988 11.489 17.1117 9.32486 15.7083C7.31139 14.4288 5.60431 12.7217 4.32486 10.7083C2.91651 8.53426 2.04007 6.05908 1.76653 3.48325C1.7457 3.25281 1.77309 3.02055 1.84695 2.80127C1.9208 2.58199 2.03951 2.38049 2.1955 2.2096C2.3515 2.03871 2.54137 1.90218 2.75302 1.80869C2.96468 1.7152 3.19348 1.6668 3.42486 1.66658H5.92486C6.32928 1.6626 6.72136 1.80582 7.028 2.06953C7.33464 2.33324 7.53493 2.69946 7.59153 3.09992C7.69705 3.89997 7.89274 4.68552 8.17486 5.44158C8.28698 5.73985 8.31125 6.06401 8.24478 6.37565C8.17832 6.68729 8.02392 6.97334 7.79986 7.19992L6.74153 8.25825C7.92783 10.3445 9.65524 12.072 11.7415 13.2583L12.7999 12.1999C13.0264 11.9759 13.3125 11.8215 13.6241 11.755C13.9358 11.6885 14.2599 11.7128 14.5582 11.8249C15.3143 12.107 16.0998 12.3027 16.8999 12.4083C17.3047 12.4654 17.6744 12.6693 17.9386 12.9812C18.2029 13.2931 18.3433 13.6912 18.3332 14.0999Z" stroke="#99A1AF" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  <input
                    v-model="form.phone"
                    type="tel"
                    class="field-input"
                    placeholder="010-0000-0000"
                    :class="{ 'input-error': errors.phone }"
                  />
                </div>
                <span v-if="errors.phone" class="error-msg">{{ errors.phone }}</span>
              </div>
            </div>

            <!-- 회사명 -->
            <div class="field-group">
              <label class="field-label">회사명</label>
              <div class="input-wrapper">
                <svg class="input-icon" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M5 18.3332V3.33317C5 2.89114 5.17559 2.46722 5.48816 2.15466C5.80072 1.8421 6.22464 1.6665 6.66667 1.6665H13.3333C13.7754 1.6665 14.1993 1.8421 14.5118 2.15466C14.8244 2.46722 15 2.89114 15 3.33317V18.3332H5Z" stroke="#99A1AF" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M4.99935 10H3.33268C2.89065 10 2.46673 10.1756 2.15417 10.4882C1.84161 10.8007 1.66602 11.2246 1.66602 11.6667V16.6667C1.66602 17.1087 1.84161 17.5326 2.15417 17.8452C2.46673 18.1577 2.89065 18.3333 3.33268 18.3333H4.99935" stroke="#99A1AF" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M15 7.5H16.6667C17.1087 7.5 17.5326 7.6756 17.8452 7.98816C18.1577 8.30072 18.3333 8.72464 18.3333 9.16667V16.6667C18.3333 17.1087 18.1577 17.5326 17.8452 17.8452C17.5326 18.1577 17.1087 18.3333 16.6667 18.3333H15" stroke="#99A1AF" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M8.33398 5H11.6673" stroke="#99A1AF" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M8.33398 8.3335H11.6673" stroke="#99A1AF" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M8.33398 11.6665H11.6673" stroke="#99A1AF" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M8.33398 15H11.6673" stroke="#99A1AF" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <input
                  v-model="form.company"
                  type="text"
                  class="field-input"
                  placeholder="(주)회사명"
                  :class="{ 'input-error': errors.company }"
                />
              </div>
              <span v-if="errors.company" class="error-msg">{{ errors.company }}</span>
            </div>

            <!-- 지역 -->
            <div class="field-group">
              <label class="field-label">지역</label>
              <div class="input-wrapper">
                <svg class="input-icon" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M16.6673 8.33317C16.6673 12.494 12.0515 16.8273 10.5015 18.1657C10.3571 18.2742 10.1813 18.333 10.0007 18.333C9.81999 18.333 9.64421 18.2742 9.49982 18.1657C7.94982 16.8273 3.33398 12.494 3.33398 8.33317C3.33398 6.56506 4.03636 4.86937 5.28661 3.61913C6.53685 2.36888 8.23254 1.6665 10.0007 1.6665C11.7688 1.6665 13.4645 2.36888 14.7147 3.61913C15.9649 4.86937 16.6673 6.56506 16.6673 8.33317Z" stroke="#99A1AF" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M10 10.8335C11.3807 10.8335 12.5 9.71421 12.5 8.3335C12.5 6.95278 11.3807 5.8335 10 5.8335C8.61929 5.8335 7.5 6.95278 7.5 8.3335C7.5 9.71421 8.61929 10.8335 10 10.8335Z" stroke="#99A1AF" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <input
                  v-model="form.region"
                  type="text"
                  class="field-input"
                  placeholder="서울시"
                  :class="{ 'input-error': errors.region }"
                />
              </div>
              <span v-if="errors.region" class="error-msg">{{ errors.region }}</span>
            </div>

            <!-- 이메일 -->
            <div class="field-group">
              <label class="field-label">이메일</label>
              <div class="input-wrapper">
                <svg class="input-icon" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M16.666 3.3335H3.33268C2.41221 3.3335 1.66602 4.07969 1.66602 5.00016V15.0002C1.66602 15.9206 2.41221 16.6668 3.33268 16.6668H16.666C17.5865 16.6668 18.3327 15.9206 18.3327 15.0002V5.00016C18.3327 4.07969 17.5865 3.3335 16.666 3.3335Z" stroke="#99A1AF" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M18.3327 5.8335L10.8577 10.5835C10.6004 10.7447 10.3029 10.8302 9.99935 10.8302C9.69575 10.8302 9.39829 10.7447 9.14102 10.5835L1.66602 5.8335" stroke="#99A1AF" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <input
                  v-model="form.email"
                  type="email"
                  class="field-input"
                  placeholder="example@company.com"
                  :class="{ 'input-error': errors.email }"
                />
              </div>
              <span v-if="errors.email" class="error-msg">{{ errors.email }}</span>
            </div>

            <!-- 비밀번호 -->
            <div class="field-group">
              <label class="field-label">비밀번호</label>
              <div class="input-wrapper">
                <svg class="input-icon" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M15.8333 9.1665H4.16667C3.24619 9.1665 2.5 9.9127 2.5 10.8332V16.6665C2.5 17.587 3.24619 18.3332 4.16667 18.3332H15.8333C16.7538 18.3332 17.5 17.587 17.5 16.6665V10.8332C17.5 9.9127 16.7538 9.1665 15.8333 9.1665Z" stroke="#99A1AF" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M5.83398 9.1665V5.83317C5.83398 4.7281 6.27297 3.66829 7.05437 2.88689C7.83577 2.10549 8.89558 1.6665 10.0007 1.6665C11.1057 1.6665 12.1655 2.10549 12.9469 2.88689C13.7283 3.66829 14.1673 4.7281 14.1673 5.83317V9.1665" stroke="#99A1AF" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <input
                  v-model="form.password"
                  type="password"
                  class="field-input"
                  placeholder="8자 이상"
                  :class="{ 'input-error': errors.password }"
                />
              </div>
              <span v-if="errors.password" class="error-msg">{{ errors.password }}</span>
            </div>

            <!-- 비밀번호 확인 -->
            <div class="field-group">
              <label class="field-label">비밀번호 확인</label>
              <div class="input-wrapper">
                <svg class="input-icon" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M15.8333 9.1665H4.16667C3.24619 9.1665 2.5 9.9127 2.5 10.8332V16.6665C2.5 17.587 3.24619 18.3332 4.16667 18.3332H15.8333C16.7538 18.3332 17.5 17.587 17.5 16.6665V10.8332C17.5 9.9127 16.7538 9.1665 15.8333 9.1665Z" stroke="#99A1AF" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M5.83398 9.1665V5.83317C5.83398 4.7281 6.27297 3.66829 7.05437 2.88689C7.83577 2.10549 8.89558 1.6665 10.0007 1.6665C11.1057 1.6665 12.1655 2.10549 12.9469 2.88689C13.7283 3.66829 14.1673 4.7281 14.1673 5.83317V9.1665" stroke="#99A1AF" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <input
                  v-model="form.passwordConfirm"
                  type="password"
                  class="field-input"
                  placeholder="비밀번호 재입력"
                  :class="{ 'input-error': errors.passwordConfirm }"
                />
              </div>
              <span v-if="errors.passwordConfirm" class="error-msg">{{ errors.passwordConfirm }}</span>
            </div>

            <!-- ✅ 수정: 회원가입 버튼 - 절대위치 제거, flex center 적용 -->
            <button class="btn-register" @click="handleRegister" :disabled="isLoading">
              <span v-if="isLoading">처리 중...</span>
              <span v-else>회원가입</span>
            </button>

          </div>
        </div>

        <!-- 하단 특징 카드 -->
        <div class="feature-cards">
          <div class="feature-card">
            <span class="feature-emoji">🌱</span>
            <span class="feature-label">탄소 절감</span>
          </div>
          <div class="feature-card">
            <span class="feature-emoji">💰</span>
            <span class="feature-label">비용 절감</span>
          </div>
          <div class="feature-card">
            <span class="feature-emoji">📊</span>
            <span class="feature-label">ESG 리포트</span>
          </div>
        </div>

      </div>
    </main>

    <!-- ✅ 푸터 -->
    <footer class="footer">
      <div class="footer-inner">
        <div class="footer-brand">
          <div class="footer-logo">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M25.4537 10H14.5446C12.5363 10 10.9082 11.6281 10.9082 13.6364V26.3636C10.9082 28.3719 12.5363 30 14.5446 30H25.4537C27.462 30 29.09 28.3719 29.09 26.3636V13.6364C29.09 11.6281 27.462 10 25.4537 10Z" fill="url(#ft_g1)" stroke="#808080" stroke-width="0.363636"/>
              <circle cx="17" cy="17" r="6" fill="url(#ft_r1)"/>
              <rect x="6.5" y="16.5" width="5" height="3" rx="1.5" fill="url(#ft_g2)" stroke="#808080" stroke-width="0.27"/>
              <rect x="28.5" y="16.5" width="5" height="3" rx="1.5" fill="url(#ft_g3)" stroke="#808080" stroke-width="0.27"/>
              <rect x="14.5" y="29.2" width="3.5" height="4.5" rx="1.5" fill="url(#ft_g4)" stroke="#808080" stroke-width="0.27"/>
              <rect x="22.2" y="29.2" width="3.5" height="4.5" rx="1.5" fill="url(#ft_g5)" stroke="#808080" stroke-width="0.27"/>
              <circle cx="20" cy="8.2" r="1.1" fill="#DB1A1A" opacity="0.8"/>
              <circle cx="16.4" cy="16.4" r="1.8" fill="#2C687B"/>
              <circle cx="23.6" cy="16.4" r="1.8" fill="#2C687B"/>
              <circle cx="17" cy="15.9" r="0.7" fill="white"/>
              <circle cx="24.2" cy="15.9" r="0.7" fill="white"/>
              <path d="M16.4 20 C18.8 21.8 21.2 21.8 23.6 20" stroke="#2C687B" stroke-width="0.55" stroke-linecap="round"/>
              <circle cx="12.7" cy="19.1" r="1.8" fill="url(#ft_r2)"/>
              <circle cx="27.3" cy="19.1" r="1.8" fill="url(#ft_r3)"/>
              <defs>
                <linearGradient id="ft_g1" x1="10.9" y1="10" x2="30.8" y2="28" gradientUnits="userSpaceOnUse"><stop stop-color="#C0C0C0"/><stop offset="0.5" stop-color="#E8E8E8"/><stop offset="1" stop-color="#A0A0A0"/></linearGradient>
                <radialGradient id="ft_r1" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(15 12) scale(6)"><stop stop-color="white" stop-opacity="0.6"/><stop offset="1" stop-color="white" stop-opacity="0"/></radialGradient>
                <linearGradient id="ft_g2" x1="6.5" y1="16.5" x2="8.5" y2="20.5" gradientUnits="userSpaceOnUse"><stop stop-color="#C0C0C0"/><stop offset="0.5" stop-color="#E8E8E8"/><stop offset="1" stop-color="#A0A0A0"/></linearGradient>
                <linearGradient id="ft_g3" x1="28.5" y1="16.5" x2="30.5" y2="20.5" gradientUnits="userSpaceOnUse"><stop stop-color="#C0C0C0"/><stop offset="0.5" stop-color="#E8E8E8"/><stop offset="1" stop-color="#A0A0A0"/></linearGradient>
                <linearGradient id="ft_g4" x1="14.5" y1="29.2" x2="18" y2="33.7" gradientUnits="userSpaceOnUse"><stop stop-color="#C0C0C0"/><stop offset="0.5" stop-color="#E8E8E8"/><stop offset="1" stop-color="#A0A0A0"/></linearGradient>
                <linearGradient id="ft_g5" x1="22.2" y1="29.2" x2="25.7" y2="33.7" gradientUnits="userSpaceOnUse"><stop stop-color="#C0C0C0"/><stop offset="0.5" stop-color="#E8E8E8"/><stop offset="1" stop-color="#A0A0A0"/></linearGradient>
                <radialGradient id="ft_r2" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(12.7 19.1) scale(1.8)"><stop stop-color="#DB1A1A" stop-opacity="0.6"/><stop offset="1" stop-color="#DB1A1A" stop-opacity="0.2"/></radialGradient>
                <radialGradient id="ft_r3" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(27.3 19.1) scale(1.8)"><stop stop-color="#DB1A1A" stop-opacity="0.6"/><stop offset="1" stop-color="#DB1A1A" stop-opacity="0.2"/></radialGradient>
              </defs>
            </svg>
            <div>
              <div class="footer-logo-name">ReMat</div>
              <div class="footer-logo-sub">Re + Material</div>
            </div>
          </div>
          <p class="footer-desc">ESG 기반 자재 재사용 플랫폼</p>
          <p class="footer-tagline">비출장 자재를 순환하고, 탄소를 절감하며, 비용을 절약하세요.</p>
        </div>
        <div class="footer-links">
          <div class="footer-col">
            <h4>서비스</h4>
            <a href="#">자재 마켓</a>
            <a href="#">AI 분석</a>
            <a href="#">자재 등록</a>
            <a href="#">대시보드</a>
          </div>
          <div class="footer-col">
            <h4>고객지원</h4>
            <a href="#">공지사항</a>
            <a href="#">FAQ</a>
            <a href="#">문의하기</a>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <p>© 2026 ReMat. All rights reserved.</p>
      </div>
    </footer>

  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'

// ── 상태 ──────────────────────────────────────────
const activeTab = ref('register')
const isLoading = ref(false)

const form = reactive({
  name: '',
  phone: '',
  company: '',
  region: '',
  email: '',
  password: '',
  passwordConfirm: ''
})

const errors = reactive({
  name: '',
  phone: '',
  company: '',
  region: '',
  email: '',
  password: '',
  passwordConfirm: ''
})

// ── 유효성 검사 ───────────────────────────────────
function validate() {
  let valid = true
  Object.keys(errors).forEach(k => errors[k] = '')

  if (!form.name.trim()) {
    errors.name = '담당자명을 입력해주세요.'; valid = false
  }
  if (!form.phone.trim()) {
    errors.phone = '연락처를 입력해주세요.'; valid = false
  } else if (!/^0\d{1,2}-\d{3,4}-\d{4}$/.test(form.phone)) {
    errors.phone = '올바른 연락처 형식을 입력해주세요. (예: 010-0000-0000)'; valid = false
  }
  if (!form.company.trim()) {
    errors.company = '회사명을 입력해주세요.'; valid = false
  }
  if (!form.region.trim()) {
    errors.region = '지역을 입력해주세요.'; valid = false
  }
  if (!form.email.trim()) {
    errors.email = '이메일을 입력해주세요.'; valid = false
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = '올바른 이메일 형식을 입력해주세요.'; valid = false
  }
  if (!form.password) {
    errors.password = '비밀번호를 입력해주세요.'; valid = false
  } else if (form.password.length < 8) {
    errors.password = '비밀번호는 8자 이상이어야 합니다.'; valid = false
  }
  if (!form.passwordConfirm) {
    errors.passwordConfirm = '비밀번호를 다시 입력해주세요.'; valid = false
  } else if (form.password !== form.passwordConfirm) {
    errors.passwordConfirm = '비밀번호가 일치하지 않습니다.'; valid = false
  }

  return valid
}

// ── 메서드 ────────────────────────────────────────
async function handleRegister() {
  if (!validate()) return
  isLoading.value = true
  try {
    // TODO: 실제 회원가입 API 호출로 교체하세요.
    await new Promise(resolve => setTimeout(resolve, 800))
    console.log('회원가입 시도:', { ...form, password: '***' })
    alert('회원가입이 완료되었습니다.')
    // router.push('/login') // vue-router 사용 시 활성화
  } catch (error) {
    console.error('회원가입 오류:', error)
    alert('회원가입에 실패했습니다. 다시 시도해주세요.')
  } finally {
    isLoading.value = false
  }
}

function goToLogin() {
  // router.push('/login') // vue-router 사용 시 활성화
  console.log('로그인 페이지로 이동')
}
</script>

<style scoped>
/* ── CSS 변수 ─────────────────────────────────────── */
:root {
  --primary: #2C687B;
  --accent:  #DB1A1A;
  --bg:      #FFF6F6;
  --white:   #ffffff;
  --border:  #E5E7EB;
  --text-main: #1A1A1A;
  --text-sub:  #4A5565;
  --text-muted:#6B7280;
  --nav-text:  #364153;
  --error:     #DB1A1A;
}

/* ── 전체 레이아웃 ────────────────────────────────── */
.page-wrapper {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: var(--bg);
  font-family: 'Inter', sans-serif;
}

/* ── 네비게이션 ──────────────────────────────────── */
.navbar {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 100;
  height: 65px;
  background: var(--white);
  border-bottom: 1px solid var(--border);
  box-shadow: 0px 1px 3px rgba(0,0,0,0.10), 0px 1px 2px -1px rgba(0,0,0,0.10);
}

.navbar-inner {
  max-width: 1280px;
  margin: 0 auto;
  height: 100%;
  padding: 0 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

/* 로고 */
.logo-link {
  display: flex;
  align-items: center;
  gap: 12px;
  text-decoration: none;
}

.logo-icon {
  width: 44px;
  height: 44px;
  position: relative;
  background: linear-gradient(135deg, #8CC7C4 0%, #2C687B 50%, #DB1A1A 100%);
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.logo-icon-inner {
  width: 40px;
  height: 40px;
  background: var(--white);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.logo-badge {
  position: absolute;
  top: -2px; right: -2px;
  width: 8px; height: 8px;
  border-radius: 50%;
  background: var(--accent);
}

/* ✅ 수정: 투명 텍스트 → 실제 색상 */
.logo-text { display: flex; flex-direction: column; }
.logo-name { font-size: 20px; font-weight: 700; color: var(--primary); line-height: 28px; }
.logo-sub  { font-size: 10px; color: #6A7282; letter-spacing: 0.37px; }

/* 네비 메뉴 */
.nav-menu {
  display: flex;
  align-items: center;
  gap: 8px;
}

.nav-link {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  height: 36px;
  color: var(--nav-text);
  font-size: 14px;
  text-decoration: none;
  border-radius: 10px;
  transition: background 0.15s;
}
.nav-link:hover { background: #F5F5F5; }

/* 헤더 로그인 버튼 */
.btn-login-nav {
  display: flex;
  align-items: center;
  gap: 6px;
  height: 32px;
  padding: 0 14px;
  background: var(--accent);
  color: white;
  font-size: 14px;
  font-weight: 500;
  border-radius: 8px;
  text-decoration: none;
  transition: background 0.2s;
  white-space: nowrap;
}
.btn-login-nav:hover { background: #c01515; }

/* ── 메인 ────────────────────────────────────────── */
.main-content {
  flex: 1;
  padding-top: 65px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  background: linear-gradient(135deg, #ffffff 0%, #FFF6F6 50%, rgba(140,199,196,0.10) 100%);
}

.register-container {
  width: 448px;
  padding: 48px 0;
  display: flex;
  flex-direction: column;
  gap: 32px;
}

/* 브랜드 섹션 */
.brand-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}

.mascot { width: 100px; height: 100px; }

.brand-title {
  font-size: 30px;
  font-weight: 700;
  color: var(--primary);
  letter-spacing: 0.4px;
  margin: 0;
  line-height: 36px;
}

.brand-sub {
  font-size: 16px;
  color: var(--text-sub);
  margin: 0;
}

/* ── 회원가입 카드 ────────────────────────────────── */
.register-card {
  background: var(--white);
  border-radius: 16px;
  border: 1px solid var(--border);
  box-shadow: 0px 20px 25px -5px rgba(0,0,0,0.10), 0px 8px 10px -6px rgba(0,0,0,0.10);
  padding: 33px 33px 32px;
  display: flex;
  flex-direction: column;
  gap: 32px;
}

/* ✅ 수정: Tab List - flex-direction row */
.tab-list {
  display: flex;
  flex-direction: row;      /* ✅ Before: column → After: row */
  background: #F5F5F5;
  border-radius: 14px;
  padding: 3px;
  width: 100%;
}

.tab-item {
  flex: 1;
  height: 29px;
  padding: 4px 8px;
  background: transparent;
  border: none;
  border-radius: 12px;
  font-size: 14px;
  font-weight: 500;
  color: var(--text-main);
  cursor: pointer;
  transition: background 0.2s, box-shadow 0.2s;
  text-align: center;
  font-family: inherit;
}

.tab-item.active {
  background: var(--white);
  box-shadow: 0 1px 3px rgba(0,0,0,0.12);
}

/* ── 탭 패널 ─────────────────────────────────────── */
.tab-panel {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

/* ✅ 수정: 담당자명/연락처 행 - position:absolute 제거 → flex row */
.field-row {
  display: flex;
  flex-direction: row;     /* ✅ Before: position:absolute → After: flex row */
  gap: 16px;
}

.field-row .field-group { flex: 1; }

/* 필드 그룹 */
.field-group {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.field-label {
  font-size: 14px;
  font-weight: 500;
  color: var(--text-main);
  line-height: 14px;
}

.input-wrapper {
  position: relative;
  display: flex;
  align-items: center;
}

.input-icon {
  position: absolute;
  left: 12px;
  pointer-events: none;
}

/* ✅ 수정: Input border 추가 */
.field-input {
  width: 100%;
  height: 36px;
  padding: 4px 12px 4px 40px;
  font-size: 14px;
  color: var(--text-main);
  background: var(--white);
  border: 1px solid var(--border);   /* ✅ Before: outline rgba(0,0,0,0) → After: 실제 테두리 */
  border-radius: 8px;
  outline: none;
  transition: border-color 0.2s, box-shadow 0.2s;
  box-sizing: border-box;
  font-family: inherit;
}

.field-input::placeholder { color: var(--text-muted); }

.field-input:focus {
  border-color: var(--primary);
  box-shadow: 0 0 0 3px rgba(44,104,123,0.12);
}

.field-input.input-error {
  border-color: var(--error);
  box-shadow: 0 0 0 3px rgba(219,26,26,0.10);
}

.error-msg {
  font-size: 12px;
  color: var(--error);
  line-height: 1.4;
}

/* ✅ 수정: 회원가입 버튼 - position:absolute 제거 → flex center */
.btn-register {
  width: 100%;
  height: 40px;
  background: var(--accent);
  color: var(--white);
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  display: flex;              /* ✅ Before: left:164.77px → After: flex center */
  align-items: center;
  justify-content: center;
  transition: background 0.2s, opacity 0.2s;
  margin-top: 8px;
  font-family: inherit;
}

.btn-register:hover:not(:disabled) { background: #c01515; }
.btn-register:disabled { opacity: 0.65; cursor: not-allowed; }

/* ── 특징 카드 ───────────────────────────────────── */
.feature-cards {
  display: flex;
  gap: 16px;
}

.feature-card {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  padding: 17px;
  background: var(--white);
  border: 1px solid var(--border);
  border-radius: 10px;
}

.feature-emoji { font-size: 24px; line-height: 32px; }
.feature-label { font-size: 12px; color: var(--text-sub); text-align: center; }

/* ── 푸터 ────────────────────────────────────────── */
.footer {
  background: var(--primary);
  color: var(--white);
  padding: 48px 0 0;
}

.footer-inner {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 32px 32px;
  display: flex;
  gap: 80px;
  align-items: flex-start;
}

.footer-brand {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.footer-logo { display: flex; align-items: center; gap: 12px; }
.footer-logo-name { font-size: 20px; font-weight: 700; color: var(--white); }
.footer-logo-sub  { font-size: 9px; color: #99A1AF; letter-spacing: 0.39px; }
.footer-desc    { font-size: 16px; color: #D1D5DC; margin: 0; }
.footer-tagline { font-size: 14px; color: #99A1AF; margin: 0; }

.footer-links { display: flex; gap: 60px; }

.footer-col {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.footer-col h4 {
  font-size: 18px;
  font-weight: 700;
  color: var(--white);
  margin: 0 0 4px;
}

.footer-col a {
  font-size: 14px;
  color: #D1D5DC;
  text-decoration: none;
  transition: color 0.15s;
}
.footer-col a:hover { color: var(--white); }

.footer-bottom {
  border-top: 1px solid rgba(255,255,255,0.10);
  padding: 20px 32px;
  text-align: center;
}

.footer-bottom p { font-size: 14px; color: #99A1AF; margin: 0; }
</style>