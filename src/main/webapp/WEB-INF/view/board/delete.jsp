<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<!DOCTYPE html>
<html lang="ko">
<head>
    <%@ include file="../common/heading.jsp" %>
    <style>
        th, td { text-align: center; }
    </style>
</head>

<body>
    <%@ include file="../common/top.jsp" %>

	<div class="container">
		<div class="row mt-5 mb-5">			
		<div class="card" style="padding:30px;">
		<!-- =================== main =================== -->
			<h3 class="card-title"><strong>게시글 삭제</strong></h3>
            	<hr>
                 <p id="warnP">정말로 삭제하시겠습니까?</p>
                 <p class="card-text text-center">
                     <br>
                     <button class="btn btn-green" onclick="location.href='/ncpl/board/deleteConfirm?bid=${param.bid}'">&emsp;&emsp;삭제&emsp;&emsp;</button>
                     <button class="btn btn-gray" onclick="location.href='/ncpl/board/list?p=${currentBoardPage}&f=&q='">&emsp;&emsp;취소&emsp;&emsp;</button>
                 </p>
	        </div>
	    </div>			            
	</div>
            <!-- =================== main =================== -->
    <%@ include file="../common/bottom.jsp" %>
</body>
</html>