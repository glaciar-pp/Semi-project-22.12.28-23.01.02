package constellation;

import java.io.IOException;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.mindrot.jbcrypt.BCrypt;

/**
 * Servlet implementation class test1
 */
@WebServlet({"/constellation/main", "/constellation/result"})
public class Constellation extends HttpServlet {
	
	protected void service(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String[] uri = request.getRequestURI().split("/");
		String action = uri[uri.length - 1];
		request.setCharacterEncoding("UTF-8");	
		String result = "";
		
		response.setContentType("text/html; charset=utf-8");
		switch(action) {
		case "main":
			if (request.getMethod().equals("GET")) {
				RequestDispatcher rd = request.getRequestDispatcher("/WEB-INF/view/constellation/main.jsp");
				rd.forward(request, response);	
				return;
			} else {
				int month = Integer.parseInt(request.getParameter("month"));
				int day = Integer.parseInt(request.getParameter("day"));
				
				switch(month) {
				case 1:
					result = (day <= 19) ? "염소자리" : "물병자리"; break;
				case 2:
					result = (day <= 18) ? "물병자리" : "물고기자리"; break;
				case 3:
					result = (day <= 20) ? "물고기자리" : "양자리"; break;
				case 4:
					result = (day <= 19) ? "양자리" : "황소자리"; break;
				case 5:
					result = (day <= 20) ? "황소자리" : "쌍둥이자리"; break;
				case 6:
					result = (day <= 21) ? "쌍둥이자리" : "게자리"; break;
				case 7:
					result = (day <= 22) ? "게자리" : "사자자리"; break;
				case 8:
					result = (day <= 22) ? "사자자리" : "처녀자리"; break;
				case 9:
					result = (day <= 22) ? "처녀자리" : "천칭자리"; break;
				case 10:
					result = (day <= 22) ? "천칭자리" : "전갈자리"; break;
				case 11:
					result = (day <= 22) ? "전갈자리" : "사수자리"; break;
				case 12:
					result = (day <= 24) ? "사수자리" : "염소자리"; break;
				default:
					System.out.println("잘못된 입력");
				}
				//System.out.println(result);
				request.setAttribute("result", result);
				RequestDispatcher rd = request.getRequestDispatcher("/WEB-INF/view/constellation/result.jsp");
				rd.forward(request, response);	
				//System.out.println(action);
				break;
			}
		case "result":
			request.getAttribute(result);
			break;
		default:
			System.out.println("잘못된 입력");
			
		}
	}

}
