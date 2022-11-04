## 👨‍👩‍👧‍👦 9팀

## **✨ 배포링크**

### [pre-onboarding-7th-2-1-9](https://pre-onboarding-7th-2-2-0.vercel.app/)

<br>

## 📝 Description 
차량 대여를 위해 차량 목록을 불러오는 사이트입니다.  
전역 상태 관리는 React에 내장되어있는 Context API를 사용했고, 
스타일 라이브러리는 Styled-components를 사용했습니다.

<br>

## 🛠️ Dev Tools

<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"> <img src="https://img.shields.io/badge/styled_components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white"> <img src="https://img.shields.io/badge/amazon_S3-569A31?style=for-the-badge&logo=amazons3&logoColor=white"> 

<br>

## 📝 API 보러가기 

### [B2C Car sharing API](https://principled-bergamot-e8d.notion.site/API-3f5f9809a5734abab91130f60f2ea27b)
과제에 사용된 API 상세 설명입니다. 

<br>

## 💅 Figma 보러가기 

### [B2C Car Figma](https://www.figma.com/file/XdncFdXWdILLifRIJKqIi1/%EC%8B%A4%EB%AC%B4%ED%98%95-%EB%A9%B4%EC%A0%91---%EC%9B%B9-%ED%94%84%EB%A1%A0%ED%8A%B8)
과제에서 요구사항으로 주어진 Figma입니다. 

<br>

## 👨‍👩‍👧‍👦 팀 토의 보러가기 

### [B2C Car Team Discussion](https://github.com/Wanted-07-team-9/pre-onboarding-7th-2-1-9/discussions)
팀 토의를 통해 코드 리뷰를 진행했습니다. 



<br>

## 📝 목차

