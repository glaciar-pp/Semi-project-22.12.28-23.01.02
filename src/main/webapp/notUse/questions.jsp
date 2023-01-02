<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
	<%-- <%@ include file="../common/heading.jsp" %> --%>
    <meta property="og:url" content="https://ncplproject.com.netlify.app/"/> 
    <link rel="icon" href="">    <!-- favicon 탭창 옆에 아이콘 그림 표시  ico 파일로 열리지 않으면 png로 링크 걸어주기 -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/reset-css@5.0.1/reset.min.css">      <!--브라우저의 기본 스타일을 초기화 -->
    <link rel="stylesheet" as="style" crossorigin href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.6/dist/web/variable/pretendardvariable-dynamic-subset.css" /> <!-- 웹 폰트 Pretendard -->
    <link rel="stylesheet" href="../css/common.css">
	<link rel="stylesheet" href="../css/questions.css">
	<script type="module" defer src="../js/questions.js"></script>
</head>
<body>
	<%-- <%@ include file="../common/top.jsp" %> --%>
	<form action="/ncpl/quiz/questions" method="post">
	<div class="progress">
    	<div class="value"></div>
  	</div>
  	<div class="question-box">
   		<div class="number"></div>
    	<div class="question"></div>
	    <div class="btn btn-gray choice choice1"></div>
	    <div class="btn btn-gray choice choice2"></div>    
  	</div>
  	</form>
  	<%-- <%@ include file="../common/bottom.jsp" %> --%>
</body>
</html>