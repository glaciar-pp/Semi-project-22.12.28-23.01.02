package factpok;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

import javax.naming.Context;
import javax.naming.InitialContext;
import javax.sql.DataSource;

public class FactpokDao {
	public static Connection getConnection() {
		Connection conn;
		try {
			Context initContext = new InitialContext();
			DataSource ds = (DataSource) initContext.lookup("java:comp/env/jdbc/project");
			conn = ds.getConnection();
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}
		return conn;
	}
	
	public List<Factpok> listQues() {
		Connection conn = getConnection();
		String sql = "SELECT * FROM factPok ORDER BY qNo;";
		List<Factpok> list = new ArrayList<>();
		try {
			Statement stmt = conn.createStatement();
			ResultSet rs = stmt.executeQuery(sql);
			while (rs.next()) {
				Factpok factpok = new Factpok();
				factpok.setqNo(rs.getInt(1));
				factpok.setContent(rs.getString(2));
				factpok.setAns1(rs.getString(3));
				factpok.setAns2(rs.getString(4));
				list.add(factpok);
			}
			rs.close(); stmt.close(); conn.close();
		} catch (Exception e) {
			e.printStackTrace();
		}
		return list;
	}
	
	public Factpok getQuesInfo(int qNo) {
		Connection conn = getConnection();
		String sql = "SELECT * FROM factPok WHERE qNo=?;";
		Factpok factpok = new Factpok();
		try {
			PreparedStatement pStmt = conn.prepareStatement(sql);
			pStmt.setInt(1, qNo);
			
			ResultSet rs = pStmt.executeQuery();
			while (rs.next()) {
				factpok.setqNo(rs.getInt(1));
				factpok.setContent(rs.getString(2));
				factpok.setAns1(rs.getString(3));
				factpok.setAns2(rs.getString(4));
			}
			rs.close(); pStmt.close(); conn.close();
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return factpok;
	}
}