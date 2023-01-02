<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<!DOCTYPE html>
<html>
<head>
    <%@ include file="../common/heading.jsp" %>
</head>

<body>
	<%@ include file="../common/top2.jsp" %>
    <!-- =================== main =================== -->
	<div class="container">	 
		<div class="row">
		<h1 class="page-title" style="margin-top: 150px;">WELCOME!</h1>
				<div class="box" >
					<h4 class="page-subtitle">로그인</h4>
					<p id="midP">다양한 심리테스트를 즐기기 위해 로그인 해주세요!</p>
						<form action="/ncpl/user/login" method="post">
							 <table class="table table-borderless">
		                        <tr>
		                            <td><label for="uid" class="col-form-label" id="midP">아이디: </label></td>
		                            <td><input type="text" name="uid" id="uid" class="form-control" placeholder="아이디"></td>
		                        </tr>
		                        <tr>
		                        	<td></td>
		                        </tr>
		                        <tr>
		                            <td><label for="pwd" class="col-form-label" id="midP">패스워드: </label></td>
		                            <td><input type="password" name="pwd" id="pwd" class="form-control" placeholder="패스워드"></td>
		                        </tr>
		                        <tr>
		                            <td colspan="2" style="text-align: center;">
		                                <input class="btn btn-green" type="submit" value="&emsp;&emsp;로그인&emsp;&emsp;">
		                                <input class="btn btn-gray" type="reset" value="&emsp;&emsp;취소&emsp;&emsp;">
		                            </td>
		                        </tr>
		                    </table>
							<a href="/ncpl/user/register" class="card-link">아이디가 없다면? 회원가입 하러가기 &nbsp; <i class="fas fa-user-plus"></i></a>
						</form>
					</div>
				</div>
			</div>

	<!-- =================== main =================== -->
    <%@ include file="../common/bottom.jsp" %>
</body>