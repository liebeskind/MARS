package MarsInterfaces.DataTypes;

import MarsUtils.IncidentType;

public interface IIncident {
	public ILocation GetLocation();
	public IDate Date();
	public IComment GetComment();
	public ISubCatagory SubCatagory();
	public IncidentType Type();
	public String GetId();
	public String GetUserId();
}
