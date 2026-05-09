<template>
  <div class="page-wrapper">
    <!-- ✅ 상단 네비게이션 -->
    <header class="navbar">
      <div class="navbar-inner">
        <!-- 로고 -->
        <div class="logo-link">
          <div class="logo-icon">
            <div class="logo-icon-inner">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11 21.7299C11.304 21.9054 11.6489 21.9979 12 21.9979C12.3511 21.9979 12.696 21.9054 13 21.7299L20 17.7299C20.3037 17.5545 20.556 17.3024 20.7315 16.9987C20.9071 16.6951 20.9996 16.3506 21 15.9999V7.9999C20.9996 7.64918 20.9071 7.30471 20.7315 7.00106C20.556 6.69742 20.3037 6.44526 20 6.2699L13 2.2699C12.696 2.09437 12.3511 2.00195 12 2.00195C11.6489 2.00195 11.304 2.09437 11 2.2699L4 6.2699C3.69626 6.44526 3.44398 6.69742 3.26846 7.00106C3.09294 7.30471 3.00036 7.64918 3 7.9999V15.9999C3.00036 16.3506 3.09294 16.6951 3.26846 16.9987C3.44398 17.3024 3.69626 17.5545 4 17.7299L11 21.7299Z" stroke="#2C687B" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M12 22V12" stroke="#2C687B" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M3.28906 7L11.9991 12L20.7091 7" stroke="#2C687B" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M7.5 4.26953L16.5 9.41953" stroke="#2C687B" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <span class="logo-badge"></span>
          </div>
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

        <!-- 우측 버튼 -->
        <div class="nav-actions">
          <a href="#" class="btn btn-outline">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M12.6673 14V12.6667C12.6673 11.9594 12.3864 11.2811 11.8863 10.781C11.3862 10.281 10.7079 10 10.0007 10H6.00065C5.29341 10 4.61513 10.281 4.11503 10.781C3.61494 11.2811 3.33398 11.9594 3.33398 12.6667V14" stroke="#1A1A1A" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/><path d="M8.00065 7.33333C9.47341 7.33333 10.6673 6.13943 10.6673 4.66667C10.6673 3.19391 9.47341 2 8.00065 2C6.52789 2 5.33398 3.19391 5.33398 4.66667C5.33398 6.13943 6.52789 7.33333 8.00065 7.33333Z" stroke="#1A1A1A" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/></svg>
            마이페이지
          </a>
          <button class="btn btn-outline" @click="handleLogout">로그아웃</button>
        </div>
      </div>
    </header>

    <!-- ✅ 메인 콘텐츠 -->
    <main class="main-content">
      <div class="login-container">

        <!-- 마스코트 + 타이틀 -->
        <div class="brand-section">
          <div class="mascot">
            <!-- 마스코트 SVG (원본 유지) -->
            <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="0.5" y="0.5" width="99" height="99" rx="19.5" fill="url(#mascot_grad1)" stroke="#808080"/>
              <ellipse cx="50" cy="40" rx="25" ry="27" fill="url(#mascot_radial1)"/>
              <rect x="14" y="47" width="14" height="7" rx="3.5" fill="url(#mascot_grad2)" stroke="#808080" stroke-width="0.7"/>
              <rect x="72" y="47" width="14" height="7" rx="3.5" fill="url(#mascot_grad3)" stroke="#808080" stroke-width="0.7"/>
              <rect x="42" y="75" width="9" height="13" rx="4" fill="url(#mascot_grad4)" stroke="#808080" stroke-width="0.7"/>
              <rect x="55" y="75" width="9" height="13" rx="4" fill="url(#mascot_grad5)" stroke="#808080" stroke-width="0.7"/>
              <circle cx="50" cy="18" r="5" fill="#DB1A1A" opacity="0.8"/>
              <line x1="50" y1="23" x2="50" y2="26" stroke="#DB1A1A" stroke-width="1"/>
              <circle cx="37" cy="37" r="7" fill="#2C687B"/>
              <circle cx="57" cy="37" r="7" fill="#2C687B"/>
              <circle cx="39" cy="35" r="2.5" fill="white"/>
              <circle cx="59" cy="35" r="2.5" fill="white"/>
              <path d="M37 50 C43 55 57 55 63 50" stroke="#2C687B" stroke-width="1.5" stroke-linecap="round"/>
              <circle cx="29" cy="45" r="8" fill="url(#mascot_radial2)"/>
              <circle cx="71" cy="45" r="8" fill="url(#mascot_radial3)"/>
              <circle cx="30" cy="30" r="2.5" fill="#606060"/>
              <circle cx="67" cy="30" r="2.5" fill="#606060"/>
              <circle cx="30" cy="62" r="2.5" fill="#606060"/>
              <circle cx="67" cy="62" r="2.5" fill="#606060"/>
              <defs>
                <linearGradient id="mascot_grad1" x1="0" y1="0" x2="100" y2="90" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#C0C0C0"/><stop offset="0.5" stop-color="#E8E8E8"/><stop offset="1" stop-color="#A0A0A0"/>
                </linearGradient>
                <radialGradient id="mascot_radial1" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(35 27) scale(25 27)">
                  <stop stop-color="white" stop-opacity="0.6"/><stop offset="1" stop-color="white" stop-opacity="0"/>
                </radialGradient>
                <linearGradient id="mascot_grad2" x1="14" y1="47" x2="28" y2="55" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#C0C0C0"/><stop offset="0.5" stop-color="#E8E8E8"/><stop offset="1" stop-color="#A0A0A0"/>
                </linearGradient>
                <linearGradient id="mascot_grad3" x1="72" y1="47" x2="86" y2="55" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#C0C0C0"/><stop offset="0.5" stop-color="#E8E8E8"/><stop offset="1" stop-color="#A0A0A0"/>
                </linearGradient>
                <linearGradient id="mascot_grad4" x1="42" y1="75" x2="51" y2="88" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#C0C0C0"/><stop offset="0.5" stop-color="#E8E8E8"/><stop offset="1" stop-color="#A0A0A0"/>
                </linearGradient>
                <linearGradient id="mascot_grad5" x1="55" y1="75" x2="64" y2="88" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#C0C0C0"/><stop offset="0.5" stop-color="#E8E8E8"/><stop offset="1" stop-color="#A0A0A0"/>
                </linearGradient>
                <radialGradient id="mascot_radial2" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(29 45) scale(8)">
                  <stop stop-color="#DB1A1A" stop-opacity="0.6"/><stop offset="1" stop-color="#DB1A1A" stop-opacity="0"/>
                </radialGradient>
                <radialGradient id="mascot_radial3" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(71 45) scale(8)">
                  <stop stop-color="#DB1A1A" stop-opacity="0.6"/><stop offset="1" stop-color="#DB1A1A" stop-opacity="0"/>
                </radialGradient>
              </defs>
            </svg>
          </div>
          <h1 class="brand-title">ReMat</h1>
          <p class="brand-sub">ESG 기반 자재 재사용 플랫폼</p>
        </div>

        <!-- ✅ 로그인 카드 (수정됨: 테두리, flex 방향 등) -->
        <div class="login-card">
          <!-- 탭 (수정: flex-direction row로 변경) -->
          <div class="tab-list">
            <button
              class="tab-item"
              :class="{ active: activeTab === 'login' }"
              @click="activeTab = 'login'"
            >로그인</button>
            <button
              class="tab-item"
              :class="{ active: activeTab === 'register' }"
              @click="activeTab = 'register'"
            >회원가입</button>
          </div>

          <!-- 탭 패널 (수정: activeTab에 따라 표시) -->
          <div v-if="activeTab === 'login'" class="tab-panel">
            <!-- 이메일 입력 -->
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
                />
              </div>
            </div>

            <!-- 비밀번호 입력 -->
            <div class="field-group">
              <label class="field-label">비밀번호</label>
              <div class="input-wrapper">
                <svg class="input-icon" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M15.8333 9.1665H4.16667C3.24619 9.1665 2.5 9.9127 2.5 10.8332V16.6665C2.5 17.587 3.24619 18.3332 4.16667 18.3332H15.8333C16.7538 18.3332 17.5 17.587 17.5 16.6665V10.8332C17.5 9.9127 16.7538 9.1665 15.8333 9.1665Z" stroke="#99A1AF" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M5.83398 9.1665V5.83317C5.83398 4.7281 6.27297 3.66829 7.05437 2.88689C7.83577 2.10549 8.89558 1.6665 10.0007 1.6665C11.1057 1.6665 12.1655 2.10549 12.9469 2.88689C13.7283 3.66829 14.1673 4.7281 14.1673 5.83317V9.1665" stroke="#99A1AF" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <input
                  v-model="form.password"
                  :type="showPassword ? 'text' : 'password'"
                  class="field-input"
                  placeholder="••••••••"
                />
              </div>
            </div>

            <!-- 로그인 버튼 -->
            <button class="btn-login" @click="handleLogin" :disabled="isLoading">
              <span v-if="isLoading">로그인 중...</span>
              <span v-else>로그인</span>
            </button>
          </div>

          <!-- 회원가입 탭 패널 -->
          <div v-if="activeTab === 'register'" class="tab-panel">
            <!-- 이메일 입력 -->
            <div class="field-group">
              <label class="field-label">이메일</label>
              <div class="input-wrapper">
                <svg class="input-icon" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M16.666 3.3335H3.33268C2.41221 3.3335 1.66602 4.07969 1.66602 5.00016V15.0002C1.66602 15.9206 2.41221 16.6668 3.33268 16.6668H16.666C17.5865 16.6668 18.3327 15.9206 18.3327 15.0002V5.00016C18.3327 4.07969 17.5865 3.3335 16.666 3.3335Z" stroke="#99A1AF" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M18.3327 5.8335L10.8577 10.5835C10.6004 10.7447 10.3029 10.8302 9.99935 10.8302C9.69575 10.8302 9.39829 10.7447 9.14102 10.5835L1.66602 5.8335" stroke="#99A1AF" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <input
                  v-model="registerForm.email"
                  type="email"
                  class="field-input"
                  placeholder="example@company.com"
                />
              </div>
            </div>

            <!-- 비밀번호 입력 -->
            <div class="field-group">
              <label class="field-label">비밀번호</label>
              <div class="input-wrapper">
                <svg class="input-icon" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M15.8333 9.1665H4.16667C3.24619 9.1665 2.5 9.9127 2.5 10.8332V16.6665C2.5 17.587 3.24619 18.3332 4.16667 18.3332H15.8333C16.7538 18.3332 17.5 17.587 17.5 16.6665V10.8332C17.5 9.9127 16.7538 9.1665 15.8333 9.1665Z" stroke="#99A1AF" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M5.83398 9.1665V5.83317C5.83398 4.7281 6.27297 3.66829 7.05437 2.88689C7.83577 2.10549 8.89558 1.6665 10.0007 1.6665C11.1057 1.6665 12.1655 2.10549 12.9469 2.88689C13.7283 3.66829 14.1673 4.7281 14.1673 5.83317V9.1665" stroke="#99A1AF" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <input
                  v-model="registerForm.password"
                  :type="showPassword ? 'text' : 'password'"
                  class="field-input"
                  placeholder="••••••••"
                />
              </div>
            </div>

            <!-- 비밀번호 확인 입력 -->
            <div class="field-group">
              <label class="field-label">비밀번호 확인</label>
              <div class="input-wrapper">
                <svg class="input-icon" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M15.8333 9.1665H4.16667C3.24619 9.1665 2.5 9.9127 2.5 10.8332V16.6665C2.5 17.587 3.24619 18.3332 4.16667 18.3332H15.8333C16.7538 18.3332 17.5 17.587 17.5 16.6665V10.8332C17.5 9.9127 16.7538 9.1665 15.8333 9.1665Z" stroke="#99A1AF" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M5.83398 9.1665V5.83317C5.83398 4.7281 6.27297 3.66829 7.05437 2.88689C7.83577 2.10549 8.89558 1.6665 10.0007 1.6665C11.1057 1.6665 12.1655 2.10549 12.9469 2.88689C13.7283 3.66829 14.1673 4.7281 14.1673 5.83317V9.1665" stroke="#99A1AF" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <input
                  v-model="registerForm.confirmPassword"
                  :type="showPassword ? 'text' : 'password'"
                  class="field-input"
                  placeholder="••••••••"
                />
              </div>
            </div>

            <!-- 회원가입 버튼 -->
            <button class="btn-login" @click="handleRegister" :disabled="isLoading">
              <span v-if="isLoading">회원가입 중...</span>
              <span v-else>회원가입</span>
            </button>
          </div>
        </div>

        <!-- 하단 특징 카드 3개 -->
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
              <path d="M25.4537 10H14.5446C12.5363 10 10.9082 11.6281 10.9082 13.6364V26.3636C10.9082 28.3719 12.5363 30 14.5446 30H25.4537C27.462 30 29.09 28.3719 29.09 26.3636V13.6364C29.09 11.6281 27.462 10 25.4537 10Z" fill="url(#footer_g1)" stroke="#808080" stroke-width="0.363636"/>
              <circle cx="17" cy="17" r="6" fill="url(#footer_r1)"/>
              <rect x="6.5" y="16.5" width="5" height="3" rx="1.5" fill="url(#footer_g2)" stroke="#808080" stroke-width="0.27"/>
              <rect x="28.5" y="16.5" width="5" height="3" rx="1.5" fill="url(#footer_g3)" stroke="#808080" stroke-width="0.27"/>
              <rect x="14.5" y="29.2" width="3.5" height="4.5" rx="1.5" fill="url(#footer_g4)" stroke="#808080" stroke-width="0.27"/>
              <rect x="22.2" y="29.2" width="3.5" height="4.5" rx="1.5" fill="url(#footer_g5)" stroke="#808080" stroke-width="0.27"/>
              <circle cx="20" cy="8.2" r="1.1" fill="#DB1A1A" opacity="0.8"/>
              <circle cx="16.4" cy="16.4" r="1.8" fill="#2C687B"/>
              <circle cx="23.6" cy="16.4" r="1.8" fill="#2C687B"/>
              <circle cx="17" cy="15.9" r="0.7" fill="white"/>
              <circle cx="24.2" cy="15.9" r="0.7" fill="white"/>
              <path d="M16.4 20 C18.8 21.8 21.2 21.8 23.6 20" stroke="#2C687B" stroke-width="0.55" stroke-linecap="round"/>
              <circle cx="12.7" cy="19.1" r="1.8" fill="url(#footer_r2)"/>
              <circle cx="27.3" cy="19.1" r="1.8" fill="url(#footer_r3)"/>
              <defs>
                <linearGradient id="footer_g1" x1="10.9" y1="10" x2="30.8" y2="28" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#C0C0C0"/><stop offset="0.5" stop-color="#E8E8E8"/><stop offset="1" stop-color="#A0A0A0"/>
                </linearGradient>
                <radialGradient id="footer_r1" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(15 12) scale(6)">
                  <stop stop-color="white" stop-opacity="0.6"/><stop offset="1" stop-color="white" stop-opacity="0"/>
                </radialGradient>
                <linearGradient id="footer_g2" x1="6.5" y1="16.5" x2="8.5" y2="20.5" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#C0C0C0"/><stop offset="0.5" stop-color="#E8E8E8"/><stop offset="1" stop-color="#A0A0A0"/>
                </linearGradient>
                <linearGradient id="footer_g3" x1="28.5" y1="16.5" x2="30.5" y2="20.5" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#C0C0C0"/><stop offset="0.5" stop-color="#E8E8E8"/><stop offset="1" stop-color="#A0A0A0"/>
                </linearGradient>
                <linearGradient id="footer_g4" x1="14.5" y1="29.2" x2="18" y2="33.7" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#C0C0C0"/><stop offset="0.5" stop-color="#E8E8E8"/><stop offset="1" stop-color="#A0A0A0"/>
                </linearGradient>
                <linearGradient id="footer_g5" x1="22.2" y1="29.2" x2="25.7" y2="33.7" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#C0C0C0"/><stop offset="0.5" stop-color="#E8E8E8"/><stop offset="1" stop-color="#A0A0A0"/>
                </linearGradient>
                <radialGradient id="footer_r2" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(12.7 19.1) scale(1.8)">
                  <stop stop-color="#DB1A1A" stop-opacity="0.6"/><stop offset="1" stop-color="#DB1A1A" stop-opacity="0"/>
                </radialGradient>
                <radialGradient id="footer_r3" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(27.3 19.1) scale(1.8)">
                  <stop stop-color="#DB1A1A" stop-opacity="0.6"/><stop offset="1" stop-color="#DB1A1A" stop-opacity="0"/>
                </radialGradient>
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
const activeTab = ref('login')
const showPassword = ref(false)
const isLoading = ref(false)

