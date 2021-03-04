
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Registration</title>
</head>
<body>
<%@page import="java.sql.*" %>
<%@page import="javax.sql.*" %>
<% 
String fName=request.getParameter("firstname");
String lName=request.getParameter("Lastname");
String age=request.getParameter("age");
String email=request.getParameter("email");
String password=request.getParameter("psw");
String rpassword=request.getParameter("psw-repeat");

System.out.println(fName);
System.out.println(lName);
System.out.println(age);
System.out.println(email);


String url="jdbc:mysql://localhost:3306/bookey?serverTimezone=UTC";

Class.forName("com.mysql.jdbc.Driver");
try {
Connection connection = DriverManager.getConnection(url,"root","root"); 
PreparedStatement ps;
ps = connection.prepareStatement("Insert into USERS(f_Name, l_Name, age, email, password) values(?,?,?,?,?)");

ps.setString(1,fName);
ps.setString(2,lName);
ps.setString(3,age);
ps.setString(4,email);
ps.setString(5,password);

ps.executeUpdate();




} catch (SQLException e) {

	e.printStackTrace();
}



%>
<h1>Thank you</h1>




</body>
</html>
