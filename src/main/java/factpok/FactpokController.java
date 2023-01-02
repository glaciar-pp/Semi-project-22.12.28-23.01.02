package factpok;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

/**
 * Servlet implementation class FactpokController
 */
@WebServlet({"/factpok/main", "/factpok/test", "/factpok/result"})
public class FactpokController extends HttpServlet {
	
	protected void service(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String[] uri = request.getRequestURI().split("/");
		String action = uri[uri.length - 1];
		request.setCharacterEncoding("UTF-8");	
		HttpSession session = request.getSession();
		session.setAttribute("menu", "factpok");
		FactpokDao dao = new FactpokDao();
		int s1 = 0, s2 = 0, s3 = 0, s4 = 0;
		String result = null;
		
		RequestDispatcher rd = null;
		int qNo;
		
		Factpok factpok = null;
		response.setContentType("text/html; charset=utf-8");
		switch(action) {
		case "main":
			rd = request.getRequestDispatcher("/WEB-INF/view/factpok/main.jsp");
			rd.forward(request, response);	
			break;
		case "test":
			if (request.getMethod().equals("GET")) {
				qNo = Integer.parseInt(request.getParameter("qNo"));
				if (qNo == 1) {			// 최초 실행, 초기화 
					session.setAttribute("s1", 0);
					session.setAttribute("s2", 0);
					session.setAttribute("s3", 0);
					session.setAttribute("s4", 0);
				}
				if (qNo == 13) {		// 최종 실행, result로 이동
					response.sendRedirect("/ncpl/factpok/result");
				} else {
					factpok = dao.getQuesInfo(qNo);
					request.setAttribute("progress", (qNo-1) * 100 / 12);
					request.setAttribute("qNo", qNo);
					request.setAttribute("factpok", factpok);
					rd = request.getRequestDispatcher("/WEB-INF/view/factpok/test.jsp");
					rd.forward(request, response);	
				}
				
				
			} else {
				String op = request.getParameter("op");
				qNo = Integer.parseInt(request.getParameter("qNo"));
				System.out.println(op);
				
				s1 = (Integer) session.getAttribute("s1");
				s2 = (Integer) session.getAttribute("s2");
				s3 = (Integer) session.getAttribute("s3");
				s4 = (Integer) session.getAttribute("s4");
				
				switch(qNo) {
				case 1:
				case 2:
				case 3:
					s1 += (op.equals("ans1")) ? 2: -2; break;
				case 4:
				case 5:
				case 6:
					s2 += (op.equals("ans1")) ? 2: -2; break;
				case 7:
				case 8:
				case 9:
					s3 += (op.equals("ans1")) ? 2: -2; break;
				case 10:
				case 11:
				case 12:
					s4 += (op.equals("ans1")) ? 2: -2; break;
				default:
					System.out.println("잘못된 입력");
				}
				
				session.setAttribute("s1", s1);
				session.setAttribute("s2", s2);
				session.setAttribute("s3", s3);
				session.setAttribute("s4", s4);
				
				//System.out.println(qNo + ", " + op);
				response.sendRedirect("/ncpl/factpok/test?qNo=" + (qNo+1));

			}
			break;
		case "result":
			
			s1 = (Integer) session.getAttribute("s1");
			s2 = (Integer) session.getAttribute("s2");
			s3 = (Integer) session.getAttribute("s3");
			s4 = (Integer) session.getAttribute("s4");
			
			//System.out.println(s1 + ", " + s2 + ", " + s3 + ", " + s4);
			result = (s1 >= 0) ? "E" : "I";
			result += (s2 >= 0) ? "S" : "N";
			result += (s3 >= 0) ? "F" : "T";
			result += (s4 >= 0) ? "P" : "J";
			
			request.setAttribute("result", result);
			rd = request.getRequestDispatcher("/WEB-INF/view/factpok/result.jsp");
			rd.forward(request, response);
			
			break;
		default:
			System.out.println("잘못된 입력");
		}
	}
}