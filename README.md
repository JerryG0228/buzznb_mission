## 🌱 프로젝트 실행 방법

```bash
# 1. 레포지토리 클론
git clone https://github.com/JerryG0228/buzznb_mission.git

# 2. 프로젝트 폴더로 이동
cd buzznb_mission

# 3. 패키지 설치
npm install
# 또는
yarn install

# 4.루트 디렉토리에 .env.local 파일 생성 및 API_KEY 설정
# API_KEY는 이메일로 보내드렸습니다.

# 5. 프로젝트 실행
npm run dev
# 또는
yarn dev
```

```bash
# 테스트 실행
npm test
# 또는
yarn test
```

<br/>

## 📁 폴더 구조

```bash
weather-app/
├── __test__/           # 테스트 코드
│   ├── components/
│   ├── └── cityMainHeader.test.tsx
│   ├── └── weatherAccordionBox.test.tsx
│   ├── graphql/
│   ├── └── getWeather.test.tsx
│   ├── └── smallSkeleton.tsx
│   └── utis/
│       └── formatDate.test.tsx
│
├── components/           # 재사용 가능한 컴포넌트
│   ├── cityMain/
│   ├── └── cityMainHeader.tsx
│   ├── └── cityMainSection.tsx
│   ├── skeleton/
│   ├── └── bigSkeleton.tsx
│   ├── └── smallSkeleton.tsx
│   └── weatherAccordian/
│       └── weatherAccordianBox.tsx
│       └── weatherAccordianArticle.tsx
│
├── graphql/             # GraphQL 관련 파일
│   ├── gqlApolloClient.ts
│   ├── gqlResolvers.ts
│   ├── gqlSchema.ts
│   └── query/
│       └── getWeather.ts
│
├── pages/              # Next.js 페이지
│   ├── _app.tsx
│   ├── index.tsx
│   ├── [city].tsx
│   └── api/
│       └── graphql.ts # GraphQL 서버
│
├── public/             # 정적 파일
│   └── earth.png
│
├── styles/             # CSS 모듈
│   ├── globals.css
│   ├── layout.module.css
│   ├── component-css/  # 컴포넌트 CSS 모듈
│   └── page-css/ # 페이지 CSS 모듈
│
├── types/              # TypeScript 타입 정의
│   └── city.ts
│
└── utils/              # 유틸리티 함수
│   └── formatDate.ts
│
└── .env.local         # 환경 변수 설정 파일
```
