# Work Automation (WA) 3.0

Next.js 14 기반의 현대/기아 자동차 해외 딜러 서비스 센터 워크플로우 자동화 시스템입니다. App Router, TypeScript, Material-UI, Tailwind CSS를 사용하여 구축되었습니다.

## 🎯 프로젝트 개요

본 프로젝트는 **현대/기아 자동차 해외 딜러 서비스 센터**의 업무 프로세스를 혁신하고 효율성을 극대화하기 위한 **워크 플로우 자동화 시스템(Work Automation, WA)** 구축을 목표로 합니다.

고객 차량의 입고부터 점검, 수리, 최종 출고에 이르는 전 과정을 디지털화하여, 각 담당자(SA, CT, TC) 간의 커뮤니케이션 오류를 최소화하고, 수리 과정의 투명성을 확보하여 궁극적으로 고객 만족도를 향상시키는 것을 목적으로 합니다.

## 🚀 기술 스택

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **UI Library**: Material-UI (MUI) v5
- **Styling**: Tailwind CSS
- **Package Manager**: Yarn
- **State Management**: React Hooks
- **Icons**: Material Icons

## 👥 사용자 역할 및 책임 (Roles & Responsibilities)

### **SA (Service Advisor)**
- 고객 응대의 첫 관문
- 고객의 서비스 요청 사항을 시스템에 등록하고 서비스 예약을 생성
- 최종 검수(FI) 후 고객에게 변경/추가 사항을 안내하고 승인을 받음
- 고객에게 차량을 인도하는 최종 책임자

### **CT (Chief Technician)**
- 서비스 센터의 기술 책임자 또는 작업 반장
- SA가 등록한 예약을 검토하고, TC에게 작업을 할당

### **TC (Technician)**
- 실제 차량의 점검과 수리를 담당하는 기술자
- 할당된 작업을 수행하며, 추가 작업이 필요한 경우 시스템에 등록

### **FI (Final Inspection)**
- 최종 검수 단계로, SA가 해당 역할을 수행
- 고객에게 안내하기 전 작업의 타당성과 내용을 최종 확인

## 🏗️ 프로젝트 구조

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # 루트 레이아웃 (MUI 테마 설정)
│   ├── page.tsx           # SA 대시보드 (메인 페이지)
│   ├── ro-list/           # RO List 페이지
│   │   └── page.tsx
│   ├── customer/          # Customer 관리 페이지
│   │   └── page.tsx
│   └── globals.css        # Tailwind + MUI 스타일
├── components/             # 재사용 가능한 컴포넌트
│   ├── layout/            # 레이아웃 컴포넌트
│   │   ├── SAHeader.tsx   # SA 전용 헤더
│   │   └── SANavigation.tsx # SA 전용 네비게이션
│   └── dashboard/         # 대시보드 컴포넌트
│       ├── KPICard.tsx    # KPI 카드
│       ├── TimelineCard.tsx # 타임라인 카드
│       └── ROTable.tsx    # RO 테이블
├── lib/                   # 유틸리티 및 설정
│   └── theme.ts          # MUI 테마 설정
└── doc/                   # 프로젝트 문서
    ├── 프로젝트 기획서.md  # 프로젝트 기획서
    └── 화면 설계서/        # UI/UX 설계 문서
        └── STYLE_GUIDE.md # 스타일 가이드
```

## 🎨 주요 기능

### **SA 대시보드**
- ✅ KPI Overview (Today's Bookings/Check-ins, FI Waiting, Scheduled Delivery, Courtesy Car Allocation)
- ✅ Today's Timeline (예약, 도착, 체크인 일정)
- ✅ RO Inbox (수리 주문 목록 및 상태 관리)
- ✅ 실시간 동기화 상태 표시

### **RO List 페이지**
- ✅ 전체 수리 주문 목록 조회
- ✅ 상태별 필터링 (New Appointment, Check-in, Created, Ready for Delivery, Completed)
- ✅ 페이지네이션 및 검색 기능

### **Customer 관리 페이지**
- ✅ 고객 정보 관리 (이름, 연락처, 주소)
- ✅ 고객별 차량 정보 및 RO 히스토리
- ✅ 고객 검색 및 필터링

## 🚀 시작하기

### 1. 의존성 설치

```bash
yarn install
```

### 2. 개발 서버 실행

```bash
yarn dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 애플리케이션을 확인하세요.

### 3. 빌드

```bash
yarn build
```

### 4. 프로덕션 서버 실행

```bash
yarn start
```

## 🎯 핵심 워크플로우

1. **접수**: 고객 방문 및 서비스 예약 (RO 생성)
2. **할당**: 작업 지시 (CT가 TC에게 작업 할당)
3. **점검**: 차량 진단 및 추가 작업 제안
4. **승인**: 고객 확인 및 작업 확정
5. **작업**: 수리 진행 및 완료
6. **출고**: 최종 확인 및 고객 인도

## 🔧 커스터마이징

### MUI 테마 수정

`src/lib/theme.ts`에서 `createTheme` 함수를 수정하여 테마를 커스터마이징할 수 있습니다.

### Tailwind CSS 설정

`tailwind.config.js`에서 Tailwind CSS 설정을 수정할 수 있습니다.

### STYLE_GUIDE 적용

`src/app/doc/화면 설계서/STYLE_GUIDE.md`에 정의된 디자인 시스템을 따라 일관된 UI를 구현합니다.

## 📱 반응형 디자인

- **Mobile First** 접근 방식
- **Tailwind CSS** 유틸리티 클래스를 활용한 반응형 레이아웃
- **Material-UI** 컴포넌트와의 완벽한 통합

## 🎨 디자인 시스템

- **다크 테마** 기반의 현대적인 UI
- **일관된 색상 팔레트** (Primary Green: #38E07A)
- **상태별 색상 코딩** (New, Active, Warning, Info, Success)
- **Typography 시스템** (Header, Body, Label 클래스)

## 🔮 향후 확장 계획

- **고객용 인터페이스**: 모바일 앱을 통한 실시간 진행 상황 확인
- **부품 재고 시스템 연동**: 실시간 부품 주문 및 관리
- **리포팅 및 분석 대시보드**: 센터 관리자를 위한 통계 데이터 시각화
- **CT/TC 역할별 인터페이스**: 역할별 맞춤형 대시보드

## 📄 라이센스

MIT

---

***본 프로젝트는 프로젝트 기획서에 정의된 요구사항을 충족하며, SA 역할을 위한 완전한 대시보드 시스템을 제공합니다.***
