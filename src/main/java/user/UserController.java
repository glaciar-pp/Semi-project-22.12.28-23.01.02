package user;

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

import org.mindrot.jbcrypt.BCrypt;


/**
 * Servlet implementation class UserServiceController
 */
@WebServlet({ "/user/login", "/user/logout", "/user/register", 
			  "/user/delist", "/user/update", "/user/delete", "/user/deleteConfirm" })
public class UserController extends HttpServlet {
	
	protected void service(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		request.setCharacterEncoding("utf-8");
		String[] uri = request.getRequestURI().split("/");
		String action = uri[uri.length - 1];
		UserDAO dao = new UserDAO();
		HttpSession session = request.getSession();
		session.setAttribute("menu", "user");
		
		response.setContentType("text/html; charset=utf-8");
		String uid = null, pwd = null, pwd2 = null, uname = null, email = null;
		User user = null;
		RequestDispatcher rd = null;
		switch(action) {
		case "delist":
			uid = request.getParameter("uid");
			List<User> list = dao.listUsers();
			request.setAttribute("userList", list);
			rd = request.getRequestDispatcher("/WEB-INF/view/user/delist.jsp?uid=" + uid);
			rd.forward(request, response);
			break;
		case "login":
			if (request.getMethod().equals("GET")) {
				rd = request.getRequestDispatcher("/WEB-INF/view/user/login.jsp");
				rd.forward(request, response);
			} else {
				uid = request.getParameter("uid");
				pwd = request.getParameter("pwd");
				user = dao.getUserInfo(uid);
				if (user.getUid() != null) {		// uid 가 존재
					if (BCrypt.checkpw(pwd, user.getPwd())) {
						// System.out.println(u.getUid() + ", " + u.getUname());
						session.setAttribute("uid", user.getUid());
						session.setAttribute("uname", user.getUname());
						
						// Welcome message
						request.setAttribute("msg", user.getUname() + "님 환영합니다.");
						request.setAttribute("url", "/ncpl/user/delist?uid=" + uid);
						rd = request.getRequestDispatcher("/WEB-INF/view/quiz/choice.jsp");
						rd.forward(request, response);
					} else {
						// 재 로그인 페이지
						request.setAttribute("msg", "잘못된 패스워드 입니다. 다시 입력하세요.");
						request.setAttribute("url", "/ncpl/user/login");
						rd = request.getRequestDispatcher("/WEB-INF/view/user/alertMsg.jsp");
						rd.forward(request, response);
					}
				} else {				// uid 가 없음
					// 회원 가입 페이지로 안내
					request.setAttribute("msg", "회원 가입 페이지로 이동합니다.");
					request.setAttribute("url", "/ncpl/user/register");
					rd = request.getRequestDispatcher("/WEB-INF/view/user/alertMsg.jsp");
					rd.forward(request, response);
				}
			}
			break;
		case "logout":
			session.invalidate();
			response.sendRedirect("/ncpl/user/login");
			break;
		case "register":
			if (request.getMethod().equals("GET")) {
				rd = request.getRequestDispatcher("/WEB-INF/view/user/register.jsp");
				rd.forward(request, response);
			} else {
				uid = request.getParameter("uid").strip();
				pwd = request.getParameter("pwd").strip();
				pwd2 = request.getParameter("pwd2").strip();
				uname = request.getParameter("uname").strip();
				email = request.getParameter("email").strip();
				if (pwd.equals(pwd2)) {
					user = new User(uid, pwd, uname, email);
					dao.registerUser(user);
					response.sendRedirect("/ncpl/user/login");
				} else {
					request.setAttribute("msg", "패스워드 입력이 잘못되었습니다.");
					request.setAttribute("url", "/ncpl/user/register");
					rd = request.getRequestDispatcher("/WEB-INF/view/user/alertMsg.jsp");
					rd.forward(request, response);
				}
			}
			break;
		case "update":
			if (request.getMethod().equals("GET")) {
				uid = request.getParameter("uid");
				user = dao.getUserInfo(uid);
				request.setAttribute("user", user);
				rd = request.getRequestDispatcher("/WEB-INF/view/user/update.jsp");
				rd.forward(request, response);
			} else {								// POST
				uid = request.getParameter("uid");
				pwd = request.getParameter("pwd").strip();
				pwd2 = request.getParameter("pwd2").strip();
				uname = request.getParameter("uname").strip();
				email = request.getParameter("email").strip();
				//패스워드를 입력하지 않은 경우(패스워드 제외하고 업데이트)
				if (pwd == null || pwd.equals("")) {
					user = new User(uid, uname, email);
					dao.updateUser(user);
					session.setAttribute("uname", uname);
					response.sendRedirect("/ncpl/user/delist?uid=" + uid);				
				//패스워드를 입력한 경우(확인과 일치하는 경우)
				} else if(pwd.equals(pwd2)) {
					user = new User(uid, pwd, uname, email);
					dao.updateUserWithPassword(user);
					session.setAttribute("uname", uname);
					response.sendRedirect("/ncpl/user/delist?uid=" + uid);	
				} else {//패스워드를 입력한 경우(잘못 입력한 경우)
					request.setAttribute("msg", "패스워드 입력이 잘못되었습니다.");
					request.setAttribute("url", "/ncpl/user/update?uid=" + uid);
					rd = request.getRequestDispatcher("/WEB-INF/view/user/alertMsg.jsp");
					rd.forward(request, response);
				}				
			}
			break;
		case "delete":
			uid = request.getParameter("uid");
			rd = request.getRequestDispatcher("/WEB-INF/view/user/delete.jsp?uid=" + uid);
			rd.forward(request, response);
			break;
		case "deleteConfirm":
			uid = request.getParameter("uid");
			dao.deleteUser(uid);
			response.sendRedirect("/ncpl/user/login");
			break;
		default:
			System.out.println(request.getMethod() + " 잘못된 경로");
		}
	}

}