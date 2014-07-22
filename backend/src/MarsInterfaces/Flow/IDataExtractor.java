package MarsInterfaces.Flow;

import java.util.List;

import MarsInterfaces.DataTypes.*;
import MarsUtils.IncidentType;;


public interface IDataExtractor {
	public List<IIncident> GetIncidents(ILocation location, IDate date, ISubCatagory catagory, IncidentType type);
}
