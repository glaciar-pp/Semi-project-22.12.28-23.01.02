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
	<form action="/ncpl/constellation/result" method="post">
	<h2 class="page-subtitle">
    ${uname} 회원님
  	</h2>
	<h1 class="page-title"></h1>
			 <c:if test="${result eq '염소자리'}">
			 	<img src="/ncpl/img/Test19_별자리/염소자리.png" class="character">
			 </c:if>
			 <c:if test="${result eq '물병자리'}">
			 	<img src="/ncpl/mg/Test19_별자리/물병자리.png" class="character">
			 </c:if>
			 <c:if test="${result eq '물고기자리'}">
			 	<img src="/ncpl/img/Test19_별자리/물고기자리.png" class="character">
			 </c:if>
			 <c:if test="${result eq '양자리'}">
			 	<img src="/ncpl/img/Test19_별자리/양자리.png" class="character">
			 </c:if>
			 <c:if test="${result eq '황소자리'}">
			 	<img src="/ncpl/img/Test19_별자리/황소자리.png" class="character">
			 </c:if>
			 <c:if test="${result eq '쌍둥이자리'}">
			 	<img src="/ncpl/img/Test19_별자리/쌍둥이자리.png" class="character">
			 </c:if>
			 <c:if test="${result eq '게자리'}">
			 	<img src="/ncpl/img/Test19_별자리/게자리.png" class="character">
			 </c:if>
			 <c:if test="${result eq '사자자리'}">
			 	<img src="/ncpl/img/Test19_별자리/사자자리.png" class="character">
			 </c:if>
			 <c:if test="${result eq '처녀자리'}">
			 	<img src="/ncpl/img/Test19_별자리/처녀자리.png" class="character">
			 </c:if>
			 <c:if test="${result eq '천칭자리'}">
			 	<img src="/ncpl/img/Test19_별자리/천칭자리.png" class="character">
			 </c:if>
			 <c:if test="${result eq '전갈자리'}">
			 	<img src="/ncpl/img/Test19_별자리/전갈자리.png" class="character">
			 </c:if>
			 <c:if test="${result eq '사수자리'}">
			 	<img src="/ncpl/img/Test19_별자리/사수자리.png" class="character">
			 </c:if>
			 
		<a href="/ncpl/quiz/choice" class="btn btn-gray btn-small">
		다른 테스트하러 가기 
		</a>

	<div class="btn btn-orange btn-small" onclick="js:kakaoShare()">
		카카오톡으로 공유하기
	</div>
		<a href="/ncpl/constellation/main" class="btn btn-gray btn-small">
			다시 테스트하기
		</a>
	<div class="btn btn-green btn-small share-or-copy" >
		링크 공유하기
	</div>
	</form>
	<%@ include file="../common/bottom.jsp" %>

</body>
</html>