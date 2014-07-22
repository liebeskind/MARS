package MarsCommon.Flow;

import java.util.List;

import MarsInterfaces.DataTypes.IIncident;
import MarsInterfaces.Flow.IAlerter;

public abstract class Sender implements IAlerter {

	@Override
	public abstract void Alert(List<IIncident> incidents);

}
