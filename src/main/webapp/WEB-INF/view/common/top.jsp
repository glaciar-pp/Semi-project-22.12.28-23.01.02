<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<nav class="navbar navbar-expand-md navbar-light fixed-top">
	<div class="container-fluid">
		<ul class="navbar-nav">
		<img src="../img/Logo.png" alt="Logo" style="height:50px;" class="rounded-3 ms-3 me-3">
			<li class="nav-item">
				<a class="nav-link" href="/ncpl/quiz/choice"><i class="fa-solid fa-house"></i>테스트 Home</a>
			</li>
			<li class="nav-item ms-3">
				<a class="nav-link" href="/ncpl/board/list?p=1&f=&q="><i class="far fa-list-alt"></i> 게시판</a>
			</li>
			<li class="nav-item ms-3">
				<a class="nav-link" href="/ncpl/user/delist?uid=${uid}"><i class="fas fa-user-friends"></i> my page</a>
			</li>
			<li class="nav-item ms-3">
				<c:if test="${not empty uid}">
				<a class="nav-link" href="/ncpl/user/logout"><i class="fas fa-sign-out-alt"></i> 로그아웃</a>
				</c:if>
				<c:if test="${empty uid}">
	  			<a class="nav-link" href="/ncpl/user/login"><i class="fas fa-sign-out-alt"></i> 로그인</a>
				</c:if>
			</li>
		</ul>
	<span class="navbar-text me-3">${uname}님 환영합니다.</span>
	</div>
</nav>