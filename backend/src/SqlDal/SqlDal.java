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
		
			PreparedStatement statement = conn.prepareStatement(this.ConvertIncidentsToInsertStatement(incidents));
		
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
		
			PreparedStatement statement = conn.prepareStatement(this.CreateQueryFromIncident(location,date,catagory,type));
		
			ResultSet results = statement.executeQuery();
		
			while (results.next())
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

	private String CreateQueryFromIncident(ILocation location, IDate date,
			ISubCatagory catagory, IncidentType type) {
		return "SELECT * FROM `mars`.`incident` where "
				+ " (`submitted_date` >= '" + (date.GetReportTime().getTime() - date.GetDeviation()*60) + "' and "				
				+ " `submitted_date` >= '" + date.GetReportTime().getTime() + "' and "
				+ " `submitted_date` <= '" + date.GetReportTime().getTime() + "') AND "
				+ " (`lower_left_lng` >= '" + location.GetLowerLeft().GetX() + "' and "
				+ " `lower_left_lng` >= '" + location.GetLowerLeft().GetX() + "') AND "
				+ " (`lower_left_lat` >= '" + location.GetLowerLeft().GetY() + "' and"
				+ " `lower_left_lat` <= '" + location.GetLowerLeft().GetY() + "') AND"
				+ " (`upper_right_lng` >= '" + location.GetUpperRight().GetX() + "' and "
				+ " `upper_right_lng` <= '" + location.GetUpperRight().GetX() + "') AND "
				+ " (`upper_right_lat` >= '" + location.GetUpperRight().GetY() + "' and"
				+ " `upper_right_lat` <= '" + location.GetUpperRight().GetY() + "') ;";
	}

	private IIncident ConvertRowToIncident(String string) {
		// TODO Auto-generated method stub
		return null;
	}
	
	private String ConvertIncidentsToInsertStatement(List<IIncident> incidents) {
		String retVal = "";
		for (IIncident incident : incidents)
		{
			retVal += "INSERT INTO `mars`.`incident` set "
				+ "`incident_id` = '" + incident.GetId() + "'"
				+ ", `submitted_date` = CURRENT_TIMESTAMP"
				+ ", `comment` = '" + incident.GetComment() + "'"
				+ ", `incident_date` = '" + incident.Date().GetReportTime() + "'"
				+ ", `date_end` = '" + (incident.Date().GetReportTime().getTime() - incident.Date().GetDeviation()*60)  + "'"
				+ ", `lower_left_lng` = '" + incident.GetLocation().GetLowerLeft().GetX() + "'"
				+ ", `lower_left_lat` = '" + incident.GetLocation().GetLowerLeft().GetY() + "'"
				+ ", `upper_right_lng` = '" + incident.GetLocation().GetUpperRight().GetX() + "'"
				+ ", `upper_right_lat` = '" + incident.GetLocation().GetUpperRight().GetY() + "'"
				+ ", `category_id` = '" + incident.Type().ordinal()*10 + incident.SubCatagory() + "'; ";
		}
		return retVal;
	}


}
