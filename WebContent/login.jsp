<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Login</title>
</head>



<%@page import="java.sql.*" %>
<%@page import="javax.sql.*" %>


<% 

String account=request.getParameter("account");
String ssn=request.getParameter("ssn");
String loan_type=request.getParameter("apply");
String amount=request.getParameter("amount");

String url="jdbc:mysql://localhost:3306/ABCbank?serverTimezone=UTC";
Class.forName("com.mysql.jdbc.Driver");
try {
	
	java.util.Date now = new java.util.Date();
	java.sql.Date sqlDate = new java.sql.Date(now.getTime());
	
	Connection connection = DriverManager.getConnection(url,"root","root"); 

	
	PreparedStatement ps;
	ps = connection.prepareStatement("INSERT INTO Loan(account_id, loantype, loan_amount, DATE) VALUES" +
			"(?,?,?,?)");
	ps.setString(1,account);
	ps.setString(2,loan_type);
	ps.setString(3, amount);
	ps.setDate(4, sqlDate);
	
	
	ps.executeUpdate(); 
	
	
	
	String querySql = "SELECT * FROM Loan WHERE account_id="+account+"";
	Statement st=connection.createStatement();
	ResultSet rs=st.executeQuery(querySql);
	while(rs.next())
	{
		// rs.getString(1); //or rs.getString("column name");
		String loanNo = rs.getString("loan_number");
		String loanType = rs.getString("loantype");
		String date = rs.getString("DATE");
		
		%>
		<div class="mcontainer">
		
		<p> Thank you for applying loan with us.</p>
		<p>Loan number: <%=loanNo %></p>
		<p>You applied for <%=loanType%> loan on <%=date %> </p>
		</div>
		<%
		

	}
	
	String querySql1 = "SELECT balance FROM hasBalance WHERE SSN="+ssn+"";
	Statement st1=connection.createStatement();
	ResultSet rs1=st1.executeQuery(querySql1);
	while(rs1.next())
	{
		// rs.getString(1); //or rs.getString("column name");
		int loan_status = rs1.getInt("balance");
		if(loan_status>4000) {
			
			%>
			<div class="mcontainer">
			<p>Congratulations. You are eligible for <%=loan_type %> loan. </p>
			
			</div>
			<% 
		
			
			break;
		}
		else {
			
			%>
			<div class="mcontainer">
			<p>We are sorry. You are not eligible for <%=loan_type %> loan.
			Please check back again in few months. </p>
				
			</div>
			<% 
		
			break;
		}
		
		
	
	}

} catch (SQLException e) {

	e.printStackTrace();
}



%>


<a href="file.jsp" class="abtn">Account Summary</a>
<a href="index.html" class="btn">Exit</a>


</body>
</html>