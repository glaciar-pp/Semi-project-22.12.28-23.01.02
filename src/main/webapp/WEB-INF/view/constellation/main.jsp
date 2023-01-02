<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%
	String result = (String) request.getAttribute("result");
%>

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
<body style="margin:40px">
	<%@ include file="../common/top.jsp" %>
	<form action="/ncpl/constellation/main" method="post">
		<h2 class="page-subtitle">
        	${uname} 회원님
   		</h2>
   		<h1 class="page-title">
        	별자리 테스트<br>
        </h1>
        <img src="/ncpl/img/별자리 테스트_메인.jpeg" alt="캐릭터" class="character">
      	<div class="box">
			<p id="midP">1~12월 중 태어난 달은?</p><br>
			<input type="number" name="month" placeholder="태어난 달을 입력하세요."><br><br>
			<p id="midP">1~31일 중 태어난 일은?</p><br>
			<input type="number" name="day" placeholder="태어난 일을 입력하세요."><br>
		</div>
		<input type="hidden" name="result">
		<input type="submit" value="별자리 결과 보기" class="btn btn-orange">
	 	<div class="btn btn-green btn-small share-or-copy">
        주변에 알리기
    	</div>
	</form>
	<%@ include file="../common/bottom.jsp" %>
</body>
</html>