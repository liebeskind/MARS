package MarsInterfaces.Flow;

import java.util.List;

import MarsInterfaces.DataTypes.IIncident;

public interface IAlerter {
	public void Alert(List<IIncident> incidents);
}
