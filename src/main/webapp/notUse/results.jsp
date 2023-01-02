<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
	<%-- <%@ include file="../common/heading.jsp" %> --%>
    <meta property="og:url" content="https://ncplproject.com.netlify.app/"/>

	<link rel="icon" href="favicon.png">
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/reset-css@5.0.1/reset.min.css">
	<link rel="stylesheet" as="style" crossorigin href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.6/dist/web/variable/pretendardvariable-dynamic-subset.css" />
	<link rel="stylesheet" href="../css/common.css">
	<link rel="stylesheet" href="../css/results.css">
	<script defer src="../js/share2.js"></script>
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
	<%-- <%@ include file="../common/top.jsp" %> --%>
	<!-- =================== main =================== -->
	<form action="/ncpl/quiz/results" method="post">
	<h2 class="page-subtitle">
    ${uname} 회원님
  	</h2>
	<h1 class="page-title"></h1>
	<img src="" alt="캐릭터" class="character">
	<div class="result">
		<div class="box"></div>
	</div>
	<div class="result">
		<a href="/ncpl/quiz/choice" class="btn btn-gray btn-small">
		다른 테스트하러 가기 
		</a>
	</div>
 
	<div class="btn btn-orange btn-small share-or-copy" onclick="js:kakaoShare()">
		카카오톡으로 공유하기
	</div>
		<a href="/" class="btn btn-gray btn-small">
			다시 테스트하기
		</a>
	<div class="btn btn-green btn-small" >
		링크 공유하기
	</div>
	</form>
<%-- 	<%@ include file="../common/bottom.jsp" %> --%>
</body>
</html>