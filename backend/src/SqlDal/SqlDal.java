package SqlDal;

import java.util.ArrayList;
import java.util.List;
import java.sql.*;

import MarsCommon.Flow.DAL;
import MarsInterfaces.DataTypes.IDate;
import MarsInterfaces.DataTypes.IIncident;
import MarsInterfaces.DataTypes.ILocation;
import MarsInterfaces.DataTypes.ISubCatagory;
import MarsUtils.IncidentType;

public class SqlDal extends DAL {

	@Override
	public void Alert(List<IIncident> incidents) 
	{
		try
		{
			Connection conn = this.CreateConnection();
			if (conn == null)
			{
				return;
			}
		
			PreparedStatement statement = conn.prepareStatement("insert sysdate to dual");
		
			statement.execute();
		
			conn.close();
		} 
		catch (Exception exp)
		{
			System.out.print(exp.getMessage());
		}
	}

	private Connection CreateConnection() {
		try
		{
			String url = "jdbc:mysql://localhost/mars";
			Class.forName ("com.mysql.jdbc.Driver").newInstance();
			return DriverManager.getConnection (url, "root", "");
		}
		catch (Exception exp)
		{
			return null;
		}
	}

	@Override
	public List<IIncident> GetIncidents(ILocation location, IDate date,
			ISubCatagory catagory, IncidentType type)
	{
		List<IIncident> returnValue = new ArrayList<IIncident>();
		
		try
		{
			Connection conn = this.CreateConnection();
			if (conn == null)
			{
				return null;
			}
		
			PreparedStatement statement = conn.prepareStatement("select sysdate from dual");
		
			ResultSet results = statement.executeQuery();
		
			while(results.next())
			{
				System.out.print(results.getString(0));
				returnValue.add(this.ConvertRowToIncident(results.getString(0)));
			}
			conn.close();
		} 
		catch (Exception exp){
			System.out.print(exp.getMessage());
		}
		
		return returnValue;		
	}

	private IIncident ConvertRowToIncident(String string) {
		// TODO Auto-generated method stub
		return null;
	}

}
