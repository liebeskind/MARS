package MarsCommon.DataTypes;
import MarsInterfaces.DataTypes.ILocation;
import MarsUtils.Point;

public class Location implements ILocation{
	Point LeftLower, RightUpper;
	static final double angleConst = Math.sqrt(2)/2; 
	
	public Location(Point leftLower, Point rightUpper)
	{
		this.LeftLower = leftLower;
		this.RightUpper = rightUpper;
	}
	
	public Location(Point center, int diagonal)
	{
		this.LeftLower = new Point(center.GetX() - angleConst*diagonal, center.GetY() - angleConst*diagonal);
		this.RightUpper = new Point(center.GetX() + angleConst*diagonal, center.GetY() + angleConst*diagonal);
	}
	
	@Override
	public boolean Overlap(ILocation location) {
		if (this.LeftLower == null || this.RightUpper == null || location == null)
		{
			return false;
		}
		return (this.GetLowerLeft().GetX() < location.GetLowerLeft().GetX() &&
			this.GetLowerLeft().GetY() < location.GetLowerLeft().GetY() &&
			this.GetUpperRight().GetX() > location.GetUpperRight().GetX() &&
			this.GetUpperRight().GetY() > location.GetUpperRight().GetY());
	}
	
	@Override
	public Point GetLowerLeft() {
		return this.LeftLower;
	}
	
	@Override
	public Point GetUpperRight() {
		return this.RightUpper;
	}

}
