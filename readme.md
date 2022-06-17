## Vanilla JS 로 크롬앱 만들기

JS 스터디 ~.~

### event.preventDefault();

브라우저의 기본동작을 막아준다. (ex. submit을 누르면 브라우저가 새로고침되야함. )

### Local Storage

브라우저가 제공하는 API  
브라우저에 데이터를 저장할 수 있게 해준다. key , value 쌍  
(개발자 도구 -> Application -> Local Storage 에서 저장된 데이터 조회 가능 )
HTML5 스펙

#### localStorage.setItem(key,data)

#### localStorage.getItem(key)

-> 값이 존재하지 않으면 null을 리턴

#### localStorage.removeItem(key)

### PointerEvent

click 이벤트를 달아 전달된 event를 조회하면  
PointerEvent가 잡힌다.  
mouseEvent 인터페이스를 상속받는 이벤트.  
chrome, edge에서는 지원하나 safari에서는 지원에 제한이있음.

https://developer.mozilla.org/en-US/docs/Web/API/PointerEvent

### 더 공부하면 좋을점

브라우저가 데이터를 저장하는 다양한 방식에 대해
local storage 말고 또 뭐가 있으며 각자 어떻게 활용되나?

데이터를 클라이언트에 저장할 수 있는 새로우 자료 구조 Web Storage  
키/값 형태로 데이터를 저장하고 키를 기반으로 데이터르 조회한다.  
영구 저장소인 localStorage와 임시 저장소인 SessionStorage로 지속성에 따라 다르게 저장한다.

Application > storage탭에서 site data clear를 통해 날릴 수 있음
\*\*\* 당연한 얘기지만 데이터의 저장은 도메인 단위로 제한

#### LocalStorage (영구저장소)

저장한 데이터를 명시적으로 지우지 않는 이상 영구 보관.
도메인마다 별도 로컬 스토리지 생성.
도메인만 같으면 전역적으로 공유된다.
서버에 전달하는게 아닌 브라우저가 들고있는 데이터!

#### SessionStorage(임시 저장소)

데이터의 지속성과 액세스 범위에 특수한 제한이 존재한다.  
현재 브라우징 되고 있는 컨텍스트 내에서만 데이터가 유지된다.
브라우저 껏다키면 빠이
다른탭을 열거나, 브라우저 창을 하나 더 실행해도 sessionStorage는 공유되지 않는다.
새로고침한다고 사라지는건 아님

#### Cookie

웹사이트에 쿠키를 설정하면 이후 모든 웹 요청은 쿠키정보가 헤더에 포함되어 서버로 전송된다.  
네트워크 트래픽이 추가됨
개수와 용량에 제한이 있다.
최대 쿠키 20개, size는 4kb로 제한
만료일자를 지정할 수 있다.
민료일자를 지정하지 않으면 세션 쿠키가 된다. (임시 데이터)
서버와 계속 상호작용 하는데이터는 쿠키에 사용해! 로그인&유저정보&세션 등을 가지고있음

## document

### createElement

### appendChild

## JSON.stringify

JavaScript 값이나 객체를 JSON 문자열로 변환