const form = reactive({
  email: '',
  password: ''
})

const registerForm = reactive({
  email: '',
  password: '',
  confirmPassword: ''
})

// ── 메서드 ────────────────────────────────────────
async function handleLogin() {
  if (!form.email || !form.password) {
    alert('이메일과 비밀번호를 입력해주세요.')
    return
  }
  isLoading.value = true
  try {
    // TODO: 실제 로그인 API 호출로 교체하세요.
    await new Promise(resolve => setTimeout(resolve, 800))
    console.log('로그인 시도:', { email: form.email })
    // router.push('/dashboard') // vue-router 사용 시 활성화
  } catch (error) {
    console.error('로그인 오류:', error)
    alert('로그인에 실패했습니다. 다시 시도해주세요.')
  } finally {
    isLoading.value = false
  }
}

async function handleRegister() {
  if (!registerForm.email || !registerForm.password || !registerForm.confirmPassword) {
    alert('모든 필드를 입력해주세요.')
    return
  }
  if (registerForm.password !== registerForm.confirmPassword) {
    alert('비밀번호가 일치하지 않습니다.')
    return
  }
  isLoading.value = true
  try {
    // TODO: 실제 회원가입 API 호출로 교체하세요.
    await new Promise(resolve => setTimeout(resolve, 800))
    console.log('회원가입 시도:', { email: registerForm.email })
    alert('회원가입이 완료되었습니다.')
    activeTab.value = 'login' // 로그인 탭으로 전환
  } catch (error) {
    console.error('회원가입 오류:', error)
    alert('회원가입에 실패했습니다. 다시 시도해주세요.')
  } finally {
    isLoading.value = false
  }
}

