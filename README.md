# 든붕이


### 프로젝트 소개

<img src="./app/assets/images/readme/Deunbung.png" alt="project-image" height="250">

> 든붕이는 건국대학교 글로컬캠퍼스 창업 카페 ‘든든하쿠’에서 사용중인 붕어빵 미리 주문 애플리케이션으로,  
> 붕어빵을 미리 주문/결제하여 긴 대기 시간을 절약할 수 있어요!

### 진행 기간 👩🏻‍💻

- **2023.09.19 - 2023.11.29**

### 기술 스택

- ![React Native](https://img.shields.io/badge/React%20Native-61DAFB?style=flat&logo=React&logoColor=white)
  ![typescript](https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white)
  ![Axios](https://img.shields.io/badge/Axios-5A29E4?style=flat&logo=Axios&logoColor=white)
  ![Styled-component](https://img.shields.io/badge/styled%20components-DB7093?style=flat&logo=styledcomponents&logoColor=white)

### 구현한 기능

<img src="./app/assets/images/readme/gif/Deunbung_Screen.gif" alt="project-gif" height="500" style="border-radius: 30px; display: inline-block; overflow: hidden;">

**든붕이**는 긴 대기 시간과 협소한 대기 공간으로 불편한 경험을 하셨던 분들을 위해 제작되었습니다.   
든붕이를 통해 미리 주문하고 소중한 시간을 절약하세요!   

**① 주문 및 결제 간편화**   
∙ 든붕이를 통해 붕어빵을 주문하고 간편하게 결제할 수 있습니다.   
∙ 가게에 방문해 결제하거나 번거로운 현금 결제 과정을 거치지 않고도 손쉽게 주문을 완료할 수 있습니다.

**② 예상 소요 시간/대기 시간 확인**   
∙ 든붕이를 통해 현재 예상 소요 시간과 주문한 붕어빵의 대기 시간을 확인할 수 있습니다.   
∙ 이를 통해 언제 주문할지를 결정하는 데 도움을 받을 수 있습니다.   

**③ 주문 상태 확인**   
∙ 주문한 붕어빵의 상태를 실시간으로 확인할 수 있습니다.   
∙ 주문이 대기중인지, 시간이 얼마나 남았는지, 완료되었는지를 어플을 통해 확인할 수 있어, 대기 시간을 최소화할 수 있습니다.   

### URL

- [🔗 App Store 로 이동하기](https://apps.apple.com/kr/app/%EB%93%A0%EB%B6%95%EC%9D%B4/id6471925416)
- [🔗Google Play 로 이동하기](https://play.google.com/store/apps/details?id=com.reliablekkufront&pcampaignid=web_share)

### 결과 및 성과 📝
- 든붕이 사용자 App 출시 후 대략 **200명의 신규 가입자 수** 달성하였습니다.
- 든붕이를 사용하며 **주문 대기시간을 5분에서 10분가량 단축하여**, 학우들이 수업 전 바쁜 시간대에 주문 할 때 **줄을 서고 대기하는 불편함을 해소**할 수 있었습니다.

### 프로젝트 후기 🙇🏻‍♀️

- SSE를 활용한 실시간 데이터 처리
    - 프로젝트에서 실시간 주문 상태를 업데이트하기 위해 `SSE` 를 활용했습니다.
    - 이를 통해 주문 상태가 변경될 때마다 클라이언트 측에서 즉시 반영되도록 구현했습니다.
    - `SSE`를 통해 서버와의 지속적인 연결을 유지하고, 이벤트 스트림을 안정적으로 관리할 수 있었고, 실시간 주문 상태 업데이트로 사용자 경험을 크게 향상시켰습니다.
- 연결 안정성 유지
    - 실시간 데이터를 처리하면서 서버와 클라이언트 간의 지속적인 연결을 유지하는 것이 중요했습니다.
    - 네트워크 문제나 서버 장애로 인해 연결이 끊기는 상황이 발생했지만, 이를 해결하기 위해 `EventSource`를 활용했습니다.
    - `EventSource` 를 통해 연결이 끊어졌을 때 자동으로 재연결하는 로직을 구현하였고, 이를 통해 네트워크 연결이 끊어지더라도 지속적으로 데이터를 받을 수 있었습니다.
- 사용자 경험 향상
  - 앱 출시 후 직접 운영까지 하면서 사용자로부터 피드백을 받고, 이를 바로 수정하고 반영하면서 사용자 경험(UX)을 최적화하는 방법에 대해 많은 것을 배웠습니다.
  - 사용자 인터페이스를 개선하고, 앱의 응답 속도를 최적화하는 등 다양한 부분에서 사용자의 요구를 반영함으로써, 사용자 만족도를 높이는 것이 중요하다는 것을 실감했습니다.

### Documents

- [Notion](https://www.notion.so/gyeongju/df804a4f8f0c462996f7b81068b4c3da?pvs=4)
- [Figma](https://zrr.kr/8pFj)
