package pColor;

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

public class PColorDao {
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
	
	public List<PColor> listQues() {
		Connection conn = getConnection();
		String sql = "SELECT * FROM pColor ORDER BY qNo;";
		List<PColor> list = new ArrayList<>();
		try {
			Statement stmt = conn.createStatement();
			ResultSet rs = stmt.executeQuery(sql);
			while (rs.next()) {
				PColor pcolor = new PColor();
				pcolor.setqNo(rs.getInt(1));
				pcolor.setContent(rs.getString(2));
				pcolor.setAns1(rs.getString(3));
				pcolor.setAns2(rs.getString(4));
				list.add(pcolor);
			}
			rs.close(); stmt.close(); conn.close();
		} catch (Exception e) {
			e.printStackTrace();
		}
		return list;
	}
	
	public PColor getQuesInfo(int qNo) {
		Connection conn = getConnection();
		String sql = "SELECT * FROM pColor WHERE qNo=?;";
		PColor pcolor = new PColor();
		try {
			PreparedStatement pStmt = conn.prepareStatement(sql);
			pStmt.setInt(1, qNo);
			
			ResultSet rs = pStmt.executeQuery();
			while (rs.next()) {
				pcolor.setqNo(rs.getInt(1));
				pcolor.setContent(rs.getString(2));
				pcolor.setAns1(rs.getString(3));
				pcolor.setAns2(rs.getString(4));
			}
			rs.close(); pStmt.close(); conn.close();
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return pcolor;
	}
}