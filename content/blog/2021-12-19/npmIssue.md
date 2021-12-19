---
title: npm install issue The operation was rejected by your operating system. npm ERR 오류
date: "2021-12-19"
description: npm install 오류
categories: Issue
---

### npm install issue The operation was rejected by your operating system. npm ERR

블로그 외부 링크 클릭시 새창으로 열기 위해 \_blank 태그를 추가하니 경고가 나타났다.

 <img src="npmIssue1.png" width="600px" height="350px" title="error"/>

gatsby 블로그 작업 종료 후 에러가 나타나서 보니 gatsby 업데이트를 하라는것 같아서 업데이트를 진행했더니 오류가 발생된다.

<img src="npmIssue2.png" width="600px" height="350px" title="error"/>

파일에 액세스 할 권한이 없다고 한다.

해결 방법으로 관리자 권한을 부여해 다시 명령을 실행해준다.

<img src="npmIssue3.png" width="600px" height="350px" title="error"/>

이제 정상적으로 설치가 된다.

<img src="npmIssue4.png" width="600px" height="350px" title="error"/>
