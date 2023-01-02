<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<!DOCTYPE html>
<html>
<head>
    <%@ include file="../common/heading.jsp" %>
    <link rel="stylesheet" href="/ncpl/css/common.css">
   	<style>
		.disabled-link { pointer-events: none; }
	</style>
</head>
<body>
    <%@ include file="../common/top.jsp" %>
	<!-- =================== main =================== -->
	<h2 class="page-subtitle">
        ${uname} 회원님
    </h2>
    <h1 class="page-title">
        테스트를 골라주세요 !    
    </h1>
    <!-- 한줄에 카드 2개씩 배치하는 div라는 표시 
    row-cols-md-'숫자' 부분이 한줄에 표시하고 싶은 카드 갯수 -->
	<div class="row row-cols-1 row-cols-md-3 g-3">
	<!-- 첫번째 줄 -->
	<!-- 카드 하나의 영역 -->
	<div class="col">
		<div class="card">
		<img class="card-img-top" src="/ncpl/img/별자리 테스트_메인.jpeg">
			<div class="card-body">
				 <h4 class="card-title">별자리 테스트</h4>
				 <p class="card-text">별자리로 알아보는 내 성격</p>
				 <a href="/ncpl/constellation/main" class="btn btn-green">테스트 하러가기</a>
			</div>
		</div>
	</div>
	<!-- 카드 하나의 영역 -->
	<br>
    <div class="col">
		<div class="card">
		<img class="card-img-top" src="/ncpl/img/타로 테스트_메인.jpeg">
			<div class="card-body">
				<h4 class="card-title">퍼스널 타로 테스트</h4>
				<p class="card-text">타로로 보는 요즘 나의 스트레스는?</p>
				<a href="/ncpl/taro/main" class="btn btn-green">테스트 하러가기</a>
			</div>
		</div>
	</div>
    <br>
    <div class="col">
		<div class="card">
		<img class="card-img-top" src="/ncpl/img/팩폭력 테스트_메인.jpeg">
			<div class="card-body">
				<h4 class="card-title">팩폭력 지수 테스트</h4>
				<p class="card-text">나의 팩폭력 지수는?</p>
				<a href="/ncpl/factpok/main" class="btn btn-green">테스트 하러가기</a>
			</div>
		</div>
	</div>
	<!-- 첫번째 줄 끝-->
	<!-- 두번째 줄-->
	<div class="col">
		<div class="card">
		<img class="card-img-top" src="/ncpl/img/퍼스널 테스트_메인.jpeg">
			<div class="card-body">
				<h4 class="card-title">퍼스널 컬러 테스트</h4>
				<p class="card-text">나의 퍼스널 컬러는 무슨 색일까?</p>
				<a href="/ncpl/pcolor/main" class="btn btn-green">테스트 하러가기</a>
			</div>
		</div>
	</div>
	<br>	
	<div class="col">
		<div class="card">
		<img class="card-img-top" src="/ncpl/img/강아지 테스트_메인.jpeg">
			<div class="card-body">
				<h4 class="card-title">강아지로 보는 나<br>(추후 업데이트 예정)</h4>
				<p class="card-text">다음 업데이트를 기다려주세요!</p>
				<a href="#" class="btn btn-gray disabled-link">업데이트 예정</a>
			</div>
		</div>
	</div>	
	<br>
	<div class="col">
		<div class="card">
		<img class="card-img-top" src="/ncpl/img/집콕러 테스트_메인.png">
			<div class="card-body">
				<h4 class="card-title">집콕러 테스트<br>(추후 업데이트 예정)</h4>
				<p class="card-text">다음 업데이트를 기다려주세요!</p>
				<a href="#" class="btn btn-gray disabled-link">업데이트 예정</a>
			</div>
		</div>
	</div>	
	<br>
	<div class="col">
		<div class="card">
		<img class="card-img-top" src="/ncpl/img/플라워bti 테스트_메인.jpg">
			<div class="card-body">
				<h4 class="card-title">플라워bti 테스트<br>(추후 업데이트 예정)</h4>
				<p class="card-text">다음 업데이트를 기다려주세요!</p>
				<a href="#" class="btn btn-gray disabled-link">업데이트 예정</a>
			</div>
		</div>
	</div>	
	<!-- 두번째 줄 끝-->
	<!-- 세번째 줄, 외부 심리테스트 페이지-->
	<div class="col">
		<div class="card">
		<img class="card-img-top" src="/ncpl/img/케이테스트_메인.png">
			<div class="card-body">
				<h4 class="card-title">더 많은 심리테스트가 하고 싶다면? 케이테스트</h4>
				<p class="card-text">퍼스널 컬러, 다양한bti 시리즈가 있는 곳</p>
				<a href="https://ktestone.com/" class="btn btn-green">사이트로 가기</a>
			</div>
		</div>
	</div>
	<div class="col">
		<div class="card">
		<img class="card-img-top" src="/ncpl/img/봉봉테스트_메인.png">
			<div class="card-body">
				<h4 class="card-title">더 많은 심리테스트가 하고 싶다면? 봉봉</h4>
				<p class="card-text">한번쯤은 해봤던 심리테스트들이 모여있는 곳</p>
				<a href="https://kr.vonvon.me/" class="btn btn-green">사이트로 가기</a>
			</div>
		</div>
	</div>
    </div>
	<%@ include file="../common/bottom.jsp" %>
</body>
</html>