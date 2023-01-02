<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<!DOCTYPE html>
<html lang="ko">
<head>
    <%@ include file="../common/heading.jsp" %>
</head>

<body>
	<%@ include file="../common/top2.jsp" %>
    <!-- =================== main =================== -->
<div class="container">	 
		<div class="row">
		<h1 class="page-title" style="margin-top: 150px;">&#128195;회원가입&#128195;</h1>
				<div class="box" >
					<h4 class="page-subtitle">회원 정보 입력</h4>
            	<hr>
		            <form action="/ncpl/user/register" method="post">
		                <table class="table table-borderless" >
		                    <tr>
		                        <td><label for="uid">사용자 ID</label></td>
		                        <td><input type="text" name="uid" id="uid" class="form-control" placeholder="아이디"></td>
		                    </tr>
		                    <tr>
		                        <td><label for="pwd">패스워드</label></td>
		                        <td><input type="password" name="pwd" id="pwd" class="form-control" placeholder="패스워드"></td>
		                    </tr>
		                    <tr>
		                        <td><label for="pwd2">패스워드 확인</label></td>
		                        <td><input type="password" name="pwd2" id="pwd2" class="form-control" placeholder="패스워드 확인"></td>
		                    </tr>
		                    <tr>
		                        <td><label for="uname">이름</label></td>
		                        <td><input type="text" name="uname" id="uname" class="form-control" placeholder="이름"></td>
		                    </tr>
		                    <tr>
		                        <td><label for="email">이메일</label></td>
		                        <td><input type="text" name="email" id="email" class="form-control" placeholder="이메일"></td>
		                    </tr>
		                    <tr>
		                        <td colspan="2" style="text-align: center;">
		                            <input class="btn btn-green" type="submit" id="OKbtn" value="&emsp;&emsp;&emsp;제출&emsp;&emsp;&emsp;">
		                            <input class="btn btn-gray" type="reset" value="&emsp;&emsp;&emsp;취소&emsp;&emsp;&emsp;">
		                        </td>
		                    </tr>
		                </table>
		            </form>
			        </div>
			    </div>
            </div>
    <%@ include file="../common/bottom.jsp" %>
</body>
</html>