package MarsCommon.Flow;

import MarsCommon.Mediator;
import MarsInterfaces.DataTypes.IIncident;
import MarsInterfaces.DataTypes.ILocation;
import MarsInterfaces.Flow.IReporter;
import MarsInterfaces.Flow.IUpdater;

public abstract class Receiver implements IUpdater, IReporter {
	protected Mediator mediator; 
	protected Receiver(Mediator mediator)
	{
		this.mediator = mediator;
	}
	
	@Override
	public void Report(IIncident incident)
	{
		this.mediator.NewIncidentReported(incident);
	}

	@Override
	public void Update(String userId, ILocation location)
	{
		this.mediator.UserLocationUpdate(userId,location);
	}
}
