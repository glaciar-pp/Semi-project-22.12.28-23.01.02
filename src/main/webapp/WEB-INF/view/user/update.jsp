<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<!DOCTYPE html>
<html lang="ko">
<head>
    <%@ include file="../common/heading.jsp" %>
</head>

<body>
    <%@ include file="../common/top.jsp" %>

    <!-- =================== main =================== -->
    <div class="container">
	<div class="row">
            <div class="card">
				<div class="card-body">
            	<h3 class="page-small-subtitle"><strong>회원 정보 수정</strong></h3>
            	<hr>
		            <form action="/ncpl/user/update" method="post">
		            	<input type="hidden" name="uid" value="${user.uid}">
		                <table class="table table-borderless">
		                    <tr>
		                        <td><label for="uid" id="midP">사용자 ID</label></td>
		                        <td><input type="text" name="uid" value="${user.uid}" disabled></td>
		                    </tr>
		                    <tr>
		                        <td><label for="pwd" id="midP">패스워드</label></td>
		                        <td><input type="password" name="pwd" value=""></td>
		                    </tr>
		                    <tr>
		                        <td><label for="pwd2" id="midP">패스워드 확인</label></td>
		                        <td><input type="password" name="pwd2" value=""></td>
		                    </tr>
		                    <tr>
		                        <td><label for="uname" id="midP">이름</label></td>
		                        <td><input type="text" name="uname" value="${user.uname}"></td>
		                    </tr>
		                    <tr>
		                        <td><label for="email" id="midP">이메일</label></td>
		                        <td><input type="text" name="email" value="${user.email}"></td>
		                    </tr>
		                    <tr>
		                        <td colspan="2" style="text-align: center;">
		                            <input class="btn btn-orange" type="submit" value="&emsp;&emsp;제출&emsp;&emsp;">
		                            <input class="btn btn-gray" type="reset" value="&emsp;&emsp;취소&emsp;&emsp;">
		                        </td>
		                    </tr>
		                </table>
		            </form>
			        </div>
			    </div>
			</div>
		</div>
    <%@ include file="../common/bottom.jsp" %>
</body>
</html>