- [🛠️ Dev Tools](https://wanted-07-team-9.github.io/wanted_assignment_02/)
- [🖥 프로젝트 실행 방법](https://wanted-07-team-9.github.io/wanted_assignment_02/)

<br>

## **🖥 프로젝트 실행 방법**

```sh
git clone git@github.com:crystal993/pre-onboarding-7th-2-2-0.git

yarn install

yarn start

open http://localhost:3000
```
<br>

## **📝 디렉토리 구조**

<details>
<summary>- 디렉토리 구조</summary>
<div markdown="1">

```
📂src
|   📄App.js
|   📄index.js
|
+---📂api
|       📄 apis.js
|       📄 axiosInstance.js
|       📄 carService.js
|
+---📂assets
|   \---📂icons
|           📄icon_back.svg
|
+---📂components
|   +---📂detail
|   |       📄DetailContainer.jsx
|   |       📄DetailInfoBar.jsx
|   |       📄DetailSectionBar.jsx
|   |
|   +---📂elements
|   |       📄Badge.jsx
|   |       📄Button.jsx
|   |       📄MsgBox.jsx
|   |
|   +---📂layout
|   |       📄Header.jsx
|   |       📄Layout.jsx
|   |
|   +---📂main
|   |       📄CarItem.jsx
|   |       📄CarList.jsx
|   |       📄FilteringBar.jsx
|   |       📄SwiperTags.jsx
|   |
|   \---📂metaTag
|           📄SEOMetaTag.jsx
|
+---📂context
|       📄actionTypes.js
|       📄CarListProvider.js
|       📄CarListReducer.js
|
+---📂pages
|       📄Detail.jsx
|       📄Main.jsx
|       📄NotFound.jsx
|
+---📂router
|       📄Routers.jsx
|
+---📂styles
|       📄GlobalStyle.jsx
|       📄theme.js
|
\---📂utils
    +---📂constant
    |       📄fuelTypeOption.js
    |       📄segmentOption.js
    |
    \---📂function
            📄convertAmount.js
            📄convertOption.js
            📄convertUsableDate.js
            📄IsCreatedWithinDay.js
```

</div>
</details>

<br>

## 🔒 팀 규칙

<details>
<summary>커밋 규칙</summary>
<div markdown="1">

## **commit message 규칙**

⭐ feat : 새로운 기능에 대한 커밋

🛠 fix : 버그 수정에 대한 커밋

🧱 build : 빌드 관련 파일 수정에 대한 커밋

👏 chore : 그 외 자잘한 수정에 대한 커밋

⚒ refactor :  코드 리팩토링에 대한 커밋

🎨 style : 코드 스타일 혹은 포맷 등에 관한 커밋

✏ docs : 문서 수정에 대한 커밋

💡 ci : CI관련 설정 수정에 대한 커밋

🚫 제목 끝에 마침표 금지
⚠ 무엇을 했는지 명확하게 작성

</div>
</details>

<br>

<details>
<summary>코딩 컨벤션 규칙</summary>
<div markdown="1">

## **코딩 컨벤션**

- 컴포넌트의 ID사용은 지양한다.
- react의 state는 여러개 사용시 최소 집합을 찾아 사용한다.
- 컴포넌트의 이벤트에서 불필요한 익명함수를 사용하지 않는다. (예시: 함수의 인자가 event 하나인 경우)
- 코드를 설명하는 주석은 가급적 사용하지 않는다.
- 상수는 영문 대문자 스네이크 표기법(Snake case)를 사용한다.(예시: SYMBOLIC_CONSTANTS)
- 반환 값이 불린인 함수는 'is'로 시작한다
- const와 let은 사용 시점에 선언 및 할당한다.
- 함수는 사용 전에 선언해야 하며, 함수 선언문은 변수 선언문 다음에 오도록 한다.
- 이벤트 핸들러는 'on'으로 시작한다.
- 한 줄짜리 블록일 경우라도 {}를 생략하지 않으며 명확히 줄 바꿈 하여 사용한다.

</div>
</details>

<details>
<summary>Lint, Formatter 규칙</summary>
<div markdown="1">

## **Prettier, ESLint 규칙 **

##### prettier

```
  printWidth: 100, // printWidth default 80 => 100 으로 변경
  singleQuote: true, // "" => ''
  arrowParens: 'avoid', // arrow function parameter가 하나일 경우 괄호 생략
```

##### ESLint

```
  printWidth: 100, // printWidth default 80 => 100 으로 변경
  singleQuote: true, // "" => ''
  arrowParens: 'avoid', // arrow function parameter가 하나일 경우 괄호 생략
```

- </div>
  </details>

<br>

### 공통 Lib

- eslint
- eslint-config-prettier
- husky
- prettier

### production

- react-router-dom
- axios

### dev

- tailwindcss
</div>
</details>

<br>

## 구현 목록
### Assignment 1: heavy_check_mark:
- 필수 요구 사항 
    - Figma 상의 디자인 및 기능 구현 
        - 차량 리스트 
            - 차량이 없을 때 처리
            - 차량 불러오는 중 처리
        - 차량 상세

###  - 추가 구현 사항 :heavy_multiplication_x:
   - SEO
        - 카카오톡, 페이스북에 공유 시 아래의 내용이 미리보기로 노출되도록 해야 함
            - 제목: car.brand + [car.name](http://car.name/)
            - 내용: 월 car.amount 원
            - 사진: 차량 사진

<br>

# Assignment 1

- Figma 상의 디자인 및 기능 구현
   - 모바일 웹 기준으로 제작
   - 450px ~ 360px까지 고려해서 제작
- 필수 요구 사항
   - Figma 상의 디자인 및 기능 구현

Chrome | Whale
---- | ---- 
![크롬반응형](https://user-images.githubusercontent.com/72599761/199722511-399108d5-817c-4daf-9f5c-a278cef7dae6.gif) | ![웨일반응형](https://user-images.githubusercontent.com/72599761/199722531-bb1a66ea-f4d6-4f06-b87d-f1b365a05457.gif)

<br>

# Assignment 2

- 차량 리스트 

차량이 없을 때 | 차량을 불러올 때
---- | ---- 
![image](https://user-images.githubusercontent.com/72599761/199723458-dfbd535c-5ba7-4c38-b629-10a948aa95e7.png) | ![image](https://user-images.githubusercontent.com/72599761/199723134-b689d065-ed70-4b0b-99c6-6d55254485be.png)

## 차량이 없을 때, 차량을 불러올 때 
-  CarList.jsx

https://github.com/crystal993/B2C-Car-Sharing/blob/57ac8983164cb883e4eb1a66edbb22c8eed7f68a/src/components/main/CarList.jsx#L8-L42

차량을 불러올 때와 차량이 없을 때 텍스트를 다르게 해서 `MsgBox` 컴포넌트를 재사용했습니다. 
Context API에서 전역으로 관리하는 isloading 변수가 true일 때 불러오는 중을 표시하고, 
 Context API에서 전역으로 관리하는 carList 변수의 배열의 길이가 0일 때 차량이 없습니다를 표시합니다. 

<br>

# Assignment 3
- 차량 상세
![image](https://user-images.githubusercontent.com/72599761/199726247-3e5f1fea-d2ee-4e6a-b25d-daa6fc9f656e.png)

https://github.com/crystal993/B2C-Car-Sharing/blob/57ac8983164cb883e4eb1a66edbb22c8eed7f68a/src/components/main/CarItem.jsx#L8-L29


<br>

# Assignment 4 (추가 구현 사항) - SEO

https://github.com/crystal993/B2C-Car-Sharing/blob/57ac8983164cb883e4eb1a66edbb22c8eed7f68a/src/components/metaTag/SEOMetaTag.jsx#L1-L22

![image](https://user-images.githubusercontent.com/72599761/199739247-b1f949a4-e1f2-4a2d-84c2-44700f9347e4.png)


- react-helmet을 적용하면  메타태그들과 title이 동적으로 바뀌는 것을 볼 수 있었습니다.  
- SNS 공유 할 때는 SNS 크롤러 봇이 CSR의 메타태그들을 인식하지 못했습니다. 
- nextjs나 cloudfront + Lambda로 SEO를 적용해볼 예정입니다. 


<br>

# Assignment 5 (추가 구현 사항)

## 5-1. 태그 스와이퍼 기능 구현 
![스와이퍼기능구현](https://user-images.githubusercontent.com/72599761/199727335-ddbdee7e-462b-471e-bd2e-64c8374f9821.gif)

https://github.com/crystal993/B2C-Car-Sharing/blob/57ac8983164cb883e4eb1a66edbb22c8eed7f68a/src/components/main/SwiperTags.jsx#L10-L43

- Swiper.js 리액트 버전을 사용하여 구현하였습니다. 
- 한 슬라이드에 5개가 보이도록 구현하고, 초기값을 3번째 인덱스에 존재하는 태그로 지정해주었습니다. 

<br>

## 5-2. 각종 util함수와 상수들 

### 차종, 연료 변환 

![image](https://user-images.githubusercontent.com/72599761/199728706-1eef5ac8-74d8-45c0-acac-da47c61dcf94.png)

실제로 서버 API로 응답받는 데이터와 요구사항으로 주어지는 화면상의 데이터 형태가 달랐습니다.  
사용자가 보기 쉽게 구현해야만 했습니다. 

<br>

#### segmentOption, fuelTypeOption 함수 
https://github.com/crystal993/B2C-Car-Sharing/blob/57ac8983164cb883e4eb1a66edbb22c8eed7f68a/src/utils/constant/segmentOption.js#L1-L9
- option을 value, name으로 나눠서 API로 받아오는 값을 value, 화면상에 보여지는 값을 name으로 분류하여 파일을 만들어서 따로 관리하였습니다. 

https://github.com/crystal993/B2C-Car-Sharing/blob/57ac8983164cb883e4eb1a66edbb22c8eed7f68a/src/utils/function/convertOption.js#L1-L22

- segment와 fuelType option의 value를 이름으로 변환해주는 함수이다. 
- 서버에서 받은 값을 화면 상에 UI로 보기 쉽게 변환해주는 함수입니다. 
- segVal은 서버에서 받아오는 segment값이므로 segmentOption 배열에 filter로 value와 일치하면 name을 반환하게끔 코드를 짰습니다. 

<br>

### 돈 단위 변환 
![image](https://user-images.githubusercontent.com/72599761/199732574-6b191def-5e79-482f-9348-fa2e522c642e.png)

https://github.com/crystal993/B2C-Car-Sharing/blob/57ac8983164cb883e4eb1a66edbb22c8eed7f68a/src/utils/function/convertAmount.js#L1-L3

<br>

### 이용 가능 날짜 변환 

https://github.com/crystal993/B2C-Car-Sharing/blob/57ac8983164cb883e4eb1a66edbb22c8eed7f68a/src/utils/function/convertUsableDate.js#L1-L9

<br>

## 5-3. GlobalStyle과 Theme으로 스타일 관리 

### GlobalStyle 

https://github.com/crystal993/B2C-Car-Sharing/blob/57ac8983164cb883e4eb1a66edbb22c8eed7f68a/src/styles/GlobalStyle.jsx#L1-L33

- styled-reset을 이용해서 전체 style을 초기화 시켰습니다. 
- :root로 전체 font-size를 10px로 주고, 10px이 1rem이 되도록 만들었습니다. 
- 과제 요구사항으로 주어진 Inter font를 적용했습니다. 

```javascript
:root {
    font-size: 10px;
  }
```

<br>

### Theme 

https://github.com/crystal993/B2C-Car-Sharing/blob/57ac8983164cb883e4eb1a66edbb22c8eed7f68a/src/styles/theme.js#L1-L12

- 과제 요구사항으로 주어진 색상과 반응형 크기를 Theme에서 관리하여 styled-components에서 props로 받아서 사용할 수 있도록 했습니다. 


## 💡 logic

### :one: logic one

https://github.com/Wanted-07-team-9/pre-onboarding-7th-2-1-9/blob/420610c33258cf72482fe9e3f5c77ccc89ce2249/src/App.js#L1-L3


# 프리온보딩 9팀

| <img src="https://avatars.githubusercontent.com/u/58911113?v=4" width="120" height="120" /> | <img src="https://avatars.githubusercontent.com/u/74575497?v=4" width="120" height="120" /> | <img src="https://avatars.githubusercontent.com/u/72599761?v=4" width="120" height="120"/> |
| :-----------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------: |
|                                           👑 권준                                           |                                           김경훈                                            |                                           김수정                                           |
|                            [@jun-05](https://github.com/jun-05)                             |                          [@tirhande](https://github.com/tirhande)                           |                        [@crystal993](https://github.com/crystal993)                        |

| <img src="https://avatars.githubusercontent.com/u/104307213?v=4" width="120" height="120"/> | <img src="https://avatars.githubusercontent.com/u/94212747?v=4" width="120" height="120" /> | <img src="https://avatars.githubusercontent.com/u/77476348?v=4"  width="120" height="120" /> | <img src="https://avatars.githubusercontent.com/u/76990149?v=4" width="120" height="120"/> |
| :-----------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------: |
|                                           송슬기                                            |                                           오나래                                            |                                            이창훈                                            |                                           전이진                                           |
|                          [@songseul](https://github.com/songseul)                           |                            [@NR0617](https://github.com/NR0617)                             |                 [@anotheranotherhoon](https://github.com/anotheranotherhoon)                 |                          [@pongdang](https://github.com/pongdang)                          |

