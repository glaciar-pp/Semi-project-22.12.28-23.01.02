<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<!DOCTYPE html>
<html lang="ko">
<head>
    <%@ include file="../common/heading.jsp" %>
    <script src="https://cdn.ckeditor.com/4.18.0/standard/ckeditor.js"></script> <!-- 글쓰기 에디터 -->
</head>

<body>
    <%@ include file="../common/top.jsp" %>

		<div class="container">
			<div class="row mt-5 mb-5">			
			<div class="card" style="padding:30px;">			
			<!-- =================== main =================== -->
            	<h3 class="page-small-subtitle"><strong>게시글 쓰기</strong></h3>
            	<hr>
                <div class="row">
		            <form action="/ncpl/board/fileupload?dest=write" method="post" enctype="multipart/form-data">
		                <table class="table table-borderless">
		                    <tr class="d-flex">
		                        <td class="col-1 me-3"><label for="title" id="midP">제목:</label></td>
		                        <td class="col-11"><input class="form-control" type="text" name="title" id="title"></td>
		                    </tr>
		                    <tr  class="d-flex">
		                        <td class="col-1 me-3" ><label for="content" id="midP">내용:</label></td>
		                        <td class="col-11">
		                        	<textarea class="form-control" name="content" id="content" rows="10"></textarea>
		                        </td>
		                    </tr>
		                    <tr class="d-flex">
		                        <td class="col-1 me-3"><label for="files" id="midP">첨부파일: </label></td>
		                        <td class="col-11"><input class="form-control" type="file" name="files" id="files" multiple></td>
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
            <!-- =================== main =================== -->

    <%@ include file="../common/bottom.jsp" %>
    <script>
        CKEDITOR.replace('content', {
            filebrowserImageUploadUrl: '/ncpl/board/imageupload',
            filebrowserUploadMethod: 'form',
            height:400, width:880,
        });
    </script>
    
</body>
</html>