<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>

<!DOCTYPE html>
<html>
<head>
	<%@ include file="../common/heading.jsp" %>
    <meta property="og:url" content="https://ncplproject.com.netlify.app/"/> 
    <link rel="icon" href="">    <!-- favicon 탭창 옆에 아이콘 그림 표시  ico 파일로 열리지 않으면 png로 링크 걸어주기 -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/reset-css@5.0.1/reset.min.css">      <!--브라우저의 기본 스타일을 초기화 -->
    <link rel="stylesheet" as="style" crossorigin href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.6/dist/web/variable/pretendardvariable-dynamic-subset.css" /> <!-- 웹 폰트 Pretendard -->
    <link rel="stylesheet" href="/ncpl/css/common.css">
	<link rel="stylesheet" href="/ncpl/css/questions.css">
	<script type="module" defer src="/ncpl/js/questions.js"></script>
</head>
<body>
	<%@ include file="../common/top.jsp" %>
	
	<form action="/ncpl/factpok/test" method="post">
		<input class="name" type="hidden" name="qNo" value="${qNo}">
		<div class="progress">
    		<div class="value" style="width:${progress}%"></div>
  		</div>
		<div class="question-box">
	 	 	<div class="question">${factpok.content}</div>
	 		<button class="btn btn-gray choice choice1" type="submit" name="op" value="ans1">${factpok.ans1}</button>
	 	 	<button class="btn btn-gray choice choice2" type="submit" name="op" value="ans2">${factpok.ans2}</button>
		</div>
		
	</form>
	<%@ include file="../common/bottom.jsp" %>
</body>
</html>