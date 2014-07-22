package MarsCommon.Flow;

import java.util.List;

import MarsInterfaces.DataTypes.IDate;
import MarsInterfaces.DataTypes.IIncident;
import MarsInterfaces.DataTypes.ILocation;
import MarsInterfaces.DataTypes.ISubCatagory;
import MarsInterfaces.Flow.IAlerter;
import MarsInterfaces.Flow.IDataExtractor;
import MarsUtils.IncidentType;

public abstract class DAL implements IDataExtractor, IAlerter {

	@Override
	public abstract void Alert(List<IIncident> incidents);

	@Override
	public abstract List<IIncident> GetIncidents(ILocation location, IDate date,
			ISubCatagory catagory, IncidentType type);

}