function handleLogout() {
  // TODO: 로그아웃 로직 구현
  console.log('로그아웃')
}
</script>

<style scoped>
/* ── CSS 변수 ─────────────────────────────────────── */
:root {
  --primary: #2C687B;
  --accent: #DB1A1A;
  --bg: #FFF6F6;
  --white: #ffffff;
  --border: #E5E7EB;
  --text-main: #1A1A1A;
  --text-sub: #4A5565;
  --text-muted: #6B7280;
  --nav-text: #364153;
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
  top: 0;
  left: 0;
  right: 0;
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
  top: -2px;
  right: -2px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--accent);
}

.logo-text {
  display: flex;
  flex-direction: column;
}

.logo-name {
  font-size: 20px;
  font-weight: 700;
  color: var(--primary);
  line-height: 28px;
}

.logo-sub {
  font-size: 10px;
  color: #6A7282;
  letter-spacing: 0.37px;
}

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
  font-weight: 400;
  text-decoration: none;
  border-radius: 10px;
  transition: background 0.15s;
}

.nav-link:hover {
  background: #F5F5F5;
}

/* 우측 액션 버튼 */
.nav-actions {
  display: flex;
  align-items: center;
  gap: 12px;
}

.btn {
  display: flex;
  align-items: center;
  gap: 6px;
  height: 32px;
  padding: 0 12px;
  font-size: 14px;
  font-weight: 500;
  border-radius: 8px;
  cursor: pointer;
  text-decoration: none;
  transition: background 0.15s;
}

