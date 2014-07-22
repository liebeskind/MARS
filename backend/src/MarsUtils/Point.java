package MarsUtils;

public class Point {
	double x, y;
	boolean Initiated = false;
	
	public Point(double x, double y)
	{
		this.x = x;
		this.y = y;
		this.Initiated = true;
	}
	
	public Point()
	{
		this.x = 0;
		this.y = 0;
	}
	
	public double GetX()
	{
		return this.x;
	}
	
	public double GetY()
	{
		return this.x;
	}
	
	public boolean IsInitiated()
	{
		return this.Initiated;
	}
}
