<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<!DOCTYPE html>
<html lang="ko">
<head>
    <%@ include file="../common/heading.jsp" %>

</head>

<body>
    <%@ include file="../common/top.jsp" %>

 	<div class="container">
		<div class="row mt-5 mb-5">			
		<div class="card" style="padding:30px;">
            <!-- =================== main =================== -->
				<h3 class="card-title"><strong>회원 탈퇴</strong></h3>
				<hr>
				<p id="warnP">정말 탈퇴하시겠습니까?<br>모든 정보가 사라집니다.</p>
				<p class="card-text text-center">
				<br>
				<button class="btn btn-green" onclick="location.href='/ncpl/user/deleteConfirm?uid=${param.uid}'">&emsp;&emsp;삭제&emsp;&emsp;</button>
				<button class="btn btn-gray" onclick="location.href='/ncpl/quiz/choice'">&emsp;&emsp;취소&emsp;&emsp;</button>
				</p>
	        </div>
	    </div>			            
	</div>
	<!-- =================== main =================== -->
    <%@ include file="../common/bottom.jsp" %>
</body>
</html>