.btn-outline {
  background: var(--bg);
  color: var(--text-main);
  border: 1px solid rgba(0,0,0,0.10);
}

.btn-outline:hover {
  background: #ffe8e8;
}

/* ── 메인 ────────────────────────────────────────── */
.main-content {
  flex: 1;
  padding-top: 65px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #ffffff 0%, #FFF6F6 50%, rgba(140,199,196,0.10) 100%);
  min-height: calc(100vh - 65px - 324px);
}

.login-container {
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

.mascot {
  width: 100px;
  height: 100px;
}

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

/* ── 로그인 카드 ──────────────────────────────────── */
.login-card {
  background: var(--white);
  border-radius: 16px;
  border: 1px solid var(--border);
  box-shadow: 0px 20px 25px -5px rgba(0,0,0,0.10), 0px 8px 10px -6px rgba(0,0,0,0.10);
  padding: 33px 33px 32px;
  display: flex;
  flex-direction: column;
  gap: 32px;
}

/* ✅ 수정: Tab List - row 방향으로 수정 */
.tab-list {
  display: flex;           /* ✅ Before: flex-direction: column → After: row */
  flex-direction: row;
  gap: 0;
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

/* ✅ 수정: 필드 그룹 - gap 추가 */
.field-group {
  display: flex;
  flex-direction: column;
  gap: 6px;              /* ✅ Before: gap 없음 → After: 6px */
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

.field-input::placeholder {
  color: var(--text-muted);
}

.field-input:focus {
  border-color: var(--primary);
  box-shadow: 0 0 0 3px rgba(44, 104, 123, 0.12);
}

/* 로그인 버튼 */
.btn-login {
  width: 100%;
  height: 40px;
  background: var(--accent);
  color: var(--white);
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.2s, opacity 0.2s;
  margin-top: 8px;
  font-family: inherit;
}

.btn-login:hover:not(:disabled) {
  background: #c01515;
}

.btn-login:disabled {
  opacity: 0.65;
  cursor: not-allowed;
}

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

.feature-emoji {
  font-size: 24px;
  line-height: 32px;
}

.feature-label {
  font-size: 12px;
  color: var(--text-sub);
  text-align: center;
}

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

.footer-logo {
  display: flex;
  align-items: center;
  gap: 12px;
}

.footer-logo-name {
  font-size: 20px;
  font-weight: 700;
  color: var(--white);
}

.footer-logo-sub {
  font-size: 9px;
  color: #99A1AF;
  letter-spacing: 0.39px;
}

.footer-desc {
  font-size: 16px;
  color: #D1D5DC;
  margin: 0;
}

.footer-tagline {
  font-size: 14px;
  color: #99A1AF;
  margin: 0;
}

.footer-links {
  display: flex;
  gap: 60px;
}

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

.footer-col a:hover {
  color: var(--white);
}

.footer-bottom {
  border-top: 1px solid rgba(255,255,255,0.10);
  padding: 20px 32px;
  text-align: center;
}

.footer-bottom p {
  font-size: 14px;
  color: #99A1AF;
  margin: 0;
}
</style>