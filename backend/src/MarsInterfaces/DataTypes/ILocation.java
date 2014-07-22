package MarsInterfaces.DataTypes;
import MarsUtils.Point;

public interface ILocation {
	public boolean Overlap(ILocation location);	
	public Point GetLowerLeft();
	public Point GetUpperRight();
}
