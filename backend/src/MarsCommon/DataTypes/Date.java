package MarsCommon.DataTypes;
import java.util.GregorianCalendar;

import MarsInterfaces.DataTypes.IDate;

public class Date implements IDate {
	protected java.util.Date date;
	protected int deviation;
	
	public Date(java.util.Date date, int deviation)
	{
		this.date = date;
		this.deviation = deviation;
	}
	
	public Date(int year, int month, int day, int hour, int minute, int deviation)
	{
		this.deviation = deviation;
		this.date = new GregorianCalendar(year,month,day,hour,minute).getTime();
	}
	
	@Override
	public int GetDeviation() {
		return this.deviation;
	}

	@Override
	public java.util.Date GetReportTime() {
		return this.date;
	}

}
