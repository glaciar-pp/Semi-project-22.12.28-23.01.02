package quiz;

import java.io.IOException;
import java.util.List;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;


/**
 * Servlet implementation class BoardController
 */
@WebServlet({"/quiz/choice", "/quiz/index", "/quiz/questions",
			 "/quiz/results"})

public class QuizController extends HttpServlet {
	
	protected void service(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		String[] uri = request.getRequestURI().split("/");
		String action = uri[uri.length - 1];
		HttpSession session = request.getSession();
		String sessionUid = (String) session.getAttribute("uid");
		session.setAttribute("menu", "home");
		
		//중복적으로 나오는 항목은 상위에서 설정
		response.setCharacterEncoding("utf-8");
		response.setContentType("text/html; charset=utf-8");
		String uid = null, list = null, result = null, quiz = null, questions = null;
		RequestDispatcher rd = null;
		
		switch(action) {
		case "choice":
			request.setAttribute("quizList", list);
			rd = request.getRequestDispatcher("/WEB-INF/view/quiz/choice.jsp");
			rd.forward(request, response);
			break;
		case "index":
			request.setAttribute("quiz", quiz); //가명
			rd = request.getRequestDispatcher("/WEB-INF/view/quiz/index.jsp");
			rd.forward(request, response);
			break;
		case "questions":
			request.setAttribute("questions", questions);
			rd = request.getRequestDispatcher("/WEB-INF/view/quiz/questions.jsp");
			rd.forward(request, response);
			break;			
		case "results":
			rd = request.getRequestDispatcher("/WEB-INF/view/quiz/results.jsp");
			rd.forward(request, response);
			/* board = dao.getBoardDetail(bid); */
			result = (String) request.getAttribute("result");
			uid = request.getParameter("uid");					//게시글 작성자, 즉 게시글의 uid
			response.sendRedirect("/ncpl/quiz/results?&uid=" + uid);
			break;				
		default: 
			System.out.println(request.getMethod() + " 잘못된 경로");
		}
	}
}
