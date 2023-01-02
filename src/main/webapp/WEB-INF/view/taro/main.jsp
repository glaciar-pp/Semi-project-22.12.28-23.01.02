<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
	<%@ include file="../common/heading.jsp" %>
    <meta property="og:url" content="https://ncplproject.com.netlify.app/"/>    
    <link rel="icon" href="favicon.png">    <!-- favicon 탭창 옆에 아이콘 그림 표시  ico 파일로 열리지 않으면 png로 링크 걸어주기 -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/reset-css@5.0.1/reset.min.css">      <!--브라우저의 기본 스타일을 초기화 -->
    <link rel="stylesheet" as="style" crossorigin href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.6/dist/web/variable/pretendardvariable-dynamic-subset.css" /> <!-- 웹 폰트 Pretendard -->
    <link rel="stylesheet" href="/ncpl/css/common.css">
    <script defer src="/ncpl/js/share.js"></script>
</head>
<body>
	<%@ include file="../common/top.jsp" %>
	<form action="/ncpl/taro/main" method="post">
	<h2 class="page-subtitle">
        ${uname} 회원님
    </h2>
    <h1 class="page-title">
        퍼스널 타로 테스트<br>
    </h1>
    <img src="/ncpl/img/타로 테스트_메인.jpeg" alt="캐릭터" class="character">
    <a href="/ncpl/taro/test?qNo=1" class="btn btn-orange">
        테스트 시작 버튼 !
    </a>
    <div class="btn btn-green btn-small share-or-copy">
        주변에 알리기
    </div>
    </form> 
	<%@ include file="../common/bottom.jsp" %>
	<!-- <button onclick="location.href='/ncpl/taro/test?qNo=1'">테스트 시작"</button> -->
	
</body>
</html>