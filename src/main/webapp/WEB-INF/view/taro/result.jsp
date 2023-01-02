<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>

<!DOCTYPE html>
<html>
<head>
	<%@ include file="../common/heading.jsp" %>
    <meta property="og:url" content="https://ncplproject.com.netlify.app/"/>

	<link rel="icon" href="favicon.png">
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/reset-css@5.0.1/reset.min.css">
	<link rel="stylesheet" as="style" crossorigin href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.6/dist/web/variable/pretendardvariable-dynamic-subset.css" />
	<link rel="stylesheet" href="/ncpl/css/common.css">
	<script defer src="/ncpl/js/share.js"></script>
	<script defer src="/ncpl/js/share2.js"></script>
	<script src="https://developers.kakao.com/sdk/js/kakao.js"></script>
	<script>
        Kakao.init('65c26112bae4d5f27cc617be7d942350');  
        Kakao.isInitialized();  
    </script>
	<script>
		Kakao.init('65c26112bae4d5f27cc617be7d942350');
		Kakao.isInitialized();
	</script>
</head>
<body>
	<%@ include file="../common/top.jsp" %>
	<form action="/ncpl/taro/result" method="post">
	<h2 class="page-subtitle">
    ${uname} 회원님
  	</h2>
	<h1 class="page-title"></h1>
			<c:if test="${result eq 'ESFP'}">
				<img src="/ncpl/img/Test15_타로/ESFP.png" class="character">
			</c:if>
			<c:if test="${result eq 'ENFP'}">
				<img src="/ncpl/img/Test15_타로/ENFP.png" class="character">
			</c:if>
			<c:if test="${result eq 'ESTP'}">
				<img src="/ncpl/img/Test15_타로/ESTP.png" class="character">
			</c:if>
			<c:if test="${result eq 'ESFJ'}">
				<img src="/ncpl/img/Test15_타로/ESFJ.png" class="character">
			</c:if>
			<c:if test="${result eq 'ENTP'}">
				<img src="/ncpl/img/Test15_타로/ENTP.png" class="character">
			</c:if>
			<c:if test="${result eq 'ENTJ'}">
				<img src="/ncpl/img/Test15_타로/ENTJ.png" class="character">
			</c:if>
			<c:if test="${result eq 'ENFJ'}">
				<img src="/ncpl/img/Test15_타로/ENFJ.png" class="character">
			</c:if>
			<c:if test="${result eq 'ESTJ'}">
				<img src="/ncpl/img/Test15_타로/ESTJ.png" class="character">
			</c:if>
			<c:if test="${result eq 'ISFP'}">
				<img src="/ncpl/img/Test15_타로/ISFP.png" class="character">
			</c:if>
			<c:if test="${result eq 'INFP'}">
				<img src="/ncpl/img/Test15_타로/INFP.png" class="character">
			</c:if>
			<c:if test="${result eq 'ISTP'}">
				<img src="/ncpl/img/Test15_타로/ISTP.png" class="character">
			</c:if>
			<c:if test="${result eq 'ISFJ'}">
				<img src="/ncpl/img/Test15_타로/ISFJ.png" class="character">
			</c:if>
			<c:if test="${result eq 'INTP'}">
				<img src="/ncpl/img/Test15_타로/INTP.png" class="character">
			</c:if>
			<c:if test="${result eq 'INTJ'}">
				<img src="/ncpl/img/Test15_타로/INTJ.png" class="character">
			</c:if>
			<c:if test="${result eq 'INFJ'}">
				<img src="/ncpl/img/Test15_타로/INFJ.png" class="character">
			</c:if>
			<c:if test="${result eq 'ISTJ'}">
				<img src="/ncpl/img/Test15_타로/ISTJ.png" class="character">
			</c:if>

		<a href="/ncpl/quiz/choice" class="btn btn-gray btn-small">
		다른 테스트하러 가기 
		</a>

	<div class="btn btn-orange btn-small" onclick="js:kakaoShare()">
		카카오톡으로 공유하기
	</div>
		<a href="/ncpl/taro/main" class="btn btn-gray btn-small">
			다시 테스트하기
		</a>
	<div class="btn btn-green btn-small share-or-copy" >
		링크 공유하기
	</div>
	</form>
	<%@ include file="../common/bottom.jsp" %>
</body>
</html>
		